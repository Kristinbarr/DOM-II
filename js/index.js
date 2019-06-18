
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

// const zoom = (event) => {
//   event.preventDefault()
//   scale += event.deltaY * -0.01 // Restrict scale
//   scale = Math.min(Math.max(0.125, scale), 4) // Apply scale transform
//   el.style.transform = `scale(${scale})`
// }

// let scale = 1
// const el = document.querySelector('div')
// el.onwheel = zoom


// SCROLL


// FOCUS

