// Object destructuring

/* const person = {
  name: "Aram",
  age: 26,
  location: {
    city: "Yerevan",
    temp: 41
  }
};

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} in ${city}`);
}
 */
/* 
const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin"
  }
};

const { name: publisherName = "Self-Published" } = book.publisher;
console.log(publisherName);
 */

// Array destructuring

const address = ["15/1 - 3 Y.Tadevosyan", "Yerevan", "Armenia", "0055"];

const [, city, country = "New York"] = address;

console.log(`You are in ${city}, ${country}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , mediumCost] = item;

console.log(`A medium ${coffee} costs ${mediumCost}`);
