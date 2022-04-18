import ISALES from 'src/sales/sales.interface';

export const SalesStub = (): ISALES => {
  return {
    USER_NAME: 'Jennina',
    AGE: 28,
    HEIGHT: 140,
    GENDER: 'F',
    SALES: 20,
    LAST_PURCHASE_DATE: '04/17/2022',
  };
};

export const recordStub = () => {
  const test = `UserName,Age,Height,Gender,Sales,LastPurchaseDate
Jennina,28,140,F,20,04/17/2022`;
  return test;
};
