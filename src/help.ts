import fs from "fs";
import path from "path";

export function readFile(name: "default" | "alpaca" | "god") {
  const content = fs.readFileSync(
    path.join(__dirname, `./commentFile/comment_${name}_utf8.txt`),
    "utf-8"
  );

  return `/**\n${content}\n*/\n`;
}
