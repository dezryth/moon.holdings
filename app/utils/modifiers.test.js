import { setStyle } from './modifiers';

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
