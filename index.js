// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
  } */
  
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts); */

let listMessages = []
// let newMessage =""
function writeCards(stringNames, eventName) {
    for (let i = 0; i < stringNames.length; i++) {
        // newMessage = `Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`
        // listMessages.push(newMessage);
        listMessages.push(`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`)
        // debugger;
      } 
      return listMessages
}

function countDown(inputInt) {
    let numCount = parseInt(inputInt);
    while (numCount >= 0) {
        console.log(numCount);
        numCount -= 1;
    }
}

  