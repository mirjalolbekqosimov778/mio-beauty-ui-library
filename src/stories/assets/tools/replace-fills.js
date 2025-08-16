import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folder = path.join(__dirname, "../icons");

console.log("Looking into:", folder);

for (const file of fs.readdirSync(folder)) {
    if (!file.endsWith(".svg")) continue;
    const p = path.join(folder, file);
    let svg = fs.readFileSync(p, "utf8");

    svg = svg
        .replace(/fill="[^"]*"/g, 'fill="currentColor"')
        .replace(/stroke="[^"]*"/g, 'stroke="currentColor"');

    svg = svg.replace(/<svg([^>]*?)>/i, (m, attrs) =>
        /fill=/i.test(attrs) ? m : `<svg${attrs} fill="currentColor">`
    );

    fs.writeFileSync(p, svg, "utf8");
    console.log("Updated:", file);
}
