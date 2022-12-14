const transformValue = obj => {
  if (typeof obj === "string") {
    return obj + ' AI';
  } else if (typeof obj === 'number') {
    return obj + 1;
  } else if (Array.isArray(obj)) {
    return obj.map(item => transformValue(item));
  } else {
    const resObj = {};
    for (const key in obj) {
      resObj[key] = transformValue(obj[key]);
    }
    return resObj;
  }
};

const example = {
  a: 123,
  b: 'hero',
  c: [1, 2, 3],
  d: {
    e: 3,
    f: ['abc', 'def']
  }
};

console.log(transformValue(example))