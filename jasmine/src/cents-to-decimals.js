function centsToDecimals(value) {
  if (!value) {
    return 0;
  }
  if (typeof(value) === 'string') {
    return undefined;
  }
  
  return value / 100;
}