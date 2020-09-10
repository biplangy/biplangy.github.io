const content = document.getElementById('content')
const ilyusha = document.getElementById('ilyushaTag')
const lise = document.getElementById('liseTag')
const zossima = document.getElementById('zossimaTag')

let ilyushaCheck = 0
let liseCheck = 0
let zossimaCheck = 0

ilyusha.addEventListener('click', function(event)
{
  if(ilyushaCheck === 0) {
    const ilyushaDiv = document.getElementById('ilyushaDiv')
    ilyushaDiv.style.display = "flex"
    ilyushaDiv.style.animation = "fadeIn ease 2s"
    ilyushaDiv.style.animationFillMode = "forwards"
    ilyushaCheck = 1
  }
})

lise.addEventListener('click', function(event)
{
  if(liseCheck === 0) {
    const liseDiv = document.getElementById('liseDiv')
    liseDiv.style.display = "flex"
    liseDiv.style.animation = "fadeIn ease 2s"
    liseDiv.style.animationFillMode = "forwards"
    liseCheck = 1
  }
})

zossima.addEventListener('click', function(event)
{
  if(zossimaCheck === 0) {
    const zossimaDiv = document.getElementById('zossimaDiv')
    zossimaDiv.style.display = "flex"
    zossimaDiv.style.animation = "fadeIn ease 2s"
    zossimaDiv.style.animationFillMode = "forwards"
    zossimaCheck = 1
  }
})
