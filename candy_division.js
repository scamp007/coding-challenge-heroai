function candy_division(n) {
  const res = [];
  const otherRes = [];
  let i;
  for (i = 1; i * i <= n; i ++) {
    if (n % i === 0) {
      res.push(i - 1);
      if (i * i === n) continue;
      otherRes.push(n / i - 1);
    }
  }
  return res.concat(otherRes.reverse());
}

console.log(candy_division(30));
console.log(candy_division(25));