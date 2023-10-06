const checkLength = (string, strLength) => string.length <= strLength;

const checkPalidromes = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  return string === string.split('').reverse().join('');
};

const getNums = function (input) {
  let result = '';
  input = String(input).replaceAll(' ', '');

  for (let i = 0; i < input.length; i++) {
    if (input[i] === Number(input[i])) {
      result += input[i];
    }
  }

  return parseInt(result, 10);
};

checkLength('проверяемая строка', 20);
checkPalidromes('Лёша на полке клопа нашёл ');
getNums('2023 год');
