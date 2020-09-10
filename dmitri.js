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
    const agrafenaDiv = document.createElement('div')
    agrafenaDiv.className = "charHolder"
    agrafenaDiv.innerHTML +=
      "<img class=\"agrafena\" id=\"agrafena\" src=\"images/agrafena\.png\" alt=\"Agrafena Svetlova\" title=\"Agrafena Svetlova\"><div class=\"synopsis\">Beautiful, fierce and spiteful, 22-year-old Agrafena (or Grushenka) holds sway over many of the men that she encounters. Charismatic in appearance and feline in her movements, the lady nonetheless nurses an awkward grudge, having once been jilted by a Polish lover. In response to this, Agrafena prizes her independence and sense of control over others.</div>"
    content.appendChild(agrafenaDiv)
    agrafenaCheck = 1
  }
})

fyodor.addEventListener('click', function(event)
{
  if(fyodorCheck === 0) {
    const fyodorDiv = document.createElement('div')
    fyodorDiv.className = "charHolder"
    fyodorDiv.innerHTML +=
      "<img class=\"fyodor\" id=\"fyodor\" src=\"images/fyodor\.png\" alt=\"Fyodor Karamazov\" title=\"Fyodor Karamazov\"><div class=\"synopsis\">Fyodor is the patriarch of the Karamazov family. A self-acknowledged buffoon and rival to his eldest son's interest in Agrafena, Fyodor maintains a shrewdness with respect to his purse, believing that it is his best means of attracting the woman that he craves. Having married twice before, Fyodor is nonetheless notorious for his lechery and past neglect of his sons.</div>"
    content.appendChild(fyodorDiv)
    fyodorCheck = 1
  }
})

grigory.addEventListener('click', function(event)
{
  if(grigoryCheck === 0) {
    const grigoryDiv = document.createElement('div')
    grigoryDiv.className = "charHolder"
    grigoryDiv.innerHTML +=
    "<img class=\"grigory\" id=\"grigory\" src=\"images/grigory\.png\" alt=\"Grigory Vassilyevtich\" title=\"Grigory Vassilyevtich\"><div class=\"synopsis\">Wed to Fyodor by a parochial sense of duty, the aged servant Grigory gets caught in the feud between Dmitri and his father - nearly losing his life in the process. A man of few words and many habits, he shows a marked (if understated) preference for the traditions of his culture and society. New ideas, introduced by Ivan and presented to him by Pavel, heckle him as blasphemies, rather than as innovations of thought.</div>"
    content.appendChild(grigoryDiv)
    grigoryCheck = 1
  }
})
