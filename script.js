const text1 = 'powieksz mnie'
const text2 = 'ZAPISZ MNIE MALYMI LITERAMI'
const text3 = '$#%#^ wytnij te dziwne znaki na poczatku'
const text4 = 'sprawdz, czy zawieram slowo "czy"'
const text5 = 'wyLoguj w konsoli tylko literke "L", która znajude sie w wyrazie "Wyloguj"'
const text6 = 'pies zamien kazde slowo pies na slowo kot pies'
const text7 = 'podziel, ten, string, od, przecinkow'

console.log(text1.toUpperCase())
console.log(text2.toLowerCase())
console.log(text3.slice(6))
console.log(text4.includes('czy'))
console.log(text5.charAt(2))
console.log(text6.replaceAll('pies', 'kot'))
console.log(text7.split(','))

// operatory logiczne

// && - i
// || - lub
// ! - zaprzeczenie

if (true && false) {
	console.log(true)
} else {
	console.log(false)
}

// IF, ELSE, IF\ELSE

const pass = '!qwerty'

if (pass.length > 10 && pass.includes('!')) {
	console.log('masz dobre hasło')
} else if (pass.length < 10) {
	console.log('masz za krotkie haslo')
} else {
	console.log('za krotkie haslo')
}

// ZADANIE Z IF

let x = 50
let y = 60

if (x > y) {
	console.log(`${x} jest większe niż ${y}`)
}

// zadanie 2 z if

let color = 'blue'
let newColor = 'green'
if (color === newColor) {
	console.log('kolory sie zgadzaja')
} else {
	console.log('kolory sie nie zgadzaj')
}

// zadanie nr 3

let q = 100
let w = 50

if (q > w) {
	console.log('q > w')
} else if (q === w) {
	console.log('q = w')
} else if (q < w) {
	console.log('q < w')
}

// zadanie 4

let e = 10

let check = e % 2 === 0 ? 'e jest parzyste' : 'e jest nieparzyste'
console.log(check)
// if (e%2==0){
//     console.log('e jest parzyste');
// } else {
//     console.log('e jest nieparzyste');
// }

// zadanie 5

let a = 50

if (a >= 100) {
	console.log('a>100'.toUpperCase())
} else if (a < 100 && a>30) {
	console.log('a jest sredniakiem'.toUpperCase())
} else {
	console.log('a jest małe'.toUpperCase())
}

//  lepsze rozwiazanie :
// let a = 50
// let text

// if (a >= 100) {
// 	text ='a>100'
// } else if (a < 100 && a>30) {
// 	text ='a jest średniakiem'
// } else {
// 	text ='a jest małe'}
// console.log(text.toUpperCase());