// unshift, shift, push, pop

const numbers = [1, 2, 3, 4, 5]

console.log(numbers)

numbers.unshift(-1, 0)

console.log(numbers)

numbers.shift()
console.log(numbers)

const colors = ['red', 'green', 'blue']
console.log(colors)

colors.push('gold')
console.log(colors)

colors.pop()
console.log(colors)

const things = [1, 'rod', 'wow', 4]
console.log(things)

things.unshift('lol', 'yo')
console.log(things)

things.shift()
console.log(things)

things.push('lol')
console.log(things)

things.pop()
console.log(things)

console.log('--------------------------------------------')

// map, contact, spread, rest operator

const arr = [1, 2, 3, 4, 5]

function multiply(x) {
	return x * 2
}

// MAP

const newNumbers = numbers.map(multiply)
console.log(numbers);
console.log(newNumbers);

console.log('--------------------------------------------')
;
// CONCAT 

const abc = ['a', 'b', 'c']

const newAbc = numbers.concat(6,7,8, true, abc)
console.log(newAbc);

// SPREAD (...)

const drinks = ['kawa', 'pepsi', 'sok']

const meals = ['schabowy', 'spaghetti', 'zupa']

const menu = [...drinks, ...meals]
console.log(menu);

