const content = document.getElementById('content')
const inquisitor = document.getElementById('inquisitorTag')
const katerina = document.getElementById('katerinaTag')
const pavel = document.getElementById('pavelTag')

let inquisitorCheck = 0
let katerinaCheck = 0
let pavelCheck = 0

inquisitor.addEventListener('click', function(event)
{
  if(inquisitorCheck === 0) {
    const inquisitorDiv = document.getElementById('inquisitorDiv')
    inquisitorDiv.style.display = "flex"
    inquisitorDiv.style.animation = "fadeIn ease 2s"
    inquisitorDiv.style.animationFillMode = "forwards"
    inquisitorCheck = 1
  }
})

katerina.addEventListener('click', function(event)
{
  if(katerinaCheck === 0) {
    const katerinaDiv = document.getElementById('katerinaDiv')
    katerinaDiv.style.display = "flex"
    katerinaDiv.style.animation = "fadeIn ease 2s"
    katerinaDiv.style.animationFillMode = "forwards"
    katerinaCheck = 1
  }
})

pavel.addEventListener('click', function(event)
{
  if(pavelCheck === 0) {
    const pavelDiv = document.getElementById('pavelDiv')
    pavelDiv.style.display = "flex"
    pavelDiv.style.animation = "fadeIn ease 2s"
    pavelDiv.style.animationFillMode = "forwards"
    pavelCheck = 1
  }
})
