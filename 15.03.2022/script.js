// Необ написать фунуцию, которая будет возвращать массив удвоенных исходного массива/
//     пример кода
// ([1,2,3]) => [2,4,6]

/****** удваивание  ******/
// const double1 = (arr) => {
//     const result = arr.map((currentValue) => {
//         return currentValue * 2;
//     })
//   return result;
// }
//
//
//
//
// const double2 = (arr) => arr.map((currentValue) => currentValue * 2);
//
//
// console.log(double1([4,1,1,1,4]));
// console.log(double2([1,2,3]));

/****** фильтр ******/
// const myNumbers = [10, 20, 130, 70, 80, 12];
// const filtered1 = myNumbers.filter(function (currentValue) {
//     return currentValue > 50;
// })
// const filtered2 = myNumbers.filter(currentValue => currentValue > 50);
// console.log(filtered1);
// console.log(filtered2);


const goods = [
    {
        name: 'Iphone',
        price: 790
    },
    {
        name:'Ipone 12 pro',
        price: 800
    },
    {
        name: 'Iphone 12 pro max',
        price: 1050
    },
    {
        name: 'Iphone 13',
        price: 800
    },
    {
        name: 'Iphone 13 pro',
        price: 1000
    },
    {
        name: 'Iphone 13 pro max',
        price: 1200
    },
];
const filterPrice = goods.filter(function(money){
    return money.price > 800;
});
console.log(filterPrice);
