const validateDate = (value) => {
  if (new Date(value).toString() === 'Invalid Date') {
    return null;
  }

  return value;
};

export default validateDate;
