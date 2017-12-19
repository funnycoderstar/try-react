function a(x, y, z) {
    console.log(typeof this);
    return x + y + z;
}
const b = a.bind(null, 5, 5);
console.log(b(5));
console.log(a.call(5, 5, 5));
console.log(typeof ([] + 5 + 5));
console.log(typeof (5 + 5 + []));
