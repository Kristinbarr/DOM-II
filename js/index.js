
// MOUSEOVER - change image to a gif
const headerContainer = document.querySelector('.intro')
const headerImg = document.querySelector('header img')

headerImg.addEventListener('mouseover', () => {
  headerImg.src = 'img/vanagon.gif'
  headerContainer.style.textAlign = 'center'
  // headerImg.style.objectFit = contain
  // headerImg.style.width = '400px'
  // headerImg.style.height = '240px'
})

headerImg.addEventListener('mouseout', () => {
  headerImg.src = 'img/fun-bus.jpg'
  // headerImg.style['object-fit'] = fill
  // headerImg.style.height = '240px'
})


// WHEEL
const zoom1 = (event) => {
  event.preventDefault()
  scale += event.deltaY * -0.01 // Restrict scale
  scale = Math.min(Math.max(1, scale), 2) // Apply scale transform
  letsGoImg.style.transform = `scale(${scale})`
}
const zoom2 = (event) => {
  event.preventDefault()
  scale += event.deltaY * -0.01 // Restrict scale
  scale = Math.min(Math.max(1, scale), 2) // Apply scale transform
  adventureImg.style.transform = `scale(${scale})`
}

let scale = 1
const letsGoImg = document.querySelector('.img-content')
const adventureImg = document.querySelector('.inverse-content .img-content')
letsGoImg.onwheel = zoom1
adventureImg.onwheel = zoom2


// SCROLL
const homeContainer = document.querySelector('body')
const van = document.createElement('img')
van.src = "img/van.png"
van.style.zIndex = '-1'
van.style.height = "200px"
van.style.position = 'fixed'
van.style.top = '750px'

// van.style.transform = 'rotate(270deg)'
homeContainer.prepend(van)

let last_known_scroll_position = 0
let ticking = false

function doSomething(scroll_pos) {
  van.style.right = `${scroll_pos}px`
  van.style.transform = `rotate(${scroll_pos}deg)`
  console.log(van)
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position)
      ticking = false
    })
    ticking = true
  }
})



// FOCUS




// BUTTON - alerts with choice selection
const choice = document.querySelectorAll('.content-pick h4')[0]
const choice1 = document.querySelectorAll('.content-pick h4')[1]
const choice2 = document.querySelectorAll('.content-pick h4')[2]
const button = document.querySelectorAll('.content-pick .btn')[0]
const button1 = document.querySelectorAll('.content-pick .btn')[1]
const button2 = document.querySelectorAll('.content-pick .btn')[2]

button.addEventListener('mousedown', () => {
  alert(`You chose ${choice.textContent}, great choice!`)
})
button1.addEventListener('mousedown', () => {
  alert(`You chose ${choice1.textContent}, great choice!`)
})
button2.addEventListener('mousedown', () => {
  alert(`You chose ${choice2.textContent}, great choice!`)
})

