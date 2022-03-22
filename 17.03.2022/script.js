let arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];

let result = arr.reduce(function(sum,elem){
    if (elem >= 0) {
        return sum + elem;
    } else {
        return sum;
    }
});
console.log(result);


const Arr = (element, count) => {
    let Arr = [];
    for(count; count > 0; count--) {
        Arr.push(element);
    }
    return Arr;
}
console.log(Arr('a', 3))