//  Task 1
// let array = [1, 2, 3, 4, 5];

// function chekEven(array,callback){
//     for (let i=0; i<array.length; i++){
//         if(!callback(array[i])){
//             return 'Не все элементы удовлетворяют указанному условию'
//         };
//     };
//     return 'все элементы удовлетворяют указанному условию';
// };

// let result  = chekEven(array, (elem) => elem < 5);
// console.log(result);


// Task 2

// let array = [1, 2, 3, 4, 5];

// function chekSome(array, callback){
//     for (let i = 0; i <array.length; i++){
//         if (callback(array[i])){
//             return 'Минимум 1 элемент удовлетворяет указанному условию';
//         };
//     };
//     return 'Ни один элемент не удовлетворяют указанному условию';
// };
// let result = chekSome(array, (elem) => elem === 4);
// console.log(result);