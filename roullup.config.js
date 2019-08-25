import fs from "fs-extra";
import path from "path";

// rollup config
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript";

const resolve = path.resolve;

// generate rollup config to build components
const configBuilder = async () => {
  const PACKAGE_PATH = resolve(__dirname, "packages");
  const pkgs = await fs.readdir(PACKAGE_PATH);
  const configs = pkgs
    .filter(pkgName => pkgName !== "story-book")
    .map(pkgName => {
      const pkgDir = resolve(PACKAGE_PATH, pkgName);
      // input dir
      const input = resolve(pkgDir, `lib/index.ts`);
      // output config build
      const output = {
        file: resolve(pkgDir, `dist/index.js`),
        format: "cjs"
      };
      return {
        input,
        output,
        plugins: [typescript(), babel({ exclude: "node_modules/**" })]
      };
    });
  return configs;
};

// expose to rollup
export default configBuilder();
