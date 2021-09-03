/*===============================================================
        Doubling of Number(using map and filter)
===============================================================*/

let numbers = [1, 2, 3, 4];
let newNumbers = numbers.filter((odd) => odd % 2).map((double) => double * 2);

console.log(newNumbers);
