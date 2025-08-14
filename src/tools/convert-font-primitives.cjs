const fs = require("fs");
const path = require("path");

function normalizeKey(key) {
  return key
    .replace(/\s*\(([^)]+)\)/, "") // убираем размер из скобок
    .replace(/\s+/g, "-")
    .toLowerCase();
}

const json = require("../../design-tokens/type-primitives.json");

let output = "";

const family = json.Family;

for (const [key, data] of Object.entries(family)) {
  if (key === "Font Size") {
    for (const [sizeName, sizeObj] of Object.entries(data)) {
      const normalized = normalizeKey(sizeName);
      output += `$type-font-size-${normalized}: ${sizeObj.value}px;\n`;
    }
  } else if (key === "Font Weight") {
    for (const [weightName, weightObj] of Object.entries(data)) {
      const normalized = normalizeKey(weightName);
      output += `$type-font-weight-${normalized}: ${weightObj.value};\n`;
    }
  } else {
    const normalized = normalizeKey(key);
    output += `$type-family-${normalized}: "${data.value}";\n`;
  }
}

// Путь к выходному файлу
const outputPath = path.resolve(__dirname, "../styles/type-primitives.scss");

fs.writeFileSync(outputPath, output);
console.log("✅ SCSS переменные созданы:", outputPath);
