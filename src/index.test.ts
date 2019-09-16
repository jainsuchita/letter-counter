import { letterCounter } from 'index';

describe('should not return undefined', () => {
  it('true should be true', () => {
    const result = letterCounter('hello');
    expect(result).not.toBe(undefined);
  });
});

describe('should return empty object', () => {
  it('true should be true', () => {
    const result = letterCounter('');
    expect(Object.keys(result).length).toBe(0);
  });
});

describe('should return objects of length 4', () => {
  it('true should be true', () => {
    const result = letterCounter('hello');
    expect(Object.keys(result).length).toBe(4);
  });
});

describe('count of all letters should be same as length of the string', () => {
  it('true should be true', () => {
    const input = 'blahblah';
    const result = letterCounter(input);
    const len = Object.keys(result).reduce((total, letter) => {
      total = total + result[letter];
      return total;
    }, 0);
    expect(len).toBe(input.split('').length);
  });
});
