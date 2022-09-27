
// exercises : 


const img = document.querySelector('img')


img.setAttribute('src', 'https://www.telepolis.pl/images/2022/06/mars-czerwona-planeta-eksploracja-badanie.jpg')
img.setAttribute('alt', 'mars')


// ------------------------------------------

const test = () => {
    console.log('hey');
}
setTimeout(test, 2000)

// druga opcja 

setTimeout(() => {
	console.log('hey')
}, '2000')


// ---------------------------------------------------

const div = document.createElement('div')
document.body.appendChild(div)
div.setAttribute('class', 'wrapper')

const ul = document.createElement('ul')
div.appendChild(ul)



for ( i=1 ; i <= 5 ; i++){
    const li = document.createElement('li')
    li.textContent = i
    ul.appendChild(li)
    li.dataset.id = i
}


const dataTag = document.querySelector('[data-id="3"]')


console.log(dataTag.closest('.wrapper'));