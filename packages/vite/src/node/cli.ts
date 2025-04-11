import { cac } from "cac";
import { VERSION } from "./constants";

const cli = cac("vite-playground");

cli
  .command("[root]", "start dev server")
  .alias("dev")
  .action(async (root = ".") => {
    const logger = createLogger();
    logger.info(`Starting dev server in ${root}`);
    await startMockServer();
  });

cli
  .command("build [root]", "build for production")
  .action(async (root = ".") => {
    const logger = createLogger();
    logger.info(`Building project in ${root}`);
    await runMockBuild();
  });

cli.version(VERSION).help();
cli.parse();

export function createLogger() {
  return {
    info: (msg: string) => console.log("[info]", msg),
    error: (msg: string) => console.error("[error]", msg),
  };
}

export async function runMockBuild() {
  console.log("[mock] Building project...");
  setTimeout(() => {
    console.log("[mock] Build complete. Output in ./dist");
  }, 1000);
}

export async function startMockServer() {
  console.log("[mock] Dev server started at http://localhost:3000");
}
