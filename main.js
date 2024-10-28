// main.js
const fs = require('fs');

// Отримання аргументів командного рядка
const args = require('minimist')(process.argv.slice(2));

// Перевірка наявності необхідних аргументів
if (!args.input || !args.output) {
  console.error("Будь ласка, вкажіть шляхи для --input і --output.");
  process.exit(1);
}

// Читання вхідного файлу
fs.readFile(args.input, 'utf8', (err, data) => {
  if (err) {
    console.error("Помилка при читанні файлу:", err);
    return;
  }

  // Обробка даних (наприклад, просто записуємо їх у вихідний файл)
  fs.writeFile(args.output, data, 'utf8', (err) => {
    if (err) {
      console.error("Помилка при записі у файл:", err);
      return;
    }
    console.log("Дані успішно записані у файл:", args.output);

    // Якщо включено прапорець --display, вивести дані на екран
    if (args.display) {
      console.log("Вміст:", data);
    }
  });
});
