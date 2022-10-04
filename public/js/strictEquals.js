const strictEquals = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }
  if (Object.is(a, -0) || Object.is(b, -0)) {
    return true;
  }
  if (Object.is(a, false) && Object.is(b, false)) {
    return true;
  }
  if (Object.is(a, false) || Object.is(b, false)) {
    return false;
  }
  if (Object.is(a, b)) {
    return true;
  }
  if (!Object.is(a, b)) {
    return false;
  }
};

export default strictEquals;
