// PETLA FOR

const colors = ['blue', 'red', 'green', 'orange']

for (let i = 0; i < colors.length; i++) {
	console.log(colors[i])
}

console.log('===============')
// PETLA WHILE

let i = 0
while (i < 5) {
	console.log(i)
	i++
}

console.log('===============')
// DO WHILE

let a = 0
do {
	a++
	console.log(a)
} while (a < 2)

console.log('===============')

// PETLA FOR OF
const numbers = [1, 2, 3, 4, 5]

// for (let i = 0; i < numbers.length; i++) {
// 	console.log(numbers[i] * 2)
// }

for (const number of numbers) {
	console.log(number * 2)
}

console.log('===============')

// ZADANIE z petli for

const cities = ['wawa', 'wroclaw', 'paris', 'barcelona']

for (let q = 0; q < cities.length; q++) {
	console.log(`to miasto nazywa sie ${cities[q]}`)
}
console.log('===============')

// zadanie petla while

let x = 0

while (x < 10) {
	x += 2
	console.log(x)
}

console.log('===============')
// ZADANIE do... while

let z = 20

do {
	z -= 3
} while (z > 0)
console.log(z)

// ZADANIE Z FOR OF

const arrays = [5, 8, 10, 23, 48, 60]

for (const array of arrays) {
	console.log(array / 5)
}

for (const array of arrays) {
	if (array % 2 === 0) {
		console.log(`%c liczba ${array} jest parzysta`, 'background-color:yellow')
	} else {
		console.log(`%c liczba ${array} jest nieparzysta`, 'background-color:tomato')
	}
}
