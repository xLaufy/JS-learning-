// FUNCTIONS

// deklaracja funkcji

function test() {
	console.log('czesc')
}
test()

// wyrazenie funkcyjne

const helloWorld = function () {
	console.log('czesc123')
}
helloWorld()

// funkcja z argumentami

function add(x, y) {
	console.log(x + y)
}
add(1, 2)

function names(name, age) {
	console.log(`Cześć, mam na imię ${name} i mam ${age} lat`)
}
names('Miłosz', 30)

// Funkcja strzałkowa

const jadajada = (q, w) => {
	console.log(q + w)
}
jadajada(2, 22)

const qwerty = numerical => {
	console.log('yolo ' + numerical)
}
qwerty(420)


// Domyslny parametr funkcji 

const hello = (name = 'drogi uzytkowniku') => {
	console.log(`czesc ${name}, jak sie masz?`)
}
hello()
hello('Jarek')


// Operator REST

const numbers = (x,y, ...z) => {
    console.log(x,y,z);
}
numbers(13,234,674,3234,34664,42,4)

