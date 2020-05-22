// Your functions go here
var count = 0;
function countingCards(card) {
   // <----- added curly brace
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
} // <----- added curly brace

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
