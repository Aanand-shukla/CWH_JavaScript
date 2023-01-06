// let arr = [2, 3, 4, 6, 78];
// let str = arr.toString();
// console.log(str);
// console.log(typeof str);
// let j = arr.join("");
// console.log(j);
// console.log(typeof j);
// let popItem = arr.pop();
// console.log(arr);
// console.log(popItem);

// // ! pop method update same array.

// let pushingItems = arr.push("j");
// console.log(pushingItems);
// console.log(arr);

// //   !  push method returns length of the Array.

// let shiftedItems = arr.shift();
// console.log(shiftedItems);
// console.log(arr);

// // ! shift return the value  which has been removed from the array's first elemet.
// let unShiftedItems = arr.unshift("Joker");
// console.log(unShiftedItems);
// console.log(arr);

// let arr2 = ["Mohan", "Raju", 0.45, 89, 123];
// console.log(arr2.length);
// let deletedArr = delete arr2[3];
// console.log(deletedArr);
// console.log(arr2);
// console.log(deletedArr.length);
// console.log(arr2.length);

// let arr3 = [4, 5, 7];

// let revisedArray = arr.concat(arr2, arr3);
// console.log(revisedArray);

// //  ! SORT Function.
// let compare = (a, b) => {
//   return a - b;
// };

// let arr4 = [34, 123, 45, 67, 111, 567, 90, 709];

// console.log(arr4.sort(compare));

// // !  Splice Method

// let arr5 = [12, 45, 87, 90, 23, 12, 56];

// let splicedArray = arr5.splice(2, 4, 67);
// console.log(splicedArray);
// console.log(arr5);

// ! slice Method

let arr6 = [12, 45, 87, 90, 23, 12, 56];

let slicedArray= arr6.slice(2,8,3);
console.log(slicedArray);

