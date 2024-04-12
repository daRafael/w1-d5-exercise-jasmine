describe('centsToDecimals', () => {
  it('Should convert value from cents to floating point number with 2 decimals', () => {
    expect(centsToDecimals(105)).toBe(1.05);
    expect(centsToDecimals(23)).toBe(0.23);
  })
  it('Should return undefined if passed a string', () => {
    expect(centsToDecimals('string')).toBeUndefined();
  })
  it('Should return 0 if no argument is passed', () => {
    expect(centsToDecimals()).toBe(0);
  })
});