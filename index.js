
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for(let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     }
//     return gifts;
// }
// wrapGifts(gifts);

// const cardRecipient = ["Luke", "Jonas", "Peter"];
// const eventName =;

const names = ["Luke", "Jonas", "Peter"];
const eventName = "birthday";


function writeCards(names, eventName) {
    const message = [];
    for (let i = 0; i < names.length; i++) {
        message[i] = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    }
    return message;
}

let int = 10;
function countDown(int) {
    while (int>= 0) {
        console.log(int--);
    }
    }; 