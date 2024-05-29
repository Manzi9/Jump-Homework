var myName = "manzi";
var mySurname = "bitega";
var myAge = 12;
var isAdult = true;
var favColour = "grey";
var sum = 5 + 6;

console.log("hello");
console.log(myName);

console.log(myName.concat(mySurname));

if (myAge >= 18 && favColour == "red") {
  console.log("You're allowed to enter");
} else if ((myName = "Manzi")) {
  console.log("You're allowed to enter");
} else {
  console.log("You're not allowed in");
}

for (let i = 0; i < 10; i++) {
  console.log("this is a loop", i);
}

switch (myAge >= 18 && favColour == "red") {
  case true:
    console.log("You're allowed to enter");
    break;

  case false:
    console.log("You're not allowed to enter");
    break;
}
