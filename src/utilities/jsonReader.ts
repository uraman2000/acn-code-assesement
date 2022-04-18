import ISALES from 'src/sales/sales.interface';
import { CsvToJson } from './utils';

const fs = require('fs');
const filePath = 'downloads/data.csv';
export class JsonReader {
  static save(fileContext: string) {
    fs.writeFileSync(filePath, fileContext);
  }
  static read() {
    try {
      var data = fs.readFileSync(filePath, 'utf8');
    } catch (error) {
      console.log(error);
    }
    data = CsvToJson(data);
    data = data.map((item) => {
      return {
        ...item,
        AGE: parseInt(item.AGE),
        HEIGHT: parseInt(item.HEIGHT),
        SALES: parseInt(item.SALES),
      };
    });
    return data;
  }
}
