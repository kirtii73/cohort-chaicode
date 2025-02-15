// Loops

let fruits = [ "apple", "banana", "orange", "mango", "litchi"]

for(let h=0 ; h < fruits.length; h++){
    console.log(` The fruit at ${h} is ${fruits[h]}`)

}


// sum of elements of array

let numbers = [ 1,2,3,4,5,6,7,8,9,10]

function sumArray(nos){
let sum = 0
for( let i=0; i< numbers.length ; i++){
    
    sum = numbers[i]+ sum
}
return sum
}
console.log(sumArray(numbers))

// Class Assignment

const teas = ["Green tea", "Black tea", "Oolong tea", "white tea", "Herbal tea"]
console.log(teas);

teas.push("Chamomile tea");
console.log(teas);

const index = teas.indexOf("Oolong tea");
if(index > -1){
    teas.splice(index , 1);
}
console.log(teas)

const caffinatedTeas = teas.filter((tea) => tea != "Herbal tea");
console.log(teas);

console.log(teas.sort());

for( let i =0; i< teas.length; i++){
    console.log(teas[i])
}
let caffTea = 0;
for(let i =0; i< teas.length ; i++){
   
     if (teas[i] !== "Herbal tea"){
        caffTea++
     }
}
console.log(caffTea);

const uppCaseteas =[]
for(let i=0; i< teas.length; i++){
    uppCaseteas.push(teas[i].toUpperCase())
}
console.log(uppCaseteas)

let longestTea = "";
for(let i=0; i< teas.length ; i++){
    if(teas[i].length > longestTea.length){
        longestTea= teas[i]
    }
}
console.log(longestTea);


const reversedArray = [];
for( let i = teas.length-1; i>=0; i--){
    reversedArray.push(teas[i])
}
console.log(reversedArray)





