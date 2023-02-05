// 薯条
function FrenchFries(size, price) {
  this.size = size
  this.price = price
}

// 可乐
function Cola(type, size) {
  this.size = size
  this.tpe = type
}

let fries1 = new FrenchFries("小份", "12")
console.log(fries1)
let cola1 = new Cola("小份", "6")
console.log(cola1)
