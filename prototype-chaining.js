Object.prototype.land = 12000;

let grandfatherObj = {
  name: "John",
  land: "2000",
};

let father = Object.create(grandfatherObj);
father.land = 90;
console.log(father.land);

let child = Object.create(father);
child.land = 9;
console.log(child.land);
