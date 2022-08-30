// ARRAYS

const numbers = [1, 2, 3, 4, 5]
console.log(numbers)

numbers.unshift(-1, 0)

console.log(numbers)

numbers.shift()
console.log(numbers)

// unshift - dodaje elementy na początku tablicy
// shift - usuwa element z indeksem 0

const colors = ['red', 'blue', 'green']
console.log(colors)
colors.push('gold', 123)
console.log(colors)

colors.pop()
console.log(colors)

// push-dodaje elementy na końcu tablicy
// pop - usuwa ostatni element z tablicy

// Metody

const nums = [1, 2, 3, 4, 5]

function multiply(x) {
	return x * 2
}

multiply(2)

const newNums = nums.map(multiply)
console.log(nums)
console.log(newNums)
console.log('============================');
// EXERCICES

const numbers1 = [0, 0, 1, 1, 2, 2, 2]
const colors1 = ['red', 'green', 'blue', true, 123]
const cars = [123, true, 'audi', 'bmw', 'mercedes', 'ferrari', '🤷‍♂️', '👀']

const numbers2 = numbers1.slice(0,2)
console.log(numbers2)

const numbers3 = numbers1.slice(-3)
console.log(numbers3)

const randomStuff = colors1.splice(-2)

console.log(randomStuff)

const newCars = cars.splice(2, 4, 'test')
console.log(cars)
console.log(newCars)
