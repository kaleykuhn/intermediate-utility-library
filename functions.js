// Your functions go here
var count = 0;
function countingCards(card) {
   // A1: card
   // R: Bet and Hold
   switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   if (count > 0) {
      return count + " Bet"; // <---- added space before Bet
   } else {
      return count + " Hold"; // <---- added space before Hold
   }
}

/*var count = 0;

function countingCards(card) {
switch (card) {
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
 }
 if (count > 0) {
    return count + " Bet";
 }  else {
   return count + " Hold";
  }
}

/*var count = 0;

function cc(card) {
  if (card >= 2 && card <= 6) {
    count++;
  } else if (card >= 7 && card <= 9) {
    count += 0;
  } else {
    count--;
  }

  if (count > 0) {
    return count + "  Bet";  
  } else {
    return count + "  Hold";  
  }
}*/
var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

/*function lookUpProfile(name, prop) {
   //A1: name
   //A2: property
   //R: Name of  property, or No such contact, or No such property
   for (var i = 0; i < contacts.length; i++) {
      var singleContactObj = contacts[i];
      var firstName = singleContactObj.firstName;
      if (firstName === name) {
         if (singleContactObj.hasOwnProperty(prop)) {
            return singleContactObj[prop];
         } else return "No such property.";
      }
   }

   return "No such contact.";
}*/
function lookUpProfile(name, prop) {
   for (var i = 0; i < contacts.length; i++) {
      var singleContactObj = contacts[i];
      var firstName = singleContactObj.firstName;
      if (firstName === name) {
         if (singleContactObj.hasOwnProperty(prop)) {
            console.log(firstName);
            return singleContactObj[prop];
         } else {
            return "No such property.";
         }
      }
   }
   return "No such contact.";
}

function generateRanNumRange(myMax, myMin) {
   //A1: max number
   //A2: min number
   //R: Random number in range

   return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
var spliceArray = [2, 3, 4, 5, 6, 7, 8];

function splice(pos1, pos2) {
   let array = spliceArray;
   console.log(spliceArray);
   let newArray = array.splice(pos1, pos2);
   console.log(newArray);
   return newArray;
}
var spliceAddArray = [
   "DarkGoldenRod",
   "WhiteSmoke",
   "LavenderBlush",
   "PaleTurquoise",
   "FireBrick",
];
function spliceAdd(ind, num, ele) {
   //A1:startindex
   //A2:num to delete
   //A3: element to switch out
   //R: spliced array
   let array = spliceAddArray;
   console.log(spliceAddArray);
   var newArray = array.splice(ind, num, ele);

   return array;
}

var indexArray = ["squash", "onions", "shallots"];
var element = "mushrooms";
function checkPresEleIndex(arr, elem) {
   console.log(indexArray);
   console.log(element);
}
