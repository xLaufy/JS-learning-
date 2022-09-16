// Exercise .1

const ul = document.createElement('ul')
document.body.appendChild(ul)

for (let i = 1; (i <= 10); i++) {
    const li = document.createElement('li')
     li.textContent = i
     ul.appendChild(li)
    
}

const lastLi = ul.querySelector('li:last-child')

lastLi.textContent = ('Jestem ostatnim elementem')
lastLi.style.backgroundColor = 'royalblue', 
lastLi.style.padding = '20px 40px', 
lastLi.style.fontSize = '48px';



// exercise 2 

const p1  = document.querySelector('.p1')
const p2  = document.querySelector('.p2')
const btn1 =document.querySelector('.btn1')
const btn2 =document.querySelector('.btn2')
const square = document.querySelector('.square')

const text = () => {
    console.log('Cześć');
}



const red = () => {
    square.style.background ='red'
}
const blue = () => {
    square.style.background ='blue'
}
const toggle = () => {
    p1.classList.toggle('show')
    p2.classList.toggle('show')
}


btn1.addEventListener('dblclick', text  )
square.addEventListener('mouseover', red  )
square.addEventListener('mouseout', blue  )
btn2.addEventListener('click', toggle  )
