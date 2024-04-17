const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};

Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value * 2}`);
});
