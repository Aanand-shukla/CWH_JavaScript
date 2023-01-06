// ! loops in Arrays. 

// let arr = [1,4,5,7,8];

// for(let i=0; i<=arr.length; i++){
//     console.log(i, arr[i]);
// }

// let arr1 = [1,4,15,7,18];
//  for(let arrays of arr1){
//     console.log(arrays);
    
//  }

// let arr2 = [1,4,5,7,8];
// for(let i in arr2 ){
//     console.log(i);
    
// }

// let arr3 = [1,4,5,7,8];
// arr3.forEach((x)=>{
//     console.log(x);
    
// })

// let obja ={
//     name:"Aanand",
//     class:"xyz",
//     ["Roll no"] : 123456,
// }

// let ar = Array.from(obja);

// console.log(ar);
//  let arr4 =[5,6,7,98,45,12];
//  arr4.forEach((x,y,z)=>{
//      console.log(x);
//   });

// let arr5 = [5,7,8,9,4];
//  let rA=arr5.map((x,y,z)=>{
//     return (x+y);
//  });
//  console.log(rA);
 
//  ! filter method !


// let arr6 = [12,34,56,78,190,34,,450];

// let filterValue = arr6.filter((x)=>{
//     return (x<100);
// });

// console.log(filterValue);


// ! Reduce Method  !


let arr10 = [23,45,67,34,23,12,34];

 let SortedArray=((a,b)=>{
    return a+b;
 });
 
let reducedArray=arr10.reduce(SortedArray);

console.log(reducedArray);

// ! Sort method !

// let arr8 = [111,23,45,67,87,34,9,7, 10,45];

// let sortedArray = arr8.sort((a,b)=>{
//     return(a-b);
// })

// console.log(sortedArray);
