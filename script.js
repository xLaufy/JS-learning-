// foreach, map and callback

const numbers = [0.5, 4, 'abc']
const names = ['Lisa', 'Lily', 'Adam', 'Przemek']

numbers.forEach(num => console.log(num * num))

const bigNames = names.map(name => name.toUpperCase())
console.log(bigNames)

// callback

const showBigNames = name => {
	console.log(name.toUpperCase())
}

names.forEach(showBigNames)

console.log('------------')

// callback skrócony zapis

names.forEach(el => console.log(el.toLocaleUpperCase()))

// Exercise .1

const add = (x, y) => {
	const score = x + y
	score % 2 === 0 ? fun1(score) : fun2(score)
}

const fun1 = num => {
	console.log(`liczba ${num} jest parzysta`)
}
const fun2 = num => {
	console.log(`liczba ${num} jest nieparzysta`)
}

add(1, 2)

// Exercise .2

let celsius
let temp

const fahrenheit = c => {
	let celsius = c
	temp = c * 1.8 + 32
	console.log(`${c}C = ${temp}F`)
}

fahrenheit(20)

// Exercise

const num = 10
const nums = []

for (let i = 0; i < num; i++) {
	console.log(i)
	nums.push(i)
}
console.log(nums)

const fun = number => {
	number % 3 === 0 && number !== 0 ? console.log(`${number} jest podzielne przez 3`) : console.log(`${number} nie jest podzielne przez 3`)
}
nums.forEach(fun)
