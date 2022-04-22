const numbers = [0, 0, 1, 1, 2, 2, 2]
const colors = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers.slice(0, 2)
console.log(numbers2)

const numbers3 = numbers.slice(-3)
console.log(numbers3)

const randomStuff = colors.splice(-2)
console.log(colors)
console.log(randomStuff)

const newCars = cars.splice(2, 4, 'test')
console.log(cars)
console.log(newCars)

const letters = ['c', 'd']

letters.unshift('a', 'b')
console.log(letters)
letters.push('e', 'f')
console.log(letters)
console.log(letters.includes('c'))

const numbers4 = [0, 1, 2, 3, 4, 5]
const food = ['cupcakes', 'soup', 'omlet']

const array = numbers4.concat(food)
console.log(array)
const array2 = [...numbers4, ...food]

console.log(array)

const array3 = [1, 5, 13, 26, 48]

const map1 = array3.map(x => x * 5)

console.log(map1)

for (const x of map1) {
	if (x % 2 === 0) {
		console.log(`Liczba parzysta: ${x}`)
	} else {
		console.log(`Liczba nieparzysta: ${x}`)
	}
}

// for of lepszy, ale można jeszcze tak :

// for (let i = 0; i < map1.length; i++) {
// 	if (map1[i] % 2 === 0) {
// 		i++
// 		console.log(`Liczba parzysta: ${map1[i]}`)
// 	} else {
// 		console.log(`Liczba nieparzysta: ${map1[i]}`)
// 	}
// }

const color1 = ['green']
console.log(color1)
color1.unshift('red')
color1.push('blue')
console.log(color1)

// charAt i slice aby zmienić pierwszą literę kazdego elementu w tablicy na uppercase
for (let i = 0; i < color1.length; i++) {
	console.log(`Mój ulubiony kolor to: ${color1[i].charAt(0).toUpperCase() + colors[i].slice(1)}`)
}

// zmiana pierwszych liter elementow w tablicy na uppercase v2
const color2 = color1.map(word => word[0].toUpperCase() + word.substring(1))
console.log(color2)



const cars1 = 'Audi, Mercedes, BMW, Nissan, Dodge'
const cars2 = cars1.split (', ');

cars1.length > 3 ? console.log('Jest OK'): console.log('Nie jest Ok');


if (cars2.includes('Audi')) {
	cars2.push('Fiat'); 
} else {
	cars2.pop()
}
console.log(cars2);