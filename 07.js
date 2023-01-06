let marks ={
    person1:30,
    person2:45,
    person3:67,
    person5:100,
}

// for(let mark in marks){
//     console.log(marks[mark]);
    
// }

for(let i=0; i<Object.keys(marks).length; i++){
 console.log("The marks of "+ Object.keys(marks)[i]+ " is:"+ marks[Object.keys(marks)[i]]);
 
}
