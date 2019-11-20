//
// OBJECT DESTRUCTURING
//

// const person = {
// 	name: 'Bernardo',
// 	age: 31,
// 	location: {
// 		city: 'Toronto',
// 		temp: 8
// 	}
// };

// const { name, age } = person;

// console.log(`${name} is ${age}`);

//
// ARRAY DESTRUCTURING
//

const address = ['250 Humber Blvd', 'Toronto', 'Ontario', 'M5N'];

const [street, city, province, zip] = address;

console.log(`You are in ${city}, ${province}`);
