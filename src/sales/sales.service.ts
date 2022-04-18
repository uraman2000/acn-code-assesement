import { Injectable } from '@nestjs/common';
import { JsonReader } from '../utilities/jsonReader';
import ISALES from './sales.interface';

@Injectable()
export class SalesService {
  PostRecord(record): string {
    JsonReader.save(record);
    return 'Data Has been Recorded';
  }
  getReport(): Array<ISALES> {
    return JsonReader.read();
  }
}
