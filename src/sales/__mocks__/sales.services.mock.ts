import { SalesStub } from 'test/sales.stub';

export const SalesService = jest.fn().mockReturnValue({
  getReport: jest.fn().mockReturnValue([SalesStub()]),
});
