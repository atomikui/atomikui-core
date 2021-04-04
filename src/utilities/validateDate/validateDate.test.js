import validateDate from './validateDate';

describe('validateDate', () => {
  it('Should return null if date is invalid', () => {
    expect(validateDate('44/44/4444')).toBeNull();
  });
});

describe('validateDate', () => {
  it('Should return date if valid', () => {
    expect(validateDate('05/22/2021')).toBe('05/22/2021');
  });
});
