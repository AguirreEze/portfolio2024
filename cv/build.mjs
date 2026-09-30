// Renders cv/cv.html to public/Ezequiel_Aguirre_CV.pdf using a local Chrome/Edge install.
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const candidates = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
].filter(Boolean);

const browser = candidates.find((p) => existsSync(p));
if (!browser) throw new Error("Chrome/Edge not found. Set CHROME_PATH.");

const input = pathToFileURL(resolve("cv/cv.html")).href;
const output = resolve("public/Ezequiel_Aguirre_CV.pdf");

execFileSync(browser, [
  "--headless",
  "--disable-gpu",
  "--no-pdf-header-footer",
  `--print-to-pdf=${output}`,
  input,
], { stdio: "inherit" });

console.log(`CV written to ${output}`);
