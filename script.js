const hello = (name = 'drogi użytkowniku') => {
	console.log(`Cześć ${name}, jak się masz.`)
}

hello()
hello('Klaudia')

function hello2(name = 'drogi użytkowniku') {
	console.log(`Cześć ${name}, jak się masz?`)
}
hello2()

const add = (x = 5, y = 10) => {
	console.log(x + y)
	//  wywołanie funkcji u dołu z wartością nadpisuje x = 5 na x = 10
}
add(10)

const arr = [1, 2, 3, 4]
console.log(arr)
console.log(...arr)

// REST

const numbers = (x, y, ...z) => {
	console.log(x, y, z)
}

numbers(13, 468, 468, 4, 98133, 2, 1, 13, 3, 1)



// ZAKRESY 

const name1 = 'Lisa'

const test = () => {
	console.log(`NAME w funkcji - ${name1}`);
	
}
test()

console.log(`NAME w funkcji - ${name1}`);