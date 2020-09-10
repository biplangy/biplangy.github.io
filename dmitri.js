const content = document.getElementById('content')
const agrafena = document.getElementById('agrafenaTag')
const fyodor = document.getElementById('fyodorTag')
const grigory = document.getElementById('grigoryTag')

let agrafenaCheck = 0
let fyodorCheck = 0
let grigoryCheck = 0

agrafena.addEventListener('click', function(event)
{
  if(agrafenaCheck === 0) {
    const agrafenaDiv = document.getElementById('agrafenaDiv')
    agrafenaDiv.style.display = "flex"
    agrafenaDiv.style.animation = "fadeIn ease 2s"
    agrafenaDiv.style.animationFillMode = "forwards"
    agrafenaCheck = 1
  }
})

fyodor.addEventListener('click', function(event)
{
  if(fyodorCheck === 0) {
    const fyodorDiv = document.getElementById('fyodorDiv')
    fyodorDiv.style.display = "flex"
    fyodorDiv.style.animation = "fadeIn ease 2s"
    fyodorDiv.style.animationFillMode = "forwards"
    fyodorCheck = 1
  }
})

grigory.addEventListener('click', function(event)
{
  if(grigoryCheck === 0) {
    const grigoryDiv = document.getElementById('grigoryDiv')
    grigoryDiv.style.display = "flex"
    grigoryDiv.style.animation = "fadeIn ease 2s"
    grigoryDiv.style.animationFillMode = "forwards"
    grigoryCheck = 1
  }
})
