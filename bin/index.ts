#!/usr/bin/env node
import { exec } from "child_process";
import fs from "fs/promises";
import { package_json, tsconfig_json } from "./consts";

async function main() {
  const projectName = process.argv?.[2];
  if (projectName) {
    await fs.mkdir(`./${projectName}`, {
      recursive: true,
    });
    process.chdir(`./${projectName}`);
  }
  await fs.writeFile(
    "./package.json",
    new Uint8Array(Buffer.from(JSON.stringify(package_json, null, 2))),
    { flush: true }
  );
  await fs.mkdir("./src");
  await fs.writeFile(
    "./src/index.ts",
    new Uint8Array(Buffer.from("console.log('Hello world!')")),
    { flush: true }
  );
  await fs.writeFile(
    "./tsconfig.json",
    new Uint8Array(Buffer.from(JSON.stringify(tsconfig_json, null, 2))),
    { flush: true }
  );
}

main()
  .then(() => {
    exec("npm i");
    exec("npx gitignore node");
    console.log("Your boilerplate is ready...\nStart coding...");
  })
  .catch((err) => {
    console.error(`Error while building you boilerplate...: ${err}`);
  });
