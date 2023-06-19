// Redoing old labs for extra practice. Old code, or code that I'm simplified, is commented out. 

//function writeCards(name, event) {
//   const messages = [];
//   for (let i = 0; i < name.length; i++) {
//     const message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
//     messages.push(message);
//   }
//   return messages;
// }

// This is express much more concisely with arrow function: 
const writeCards = (names, event) => names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);

// const countDown = numnber => 

// function countDown(number) {
//    for (let i = number; i >= 0; i--) {
//      console.log(i);
//    };
//  };

// More concisely: 
const countDown = number => {
  for (; number >= 0; number--) console.log(number);
};




// function writeCards(names, event) {
//     const messages = [];
//     for (let i = 0; i < names.length; i++) {
//       const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
//       messages.push(message);
//     }
//     return messages;
//   }
//   function countDown(number) {
//     for (let i = number; i >= 0; i--) {
//       console.log(i);
//     }
//   }