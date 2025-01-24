// JS Homework 5

// Тест на нахождение ключей
// Сложить все цифры из массива с объектами в переменную total

// let arr = [[{a: {price: 20}}][{a: {price: 35}}][{a: {price: 44}}]]
// let total = 0
let arr = [
    [{ a: { price: 20 } }],
    [{ a: { price: 35 } }],
    [{ a: { price: 44 } }],
];
let price = arr.flat().reduce((sum, obj) => sum + obj.a.price, 0);
console.log(price);