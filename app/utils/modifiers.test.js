import {
  zeroBalanceValue,
  setStyle
} from './modifiers';

describe('zeroBalanceValue util', () => {
  it('will return a coin object with 0 for balance, value & percentage', () => {
    const testCoin = { balance: 500, value: 20, percentage: 25 };
    const zeroedCoin = zeroBalanceValue(testCoin);
    expect(zeroedCoin.balance).toEqual(0);
    expect(zeroedCoin.value).toEqual(0);
    expect(zeroedCoin.percentage).toEqual(0);
  });
});

describe('setStyle util', () => {
  it('will return the Bitcoin square style', () => {
    const bitcoin = { id: 'bitcoin', symbol: 'BTC' };
    const btcStyle = setStyle(bitcoin.id);
    expect(btcStyle.color).toEqual('#fff');
    expect(btcStyle.backgroundColor).toEqual('#f5922f');
  });

  it('will return the Bitcoin Cash square style', () => {
    const bitcoinCash = { id: 'bitcoin-cash', symbol: 'BCH' };
    const bchStyle = setStyle(bitcoinCash.id);
    expect(bchStyle.color).toEqual('#fff');
    expect(bchStyle.backgroundColor).toEqual('#61be42');
  });

  it('will return the 0x/ZRX square style', () => {
    const zrx = { id: '0x', symbol: 'ZRX' };
    const zrxStyle = setStyle(zrx.id);
    expect(zrxStyle.color).toEqual('#fff');
    expect(zrxStyle.backgroundColor).toEqual('#404040');
  });
});
