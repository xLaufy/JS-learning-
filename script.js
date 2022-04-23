
// // FUNKCJE 


// // deklaracja funkcji

// function test() {
// 	console.log('czesc');
// }
// test()

// // wyrazenie funkcyjne

// const helloWorld = function(){
// 	console.log('czesc! 123')
// }

// helloWorld()


// // funkcja z argumentami

// function add(x, y) {
// 	return x + y
// }
// add (5, 3)

// //  zadanie 

// function ex(name, age ) {
// 	console.log(`Cześć, mam na imię ${name} i mam ${age} lat `);
// }
// ex ('Jakub', 49)


// // Funkcje anonimowe 

// const heading = document.querySelector('h1')

//  function test() {
// 	console.log('kliknięto mnie')}


// heading.addEventListener('click', test)


// Funkcje strzałkowe 

const arrowFunction = () => {
	// tak wygląda funkcja strzałkowa
}

function test(name) {
	console.log(`Mam na imię ${name}`)
}

test('Klaudia')

const test2 = name => {
	console.log(`Mam na imię ${name}`);
}

test2('Lisa')


const test3 = name => console.log(`Mam na imię ${name}`);
test3('qwerty')

const test4 = (name, age) => console.log(name, age);
test4('name', 123)

function add(num1, num2)
{
	return num1 * num2
}

const add2 = (num1, num2) => {
	console.log('cześć');
	return num1 * num2
}


const days = ['monday', 'tuesday', 'wednesday']
const days2 = days.forEach(function(day) {
	console.log(day);
});

console.log('-----------');

// łatwiejszy przykład z powyżej 
const days3 = days.forEach(day => console.log(day))