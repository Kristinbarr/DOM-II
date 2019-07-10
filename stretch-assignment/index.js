// let boxes = document.querySelectorAll('.block')
// let newOrder = document.querySelectorAll('.blocks')

// boxes = Array.from(boxes)

// addEventListener('mousedown', event => {
//   let chosenBox = event.target

//   let remaining = boxes.filter(box => {
//     return box !== chosenBox
//   })

//   boxes = [chosenBox, ...remaining]
//   newOrder.innerHTML = boxes
//   console.log(newOrder)
// })


// let boxes = document.querySelectorAll('.block')
// console.log(boxes)

let boxes2 = document.getElementsByClassName('blocks')[0]
// console.log(boxes2)

// let first = document.getElementsByClassName('block')[0];
// console.log(first)
// let newEl = document.createElement('p')
// boxes2.appendChild(newEl)

// let classs = document.querySelector('.blocks')
// console.log(classs.classList)

addEventListener('mousedown', event => {
  // let chosenColor = event.target.classList[1]
  // console.log(chosenColor)
  // console.log('chosenColor:', event.target)
  boxes2.prepend(event.target)
  // console.log(boxes2)
  // change(chosenColor)
})

// function change(color) {

//   boxes.forEach((box, i) => {
//     // save current box color
//     let curColor = box.classList[1]
//     console.log('clickedCOLOR:', color)
//     console.log('curColor:', curColor)
//     // if it exists, save next color
//     if (i < boxes.length) {
//       console.log(i, box, boxes.length)
//       let nextColor = boxes[i+1].classList[1]
//       console.log('nextColor:', nextColor)
//     }

//     // set color to chosen color or next color
//     if (curColor === color) {
//     console.log('here', curColor, color)
//     return
//     } else if (i === 0) {
//       // console.log('box0BEFORE:', box.classList)
//       box.classList.remove(curColor)
//       box.classList.add(color)
//       console.log('box0:',box.classList)
//     } else if (i < boxes.length && curColor !== color) {
//       box.classList.remove(curColor)
//       box.classList.add(nextColor)
//       console.log('SHIFTBOX:', box.classList)
//     }
//   })
// }
