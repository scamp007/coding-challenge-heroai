Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

function train_sorting(n, cars) {
  const result = [];
  function re(n, cars, res) {
    const tempRes = [...res], tempCars = [...cars];
    result.push([...res].length);
    if (n === 0) return;
    if (cars.length === 0) return;
    if (res.length === 0) {
      res.push(cars[0]);
      cars.splice(0, 1)
      re(n - 1, cars, res);
    } else if (res[0] < cars[0]) {
      res.splice(0, 0, cars[0]);
      cars.splice(0, 1);
      re(n - 1, cars, res);
    } else if (res[res.length - 1] > cars[0]) {
      res.push(cars[0]);
      cars.splice(0, 1);
      re(n - 1, cars, res);
    } else {
      res.pop(); re(n, cars, res);
      res = tempRes; cars = tempCars;
      res.splice(0, 1); re(n, cars, res);
    }
  }
  re(n, cars, []);
  return result.max();
}

console.log(train_sorting(3, [3, 2, 1]));