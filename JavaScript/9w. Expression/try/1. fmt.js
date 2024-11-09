// const total = { price: 45000, vat: 4500 };
// const fmt = (str, ...args) => `${str[0]} ${args.toLocaleString().padStart(9)}${str[1]}`;

const total = { price: 45000, vat: 4500 };
const fmt = ([label, unit], price) => `${label} ${price.toLocaleString().padStart(9)}${unit}`;

console.log(fmt`주문합계: ${total.price}원`);
console.log(fmt`세액합계: ${total.vat}원`);
