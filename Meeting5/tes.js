//let people = ["Greg", "Mary", "Devon", "James"];
//for (let i = 0; i < people.length; i++) {
//  console.log(people[i]);
//  if (people[i] == "Mary") {
//    break;
//  }
//}

let people2 = ["Matt", "Mary", "Devon", "Rodrigo"];
const removed = people2.slice(2);
console.log(removed);

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
let updatedLanguages = programming.languages.map(
  (language, index) => "0{javaScript} - 1{python}"
);

console.log(updatedLanguages);
