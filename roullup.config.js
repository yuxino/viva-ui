import fs from "fs-extra";
import path from "path";

// rollup config
// https://rollupjs.org/guide/en/#warning-treating-module-as-external-dependency
import rollupResolve from "rollup-plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import sass from "node-sass";

const resolve = path.resolve;
const EXCLUDE_PKG = [".DS_Store", "__template__"];

// typescript config
const tsConfig = pkgDir => ({
  plugins: [
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
});

// scss config
const processSass = function(context) {
  return new Promise((resolve, reject) => {
    sass.renderSync(
      {
        file: context,
        sourceMap: true
        // not working ... ???
        // outputStyle: "expanded"
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

// scss config
const scssConfig = () => ({
  plugins: [
    postcss({
      extract: true,
      minimize: false,
      extensions: ["scss"],
      process: processSass
    })
  ]
});

// generate rollup config to build components
const configBuilder = async () => {
  const PACKAGE_PATH = resolve(__dirname, "packages");
  const pkgs = await fs.readdir(PACKAGE_PATH);
  pkgs.unshift("shared");
  const configs = pkgs
    .filter(pkgName => !EXCLUDE_PKG.includes(pkgName))
    .map(pkgName => {
      const isTheme = pkgName === "theme";
      const iExt = isTheme ? "scss" : "ts";
      const oExt = isTheme ? "css" : "js";
      const pkgDir = resolve(PACKAGE_PATH, pkgName);
      // input dir
      const input = resolve(pkgDir, `src/index.${iExt}`);
      // output config build
      const output = {
        file: resolve(pkgDir, `dist/index.${oExt}`),
        format: "esm",
        sourcemap: true
      };
      return {
        input,
        output,
        ...(isTheme ? scssConfig() : tsConfig(pkgDir))
      };
    });
  return configs;
};

// expose to rollup
export default configBuilder();
