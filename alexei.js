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
    const ilyushaDiv = document.createElement('div')
    ilyushaDiv.className = "charHolder"
    ilyushaDiv.innerHTML +=
      "<img class=\"ilyusha\" id=\"ilyusha\" src=\"images/ilyusha\.png\" alt=\"Ilyusha Snegiryov\" title=\"Ilyusha Snegiryov\"><div class=\"synopsis\">Nine-year-old Ilyusha grows feverish over a dishonour brought upon his father by Dmitri; so he vows to challenge the captain to a duel, when he grows up. Originally antagonistic towards all of the Karamazov brothers, Ilyusha eventually acquiesces to the loving presence of Alexei, who seeks the welfare of Ilyusha's impoverished family. The little boy's loss of innocence and suffering is a critical aspect of the story, humanising some of Ivan's questions on theodicy.</div>"
    content.appendChild(ilyushaDiv)
    ilyushaCheck = 1
  }
})

lise.addEventListener('click', function(event)
{
  if(liseCheck === 0) {
    const liseDiv = document.createElement('div')
    liseDiv.className = "charHolder"
    liseDiv.innerHTML +=
      "<img class=\"lise\" id=\"lise\" src=\"images/lise\.png\" alt=\"Lise Hohlakov\" title=\"Lise Hohlakov\"><div class=\"synopsis\">Having grown up with Alexei as a playmate and tutor in Moscow, the bed-ridden Lise nurses a deep affection for the monk-to-be and frequently demands for his atttention. Being both expressive and yet self-effacing, Lise is often caught between her desires and a sense of inarticulate guilt or shame. As events take a dark turn around her, however, Lise channels her sense of being a burden into a harmful combination of self-flagellation and supposed contempt for others.</div>"
    content.appendChild(liseDiv)
    liseCheck = 1
  }
})

zossima.addEventListener('click', function(event)
{
  if(zossimaCheck === 0) {
    const zossimaDiv = document.createElement('div')
    zossimaDiv.className = "charHolder"
    zossimaDiv.innerHTML +=
      "<img class=\"zossima\" id=\"zossima\" src=\"images/zossima\.png\" alt=\"Father Zossima\" title=\"Father Zossima\"><div class=\"synopsis\">The 65-year-old elder Zossima is drawn to Alexei, by some spiritual resemblance to a brother that the aged man loved and lost. Now approaching death himself, the venerated Father recalls his past life in the military and then monastery with great affection. While his path in life moved from outward agitation towards contemplation, he envisions a converse journey - \"a long pilgrimage\", with great sorrow, labour and love - for the introverted Alexei.</div>"
    content.appendChild(zossimaDiv)
    zossimaCheck = 1
  }
})
