const initialsFromName = (name) => {
  const parts = name.split(' ');
  if (parts.length === 3) {
    parts.splice(1, 1);
  }
  return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
};

export default initialsFromName;
