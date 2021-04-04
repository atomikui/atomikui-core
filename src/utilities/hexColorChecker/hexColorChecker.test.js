import hexColorChecker from './hexColorChecker';

describe('hexColorChecker', () => {
  it('Should determine if color is light or dark', () => {
    expect(hexColorChecker('#ffffff')).toBe('light');
    expect(hexColorChecker('#000000')).toBe('dark');
  });
});
