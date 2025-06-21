//Array

let marks = [97,64,67,78,93];
console.log(marks);

 console.log(marks.length);

 let heroes = ["spiderman", "superman", "batman"];
 console.log(heroes);

 //Array  for Loops

 let heroes = ["spiderman", "superman", "batman"];
 for(let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
 }


 //Array for of loop

 for(let hero of heroes) {
    console.log(hero); 
 }
 

 //Array.concat()

 let marvelHeroes = ["thor", "spiderman", "ironman"];
 let dcHeroes = ["superman", "batman"];

 let heroes = marvelHeroes.concat(dcHeroes);
 console.log(heroes);

 //Array.slice()

  let marvelHeroes = ["thor", "spiderman", "ironman", "superman", "batman"];

  console.log(marvelHeroes);

  console.log(marvelHeroes.slice(1,4));

  //Array.splice()

   let arr = [1, 2, 3, 4, 5, 6, 7];

   arr.splice(2, 2, 101, 102);  

   //Add element

   arr.splice(2, 2, 101, 102);

   //Delete element

   arr.splice(3, 1);

   //Replace element
   arr.splice(3, 1, 101);