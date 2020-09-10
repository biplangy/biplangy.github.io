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
    const inquisitorDiv = document.createElement('div')
    inquisitorDiv.className = "charHolder"
    inquisitorDiv.innerHTML +=
      "<img class=\"inquisitor\" id=\"inquisitor\" src=\"images/inquisitor\.png\" alt=\"The Grand Inquisitor\" title=\"The Grand Inquisitor\"><div class=\"synopsis\">A 90-year-old leader of the Spanish Inquisition, the Grand Inquisitor meets and challenges Jesus Christ to reconsider the consequences of freeing men from the Old Testament law and superstition. Deeming the gospel ethic of love to be inadequate guidance for unruly men, the Grand Inquisitor proclaims that the Roman Catholic Church will recover the happiness of men through impositions of \"<i>miracle</i>, <i>mystery</i> and <i>authority</i>\". His condemnation of Christ is founded on the doctrine that free will, God's supposed gift to mankind, has brought about the sufferings of men.</div>"
    content.appendChild(inquisitorDiv)
    inquisitorCheck = 1
  }
})

katerina.addEventListener('click', function(event)
{
  if(katerinaCheck === 0) {
    const katerinaDiv = document.createElement('div')
    katerinaDiv.className = "charHolder"
    katerinaDiv.innerHTML +=
      "<img class=\"katerina\" id=\"katerina\" src=\"images/katerina\.png\" alt=\"Katerina Verkhovtseva\" title=\"Katerina Verkhovtseva\"><div class=\"synopsis\">As a spurned fiancée, the gorgeous Katerina (or Katya) seeks nonetheless to uphold her dignity, through a self-lacerating commitment to the wayward Dmitri. The proud expectation that her love will be requited eventually proves to be too much for her to handle, as Ivan renders her passions unchecked - but not in animal lust. Throughout the narrative, Katerina faces a journey of self-discovery.</div>"
    content.appendChild(katerinaDiv)
    katerinaCheck = 1
  }
})

pavel.addEventListener('click', function(event)
{
  if(pavelCheck === 0) {
    const pavelDiv = document.createElement('div')
    pavelDiv.className = "charHolder"
    pavelDiv.innerHTML +=
      "<img class=\"pavel\" id=\"pavel\" src=\"images/pavel\.png\" alt=\"Pavel Smerdyakov\" title=\"Pavel Smerdyakov\"><div class=\"synopsis\">With even his paternity shrouded in mystery, the enigmatic, 24-year-old Pavel (or Smerdyakov) proves to be more than the rustic lackey that almost everyone supposes him to be. He serves Fyodor - his alleged sire - in a disinterested manner, but truly engages with Ivan, whom he deems \"a clever man\" worthy of emulation. Being prone to epileptic fits, Pavel despises his own sense of vulnerability, while simultaneously wielding a morbid, self-effacing sense of humour.</div>"
    content.appendChild(pavelDiv)
    pavelCheck = 1
  }
})
