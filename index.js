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
  body.innerHTML +=
  "<div class=\"names\" id=\"names\"><a href=\"dmitri\.html\">Dmitri</a> &middot; <a href=\"ivan\.html\">Ivan</a> &middot; <a href=\"alexei\.html\">Alexei</a></div>"

  const names = document.getElementById('names')
  names.style.animation = "fadeIn ease 2s"
  names.style.animationFillMode = "forwards"

  body.innerHTML +=
  "<div class=\"brothers\" id=\"brothers\"><a href=\"dmitri\.html\"><img class=\"dmitri2\" src=\"images/dmitri\.png\" alt=\"Dmitri Karamazov\"></a><a href=\"ivan\.html\"><img class=\"ivan\" src=\"images/ivan\.png\" alt=\"Ivan Karamazov\"></a><a href=\"alexei\.html\"><img class=\"alexei\" src=\"images/alexei\.png\" alt=\"Alexei Karamazov\"></a></div>"

  const brothers = document.getElementById('brothers')
  brothers.style.animation = "fadeIn ease 2s"
  brothers.style.animationFillMode = "forwards"
}
