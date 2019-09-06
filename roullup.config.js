import fs from "fs-extra";
import path from "path";

// rollup config
// https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
import rollupResolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import sass from "node-sass";

const resolve = path.resolve;
const EXCLUDE_PKG = [".DS_Store", "__template__", "shared"];

const processSass = function(context, payload) {
  return new Promise((resolve, reject) => {
    sass.render(
      {
        file: context
      },
      function(err, result) {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

// generate rollup config to build components
const configBuilder = async () => {
  const PACKAGE_PATH = resolve(__dirname, "packages");
  const pkgs = await fs.readdir(PACKAGE_PATH);
  pkgs.unshift("shared");
  const configs = pkgs
    .filter(pkgName => !EXCLUDE_PKG.includes(pkgName))
    .map(pkgName => {
      const pkgDir = resolve(PACKAGE_PATH, pkgName);
      // input dir
      const input = resolve(pkgDir, `src/index.ts`);
      // output config build
      const output = {
        file: resolve(pkgDir, `dist/index.js`),
        format: "esm",
        sourcemap: true
      };
      return {
        input,
        output,
        plugins: [
          postcss({
            extract: true,
            // minimize: isProductionEnv,
            extensions: ["scss"],
            process: processSass
          }),
          rollupResolve(),
          typescript({
            useTsconfigDeclarationDir: true,
            tsconfigOverride: {
              compilerOptions: {
                declarationDir: resolve(pkgDir, "types")
              },
              include: [path.resolve(pkgDir, "src/**/*.ts")]
            }
          })
        ],
        external: ["react", "react-dom"]
      };
    });
  return configs;
};

// expose to rollup
export default configBuilder();
