const color = 'blue'
const newColor = 'green'

if (color == newColor) {
	console.log('Kolory się zgadzają')
} else {
	console.log('Kolory się nie zgadzają')
}






const x = 100
const y = 50

if (x > y) {
	console.log('x>y')
} else if (x === y) {
	console.log('x=y')
} else {
	console.log('x<y')
}






const promo = '20%'

switch (promo) {
	case '10%':
		console.log(`Dziś mamy 10% zniżki`)
		break
	case '20%':
		console.log(`Dziś mamy 20% zniżki`)
		break
	case '30%':
		console.log(`Dziś mamy 30% zniżki`)
		break
	default:
		console.log(`Dziś mamy niestandardową opcję`)
}






const z = 10

const check = ( z % 2 == 0) ? 'x jest parzyste' : 'x nie jest parzyste'

console.log(check);




const q = 10

if (q >= 100) {
	text = 'q >= 100';
} else if (q < 100 && x > 30) {
	text = 'q jest średniakiem';
}  else {
	text = 'q jest mały';
}
console.log(text.toUpperCase());