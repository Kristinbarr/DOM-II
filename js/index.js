// Nav link refresh overritten
document.querySelectorAll('.nav').forEach(link => {
  link.addEventListener('click', (e) => e.preventDefault())
})

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

// EVENT PROPOGATION
const textCont = document.querySelector('.text-content')
const textH2 = document.querySelector('.text-content h2')
textCont.addEventListener('click', (e) => {
  textCont.style.filter = 'blur(10px)'
})
textH2.addEventListener('click', (e) => {
  textH2.style.filter = 'drop-shadow(10px 5px 4px #444444)'
  textH2.style.color = 'darkblue'
  e.stopPropagation()
})
textCont.addEventListener('mouseout', (e) => {
  textCont.style.filter = ''
})
textH2.addEventListener('mouseout', (e) => {
  textH2.style.filter = ''
  textH2.style.color = ''
})

// WHEEL
const zoom2 = (event) => {
  event.preventDefault()
  scale += event.deltaY * -0.01 // Restrict scale
  scale = Math.min(Math.max(1, scale), 1.5) // Apply scale transform
  adventureImg.style.transform = `scale(${scale})`
}
let scale = 1
const adventureImg = document.querySelector('.inverse-content .img-content')
adventureImg.onwheel = zoom2

// MOUSEDOWN
const letsGoImg = document.querySelector('.img-content')
// console.log(letsGoImg)
letsGoImg.addEventListener('mousedown', (event) => {
  event.preventDefault()
  letsGoImg.style.filter = 'blur(10px)'
})
letsGoImg.addEventListener('mouseup', (event) => {
  event.preventDefault()
  letsGoImg.style.filter = ''
})

// FOCUSIN and FOCUSOUT- nav items rotate when tabbing through
const navLinks = document.querySelector('.nav')

navLinks.addEventListener('focusin', (event) => {
  event.target.style.transform = 'rotate(20deg)'
  event.target.style.fontWeight = 'bold'
  event.target.style.fontSize = '2rem'
})

navLinks.addEventListener('focusout', (event) => {
  event.target.style.transform = ''
  event.target.style.fontSize = ''
  event.target.style.fontWeight = ''
})


// COPY
const source = document.activeElement
const copied = document.createElement('p')
copied.textContent = 'Copied!'
copied.style.position = 'absolute'
copied.style.zIndex = '5'
copied.style.color = 'white'
copied.style.background = '#ee8877'
copied.style.padding = '10px'
copied.style.fontSize = '15px'
copied.style.opacity = '0'
copied.style.transition = 'opacity 1000ms'
source.prepend(copied)

source.addEventListener('copy', (event) => {
  event.preventDefault()
  // const selection = document.getSelection()
  // console.log('selection', selection)
  // var selRange = selection.getRangeAt(0)
  // console.log(selRange)
  // console.log('event', event)
  copied.style.opacity = '1'
  copied.style.transition = 'opacity 1000ms'
  copied.style.top = event.target.offsetTop + 'px'
  copied.style.left = event.target.offsetLeft + 'px'

  // console.log(
  //   event.target.offsetHeight,
  //   event.target.offsetWidth,
  //   event.target.offsetTop,
  //   event.target.offsetLeft)
})

// let screenLog = document.querySelector('body')
// document.addEventListener('click', logKey)

// function logKey(e) {
//   // screenLog.innerText =
//   console.log(` Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`)
// }

// SCROLL - moving bus animation
const homeContainer = document.querySelector('body')
const contentPickCont = document.querySelector('.content-pick')
const van = document.createElement('img')
const divForVan = document.createElement('div')
divForVan.className = 'bottom-div'
van.src = "img/van.png"
van.style.zIndex = '9'
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
  van.style.top = `${scroll_pos-300}px`
  van.style.transform = `rotate(-${scroll_pos/3}deg)`

  // next TODO -> add space with a div
  // when it gets to the bottom of the page
  // make van translate right to left @ 1010px
  // next TODO-> make third image zoom in 20% to 100%
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

// DROP - couldn't get it to work :(
  const dropCont = document.querySelector('.content-destination')
  const dropImg = document.querySelector('.content-destination img')
  const dropDiv = document.querySelector('.bottom-div')
  dropCont.ondrop = `drop(event)`
  dropCont.ondragover = `allowDrop(event)`
  dropImg.ondragstart = `dragStart(event)`
  dropImg.draggable = 'true'
  dropImg.id = 'dragtarget'
  dropImg.style.position = 'relative'
  dropDiv.id = 'demo'
  dropDiv.ondrop = `drop(event)`
  dropDiv.ondragover = `allowDrop(event)`
  // const demo = document.createElement('p')
  // demo.textContent = 'testingggg'
  // dropDiv.prepend(demo)

  function dragStart(event) {
    event.dataTransfer.setData('text', event.target.id)
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
  dropCont.style.position = 'relative'
  dragIndicator.textContent = 'I\'M DRAGGABLE'
  dragIndicator.style.position = 'absolute'
  dragIndicator.style.top = '120px'
  dragIndicator.style.left = '180px'
  dragIndicator.style.fontSize = '2rem'
  dragIndicator.style.opacity = '.5'
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

  // MOUSEOVER for *random* price
  const destinations = document.querySelectorAll('.destination')
  destinations.forEach(dest => {
    let destP = document.createElement('p')
    destP.textContent = `$`+ Math.floor(Math.random() * (1000 - 10) + 10)
    destP.style.position = 'absolute'
    destP.style.align = 'center'
    destP.style.backgroundColor = 'lightblue'
    destP.style.padding = '5px 50px'
    destP.style.margin = '20px 40px'
    destP.style.visibility = 'hidden'
    dest.appendChild(destP)
    dest.addEventListener('mouseover', () => {
      destP.style.visibility = 'visible'
    })
    dest.addEventListener('mouseout', () => {
      destP.style.visibility = 'hidden'
    })
  })
