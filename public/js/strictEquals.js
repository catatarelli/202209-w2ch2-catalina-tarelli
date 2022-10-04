const strictEquals = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log(false);
    return;
  }
  if (Object.is(a, -0) || Object.is(b, -0)) {
    console.log(true);
    return;
  }
  if (Object.is(a, false) && Object.is(b, false)) {
    console.log(true);
    return;
  }

  if (Object.is(a, false) || Object.is(b, false)) {
    console.log(false);
    return;
  }
  if (Object.is(a, b)) {
    console.log(true);
    return;
  }

  if (!Object.is(a, b)) {
    console.log(false);
    return;
  }
};

export default strictEquals;
