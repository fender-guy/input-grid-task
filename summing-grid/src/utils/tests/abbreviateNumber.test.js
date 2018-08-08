import {abbreviateNumber} from '../abbreviateNumber';

test('should abbreviate numbers', () => {
    expect(abbreviateNumber(100)).toEqual(100);
    expect(abbreviateNumber(1000)).toEqual('1.00K');
    expect(abbreviateNumber(10000)).toEqual('10.0K');
    expect(abbreviateNumber(100000)).toEqual('100K');
    expect(abbreviateNumber(1000000)).toEqual('1.00M');
    expect(abbreviateNumber(10000000)).toEqual('10.0M');
    expect(abbreviateNumber(100000000)).toEqual('100M');
});