// ! Strings Method in  jS

let name="Aanand Shukla";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.slice(4,9));
console.log(name.replace("A", ''));
// ! let person= "mohan"
 let result =name.concat(" is a friend of " ,name , " that's good" );
 console.log(result); 
 console.log("Anand\n".length);
 
 let sentence = "The quick brown fox jump over the lazy dog.";
 let word= "fox2";
 console.log(`the word ${word} ${sentence.includes(word)? "is ":"is not " }present in the sentence`);
 