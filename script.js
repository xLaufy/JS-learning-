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
