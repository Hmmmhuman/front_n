// Array Exercise

// 1.
//let people = ["Greg", "Mary", "Devon", "James"];
//for (let i = 0; i < people.length; i++) {
//  console.log(people[i]);
//}

// 2.
let people = ["Greg", "Mary", "Devon", "James"];
people.forEach((person) => {
  console.log(person);
});

// 3.
people.shift();
console.log(people);

// 4.
people.pop();
console.log(people);

// 5.
people.unshift("Matt");
console.log(people);

// 6.
people.push("Rodrigo");
console.log(people);

// 7.
//for (let i = 0; i < people.length; i++) {
//  console.log(people[i]);
//  if (people[i] == "Mary") {
//    break;
//  }
//}

// 8.
copy = people.slice(2);
console.log(copy);

// 9.
people.splice(2, 1, "Ellizabeth", "Artie");
console.log(people);

//10.
let withbob = people.concat("Bob");
console.log(withbob);

//Object Exercise

// 1.
let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1.
programming.languages.push("Go");
console.log(programming.languages);

// 2.
programming["difficulty"] = 7;
console.log(programming.difficulty);

// 3.
delete programming.jokes;
console.log(programming);

// 4.
programming.isfun = true;

// 5.
let updatedLanguages = programming.languages.map(
  (language, index) => "0{javaScript} - 1{python}"
);

console.log(updatedLanguages);
