
// MOUSEOVER - change image to a gif
const headerContainer = document.querySelector('.intro')
const headerH2 = headerContainer.querySelector('h2')
const headerP = headerContainer.querySelector('p')
const headerImg = document.querySelector('header img')

headerImg.addEventListener('mouseover', () => {
  headerImg.src = '/img/vanagon.gif'
  headerContainer.style.textAlign = 'center'
  headerH2.style.textAlign = 'left'
  headerP.style.textAlign = 'left'
  headerImg.style.objectFit = 'cover'
  headerImg.style.overflow = 'hidden'
  headerImg.style.height = '240px'
  headerImg.style.width = '55%'
})

headerImg.addEventListener('mouseout', () => {
  headerImg.src = '/img/fun-bus.jpg'
  headerImg.style.width = '100%'
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


// SCROLL - moving bus animation
const homeContainer = document.querySelector('body')
const contentPickCont = document.querySelector('.content-pick')
const van = document.createElement('img')
const divForVan = document.createElement('div')
divForVan.className = 'bottom-div'
van.src = "img/van.png"
van.style.zIndex = '2'
van.style.height = "200px"
van.style.position = 'fixed'
van.style.top = '-200px'
van.style.right = '0px'
homeContainer.prepend(van)
divForVan.style.height = '450px'
contentPickCont.appendChild(divForVan)

let last_known_scroll_position = 0
let ticking = false

function doSomething(scroll_pos) {
  van.style.top = `${scroll_pos-200}px`
  van.style.transform = `rotate(-${scroll_pos/2.8}deg)`
  // console.log(scroll_pos)
  // next -> add space with a div
  // when it gets to the bottom of the page
  // make van translate right to left @ 1010px
  // next -> make third image zoom in 20% to 100%

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



// DROP
// couldn't get it to work :(

const demo = document.createElement('p')
demo.textContent = 'testingggg'
demo.style.textSize = '50px'

const dropCont = document.querySelector('.content-destination')
const dropImg = document.querySelector('.content-destination img')
const dropDiv = document.querySelector('.bottom-div')
dropCont.ondrop = `drop(event)`
dropCont.ondragover = `allowDrop(event)`
dropImg.ondragstart = `dragStart(event)`
dropImg.draggable = 'true'
dropImg.id = 'dragtarget'
dropImg.style.position = 'relative'
dropDiv.id = 'div1'
dropDiv.ondrop = `drop(event)`
dropDiv.ondragover = `allowDrop(event)`
dropDiv.prepend(demo)

function dragStart(event) {
  event.dataTransfer.setData('text', event.target.id)
  console.log(dropImg)
  document.getElementById('demo').innerHTML = 'Started to drag the p element'
}

function allowDrop(event) {
  event.preventDefault()
}

function drop(event) {
  event.preventDefault()
  var data = event.dataTransfer.getData('text')
  event.target.appendChild(document.getElementById(data))
  document.getElementById('demo').innerHTML = 'The p element was dropped'
}

// external library works for dragging
const dragIndicator = document.createElement('p')
dragIndicator.textContent = 'I\'m draggable!'
dropCont.appendChild(dragIndicator)
Drag.init(document.getElementById('dragtarget'))



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

