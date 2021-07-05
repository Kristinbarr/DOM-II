
let boxes = document.getElementsByClassName('blocks')[0]

addEventListener('click', event => {
  boxes.prepend(event.target)
})



addEventListener('mousedown', event => {
  event.stopPropagation()
  let curBox = event.target
  moveRight(curBox)
})

function moveRight(box) {
  let pos = 0;
  let int = setInterval(() => {
    pos++
    box.style.left = `${pos}px`
  }, 5)

  addEventListener("mouseup", event => {
    clearInterval(int)
  })
}

