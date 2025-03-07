export const package_json = {
  name: process.argv?.[2] || "typescript",
  version: "1.0.0",
  main: "index.js",
  scripts: {
    start: "node dist/index.js",
    build: "tsc",
    dev: 'tsup src/index.ts --watch --onSuccess="node dist/index.js"',
  },
  keywords: [],
  author: "",
  license: "ISC",
  description: "",
  devDependencies: {
    "@types/node": "^22",
    tsup: "^8",
    typescript: "^5",
  },
  dependencies: {},
};

export const tsconfig_json = {
  compilerOptions: {
    target: "ESNext",
    module: "commonjs",
    outDir: "./dist",
    strict: true,
    esModuleInterop: true,
    skipLibCheck: true,
    forceConsistentCasingInFileNames: true,
  },
  include: ["src"],
  exclude: ["node_modules"],
};
