const fs = require('fs');
const path = require('path');

// Загружаем JSON
const json = require('../../design-tokens/variables.json');

const colorMap = {}; // { 'ColorBase.Gray.Gray 19': '#131314' }
const scssVariables = [];

/**
 * Рекурсивно собирает все цвета с type: color
 */
function collectColors(obj, path = []) {
  for (const key in obj) {
    const value = obj[key];
    const currentPath = [...path, key];

    if (value?.type === 'color' && value?.value) {
      const fullKey = currentPath.join('.');
      colorMap[fullKey] = value.value;
    } else if (typeof value === 'object') {
      collectColors(value, currentPath);
    }
  }
}

/**
 * Преобразует ключ пути JSON в формат SCSS-переменной
 */
function toScssVarName(path) {
  return path.toLowerCase().replace(/[\s.#]+/g, '-').replace(/[^a-z0-9-_]/gi, '') + '-value';
}

/**
 * Рекурсивно формирует SCSS переменные
 */
function convertToScss(obj, path = []) {
  for (const key in obj) {
    const value = obj[key];
    const currentPath = [...path, key];
    const fullPath = currentPath.join('.');
    const varName = toScssVarName(currentPath.join('-'));

    if (value?.type === 'color' && value?.value) {
      let val = value.value;
      if (val.startsWith('{') && val.endsWith('}')) {
        const ref = val.slice(1, -1).trim();
        const refVar = toScssVarName(ref);
        val = `$${refVar}`;
      }
      scssVariables.push(`$${varName}: ${val};`);
    } else if (typeof value === 'object') {
      convertToScss(value, currentPath);
    }
  }
}

// Шаг 1 — собираем реальные цвета
collectColors(json);

// Шаг 2 — записываем базовые цвета
Object.entries(colorMap).forEach(([path, value]) => {
  if (!value.startsWith('{')) {
    const varName = toScssVarName(path);
    scssVariables.push(`$${varName}: ${value};`);
  }
});

// Шаг 3 — записываем ссылочные переменные
convertToScss(json);

// Запись в файл
const outputPath = path.resolve(__dirname, '../styles/variables.scss');
fs.writeFileSync(outputPath, scssVariables.join('\n'), 'utf8');
console.log('✅ Файл variables.scss успешно сгенерирован в:', outputPath);
