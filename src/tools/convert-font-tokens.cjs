const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "../../design-tokens/type-tokens.json");
const outputPath = path.join(__dirname, "../styles/_mixins-font.scss");

const tokenMap = {
  Family: {
    "Family Heading": "$type-family-family-heading",
    "Family Main": "$type-family-family-main"
  },
  Size: {
    "Font Size.1": "$type-font-size-1",
    "Font Size.2": "$type-font-size-2",
    "Font Size.3": "$type-font-size-3",
    "Font Size.4": "$type-font-size-4",
    "Font Size.5": "$type-font-size-5",
    "Font Size.6": "$type-font-size-6",
    "Font Size.7": "$type-font-size-7",
    "Font Size.8": "$type-font-size-8",
    "Font Size.9": "$type-font-size-9",
    "Font Size.10": "$type-font-size-10",
    "Font Size.11": "$type-font-size-11",
    "Font Size.12": "$type-font-size-12"
  },
  Weight: {
    "Font Weight.Regular": "$type-font-weight-regular",
    "Font Weight.Medium": "$type-font-weight-medium",
    "Font Weight.Semibold": "$type-font-weight-semibold",
    "Font Weight.Bold": "$type-font-weight-bold"
  }
};

function extractReference(ref) {
  return ref.match(/\{Family\.(.+?)\}/)?.[1] || "";
}

function getVariable(type, value) {
  for (const key in tokenMap[type]) {
    if (value.includes(key)) return tokenMap[type][key];
  }
  return null;
}

const json = JSON.parse(fs.readFileSync(inputPath, "utf8"));

let result = "@use './type-primitives.scss' as *;\n\n";

for (const category in json) {
  const levels = json[category];
  for (const level in levels) {
    const styles = levels[level];
    for (const style in styles) {
      const props = styles[style];
      const family = getVariable("Family", extractReference(props.Family.value));
      const size = getVariable("Size", extractReference(props.Size.value));
      const weight = getVariable("Weight", extractReference(props.Weight.value));
      const mixinName = `type-${level.replace(/\s+/g, "")}-${style}`;

      result += `@mixin ${mixinName} {\n`;
      result += `  font-family: ${family};\n`;
      result += `  font-size: ${size};\n`;
      result += `  font-weight: ${weight};\n`;
      result += `}\n\n`;
    }
  }
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, result);
console.log("✅ SCSS mixins сгенерированы:", outputPath);
