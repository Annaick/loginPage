import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'



let block
try {
    for (let i = 0; i < innerHeight; i+=40) {
        for (let j = 0; j < innerWidth; j += 40) {
            block = document.createElement ('div')
            block.classList.add ('block')
            document.getElementById('animation').append(block)
        }
    }
} catch (error) {
    throw (error)
}

//add animation for the little blocks


//animation for !touch screen
block = document.getElementsByClassName('block')

for (let i = 0; i < block.length; i++) {
    block[i].addEventListener('mouseover', function (){
        this.style.backgroundColor = "rgb(90, 177, 228)"
        this.classList.remove('colorTransition')
    })
    block[i].addEventListener('mouseout', function (){
        this.style.backgroundColor = "transparent"
        this.classList.add('colorTransition')
    })
}


//animation for touch screen
document.addEventListener('touchmove', function(touches){
    touches.preventDefault
    const touch = touches.touches[0]
    const element = document.elementFromPoint(touch.clientX, touch.clientY)
    for (let i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = "transparent"
        block[i].classList.add('colorTransition')
    }
    if (element.classList.contains("block")){
        element.style.backgroundColor = "rgb(90, 177, 228)"
        element.classList.remove('colorTransition')
    }
})

document.addEventListener('touchend', function (){
    for (let i = 0; i < block.length; i++) {
        block[i].style.backgroundColor = "transparent"
        block[i].classList.add('colorTransition')
    }
})




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
