const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Porque pones que no Bri, traicionera',
  'Mira el si, esta bonito como tú',
  'Analiza tu costo de oportunidad',
  'Te lo juro dale a siiiiiiiii',
  'No te arrepentiras mi niña linda'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
