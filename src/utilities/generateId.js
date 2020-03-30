export const generateId = (prefix = 'uid') => `${prefix}-${Math.round(Math.random() * 1000000)}`;
