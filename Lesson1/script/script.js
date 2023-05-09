//1) написать цикл, который выводит числа от 0 до 9 в консоль
// for(let i=0; i<10; i++){
//     console.log(i);
// }

//2) найти сумму чисел от 0 до 100 используя цикл
// let result = 0;
// for(let i=0; i<=100; i++){
//     console.log(i);
//     result +=i;
// }
// console.log(result);

// 3) написать цкиал, который последовательно выводит все числа из массива
// const arr = [12, 4, -45, 2, -5, 34, -1, 6];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// 4) написать цкиал, который выводит все положительные числа
// const arr = [12, 4, -45, 2, -5, 34, -1, 6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>0){
//          console.log(arr[i]);
//     }
// }

// написать цикл, который преобразует все отрицательные числа в положительные
// -45 -> 45
// const arr = [12, 4, -45, 2, -5, 34, -1, 6];
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<0){
//         arr[i] = -arr[i];
//        // arr[arr.indexOf(arr[i])] = -arr[i];
//     }
// }
// console.log(arr);

// создать функцию power которая принимает два аргумента (число и степень)
// и возвращает результат возведения числа в указанную степень
// power(5, 2) -> 25

// function power(a, b){
//    let result = a**b;
//    return result;
// }
// const a = power(5, 2);
// console.log(a);

// 2 variant
// function power(number, stepen){
//     return number ** stepen;
// };

// console.log(power(5, 2));

// создать функцию, которая получает в качестве аргументов два числа и возвращает наибольшее
// function sum(a, b){
//     if(a>b){
//         console.log(a);
//     }
//     else if(b>a){
//         console.log(b);
//     }
//     else{
//         console.log('RAVNI');
//     }
// }
// sum(1, 3);

// 2 variant
// function compare(val1, val2){
//     if(val1 > val2){
//         return val1;
//     }else{
//         return val2;
//     }
// }

// console.log(compare(12, 15));
// console.log(compare(12, 7));
// console.log(compare(12, 17));

// создать функцию check, которая получает в качестве аргумента число 
// и если оно четное, то возвращает true в ином случае false

// function check(val){
//     if(val%2===0){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(check(4));
// console.log(check(13));

//Без условного оператора
// function check(val){
//     return val%2===0;
// }
// console.log(check(4));
// console.log(check(13));

const products = [
    {id: 1, title: 'велосипед', price: 3500, discount: 5},
    {id: 2, title: 'ролики', price: 500, discount: 10},
    {id: 3, title: 'лыжи', price: 1500, discount: 0},
    {id: 4, title: 'сноуборд', price: 1700, discount: 7},
    {id: 5, title: 'коньки', price: 700, discount: 0},
    {id: 6, title: 'самокат', price: 450, discount: 15}
];
//написать цикл, который выводит наименования товаров
// for(let i=0; i<products.length; i++){
//     console.log(products[i].title);
// }

// написать цикл, который выводит наименования товаров и цену в следующем формате
// велосипед (3500)
// ролики (500)

// for(let i=0; i<products.length; i++){
//     // console.log(`${products[i].title} (${products[i].price})`);
//     // console.log(products[i].price);
//   const {title, price} = products[i];
//   console.log(`${title} (${price})`);
// }

// написать цикл, который выводит наименования товаров и цену с учетом скидки в следующем формате
// for(let i=0; i<products.length; i++){
//     const{title, price, discount} = products[i];
//     let newPrice = price - (price / 100 * discount);
//     console.log(`${title} (${newPrice.toFixed(1)})`)
// }


// написать цикл, который выводит наименования товаров и цену с учетом скидки в следующем формате
// выводить только те товары, у которых итоговая цена больше 1000
for(let i=0; i<products.length; i++){
    const{title, price, discount} = products[i];
    let newPrice = price - (price / 100 * discount);
        if(newPrice>1000){
    console.log(`${title} (${newPrice.toFixed(1)})`)
        }
}
