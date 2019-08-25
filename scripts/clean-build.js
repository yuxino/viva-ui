const fs = require("fs-extra");
const path = require("path");

const resolve = path.resolve;

const PACKAGE_PATH = resolve(__dirname, "../packages");

async function cleanTask() {
  const pkgs = await fs.readdir(PACKAGE_PATH);
  pkgs.forEach(async pkg => {
    const pkgDir = resolve(PACKAGE_PATH, pkg);
    const distDir = path.resolve(pkgDir, "dist");
    const nodeModules = path.resolve(pkgDir, "node_modules");
    (await fs.exists(distDir)) && (await fs.remove(distDir));
    (await fs.exists(nodeModules)) && (await fs.remove(nodeModules));
  });
}

cleanTask();
