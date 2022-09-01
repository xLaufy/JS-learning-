// Map vs forEach

const numbers = [0, 1, 2, 3]

const newNumbers = numbers.forEach(number => number * 2)
console.log(newNumbers)

const mapNumbers = numbers.map(number => number * 2)
console.log(mapNumbers)

// Exercices

const letters = ['c', 'd']
console.log(letters)
letters.unshift('a', 'b')
console.log(letters)
letters.push('e', 'f')
console.log(letters)

console.log(letters.includes('c'))

// Exercice .2

const arr = [1, 2, 3]
const food = ['burger', 'pizza', 'pasta']

const arr1 = [...arr, ...food]
console.log(arr1)

// Exercice .3

const arrays = [1, 5, 13, 26, 48]

const arrays1 = arrays.map(array => array * 5)
console.log(arrays1)

for (const array of arrays1) {
	if (array % 2 === 0) {
		console.log(`liczba: ${array} jest parzysta`)
	} else {
		console.log(`liczba: ${array} jest nieparzysta`)
	}
}

// for (let i = 0; i < arrays1.length; i++) {
//     if (arrays[i]%2===0) {
//     console.log(`liczba: ${arrays1[i]} jest parzysta` );
// } else {
//     console.log(`liczba: ${arrays1[i]} jest nieparzysta` );
// }
// }

// Exercice .4

const color = ['red']
color.unshift('blue')
color.push('green')
console.log(color)

for (const colors of color) {
	console.log(`mój ulubiony kolor to: ${colors.charAt(0).toUpperCase() + colors.slice(1)}`)
}

// Exercice .5

const cars = 'Audi,Mercedes,BMW,Nissan,Dodge'

const newCars = cars.split(',')
console.log(newCars)

newCars.length > 3 ? console.log('jest ok') : console.log('nie jest ok')

// if (newCars.length>3) {
//     console.log('jest ok');
// } else {
//     console.log('nie jest ok');
// }

if (newCars.includes('Audi')) {
	newCars.push('Honda')
} else {
	newCars.pop()
}
console.log(newCars)
