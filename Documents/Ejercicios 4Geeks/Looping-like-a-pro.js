
let people = [
    {name: "Tom", lastname: "Bradley", birthDate: new Date("2001-04-17")},
    {name: "Dylan", lastname: "Thompson", birthDate: new Date ('1982-06-17')},
    {name: "Shyla", lastname: "Carval", birthDate: new Date ('1921-12-17')},
    {name: "Bob", lastname: "Hardley", birthDate: new Date ('1995-12-20')},
    {name: "Maria", lastname: "Manrique", birthDate: new Date ('1985-11-17')},
];
// console.log("The original people: ", people);

// //While loop
// let i = 0;
// while (i < people.length) {
//   console.log("Using while", people[i]);
//   i++;
// }

// //For loop
// for (let a = 0; a < people.length; a++) {
//   console.log("Using for", people[a]);
// }

//ForEach loop
people.forEach((person, index) => {
    console.log("Using forEach", person);
    person.id = index;
    var ageDifMs = Date.now() - person.birthDate.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    person.age = Math.abs(ageDate.getUTCFullYear()- 1970);
});

//Map array
// let newArray = people.map((person, index) => {  
//     return person.name + ' ' + person.lastname;
// });
// console.log("The new array: ",newArray);
// console.log("The old array: ",people);

//Filtered array
let filteredArray = people.filter((person) => {
    return (person.age > 20);
}).map((person, index) => {     // we can combine these
    return '<li>' + person.name + ' ' + person.lastname+ '<li>';
});
console.log("Filtered people", filteredArray);


//Find
let tom = people.find((person) => {
    return (person.name == 'Tom');
});
console.log(tom);