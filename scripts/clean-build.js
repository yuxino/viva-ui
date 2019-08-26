const fs = require("fs-extra");
const path = require("path");

const resolve = path.resolve;

const PACKAGE_PATH = resolve(__dirname, "../packages");
const RPT2_CACHE = resolve(__dirname, "../.rpt2_cache");

async function cleanTask() {
  const pkgs = await fs.readdir(PACKAGE_PATH);
  pkgs.forEach(async pkg => {
    const pkgDir = resolve(PACKAGE_PATH, pkg);
    const distDir = path.resolve(pkgDir, "dist");
    const nodeModules = path.resolve(pkgDir, "node_modules");
    const types = path.resolve(pkgDir, "types");
    (await fs.exists(distDir)) && (await fs.remove(distDir));
    (await fs.exists(nodeModules)) && (await fs.remove(nodeModules));
    (await fs.exists(types)) && (await fs.remove(types));
  });
  (await await fs.exists(RPT2_CACHE)) && (await fs.remove(RPT2_CACHE));
}

cleanTask();
