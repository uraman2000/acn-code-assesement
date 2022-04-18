import { Test } from '@nestjs/testing';
import { recordStub, SalesStub } from '../../test/sales.stub';
import { SalesController } from './sales.controller';
import ISALES from './sales.interface';
import { SalesService } from './sales.service';

describe('SalesController', () => {
  let salesController: SalesController;
  let salesService: SalesService;
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SalesController],
      providers: [SalesService],
    }).compile();
    salesController = moduleRef.get<SalesController>(SalesController);
    salesService = moduleRef.get<SalesService>(SalesService);
    jest.clearAllMocks();
  });

  describe('PostRecord', () => {
    describe('when PostRecord is called', () => {
      let postRecord;
      beforeEach(async () => {
        postRecord = await salesController.postRecord(recordStub());
      });

      test('then it should return success', () => {
        console.log(postRecord);
        expect(postRecord).toEqual('Data Has been Recorded');
      });
    });
  });

  // describe('getReport', () => {
  //   describe('when getReport is called', () => {
  //     let sales: ISALES;
  //     beforeEach(async () => {
  //       sales = await salesController.getReport();
  //     });

  //     test('then it should return the report', () => {
  //       expect(sales).toEqual([SalesStub()]);
  //     });
  //   });
  // });
});
