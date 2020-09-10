const body = document.getElementsByTagName('body')[0]
const content = document.getElementById('content')
const icon = document.getElementById('icon')
const title = document.getElementById('title')

icon.addEventListener('click', function(event)
{
  title.style.transform = "rotate(0deg)"
  content.style.animation = "fadeOut ease 2s"
  content.style.animationFillMode = "forwards"
  setTimeout(delayRemoval, 2000)
  setTimeout(introBrothers, 2000)
})

function delayRemoval()
{
  content.style.display = "none"
}

function introBrothers()
{
  const names = document.getElementById('names')
  names.style.display = "inline"
  names.style.animation = "fadeIn ease 2s"
  names.style.animationFillMode = "forwards"

  const brothers = document.getElementById('brothers')
  brothers.style.display = "flex"
  brothers.style.animation = "fadeIn ease 2s"
  brothers.style.animationFillMode = "forwards"
}
