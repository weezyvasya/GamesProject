const randomColorBtn = document.querySelector('.randomColor')

function renderColor(){
  return Math.floor(0 + Math.random() * (255 + 1 - 0));
}

function changeColor (e) {
    e.target.parentElement.style.backgroundColor = `rgb(${renderColor()}, ${renderColor()}, ${renderColor()})`
}

randomColorBtn.addEventListener('click', changeColor)
