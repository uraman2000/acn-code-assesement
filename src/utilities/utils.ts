import ISALES from 'src/sales/sales.interface';

export const CsvToJson = (data): any => {
  let result = [];
  const lines = data.split('\r');
  const headers = lines[0].split(',');
  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentline = lines[i].split(',');

    for (let j = 0; j < headers.length; j++) {
      obj[camelToSnakeCase(headers[j])] = currentline[j].replace('\n', '');
    }

    result.push(obj);
  }


  return result;
};

const camelToSnakeCase = (str) => {
  return str
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace('_', '')
    .toUpperCase();
};
