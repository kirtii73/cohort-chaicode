// 9th feb
// prototype class

const teas ={
    name: "Lemon tea",
    type: "green",
    caffine : "low"
}

console.log(teas.name);
console.log(teas["type"]);

teas.origin = "China";

teas.caffine ="medium";

delete teas.type;

console.log("origin" in teas);

 for( key in teas){
    console.log(`${key} : ${teas[key]}`)

 }

 const myTeas = {
    greenTea :{},
    blackTea : {}
 }

 const teastring = JSON.stringify(teas);
 let teasCopy = JSON.parse(teastring);

  

 
