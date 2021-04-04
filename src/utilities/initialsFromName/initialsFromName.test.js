import initialsFromName from './initialsFromName';

describe('initialsFromName', () => {
  it('Should create initials from name', () => {
    expect(initialsFromName('Robert M. Wilson')).toBe('RW');
    expect(initialsFromName('Robert Wilson')).toBe('RW');
  });
});
