function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
var result = g.next(); // {value: 3, done: false}
console.log(result.value);
console.log(result.done);
result = g.next(); // {value: undefine, done: true}
console.log(result.value);
console.log(result.done);


var g2 = gen(1);
result = g2.next() // { value: 3, done: false }
console.log(result.value);
console.log(result.done);
result = g2.next(2) // { value: 2, done: true }
console.log(result.value);
console.log(result.done);