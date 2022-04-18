import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlainBody } from '../midlewares/plainBody.midleware';
import { SalesService } from './sales.service';

@Controller('/sales')
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Post('/record')
  postRecord(@PlainBody() records: string): string {
    return this.salesService.PostRecord(records);
  }
  @Get('/report')
  getReport(): any {
    return this.salesService.getReport();
  }
}
