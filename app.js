// Je selectionne mon tile container et je lui donne comme variable tileDisplay
const tileDisplay = document.querySelector('.tile-container')
//console.log(tileDisplay)
// Je selectionne mon key container et je lui donne comme variable keyboard
const keyboard = document.querySelector('.key-container')
//console.log(keyboard)

// 3 j'ajoute un mot à Wordle à deviner
const wordle = 'SUPER'

const keys = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "ENTER",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "«",
];

// 2 JE CREE UN ARRAY POUR INSERER MES KEYS
const guessRows = [
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
]

// 3.2 je met à deffault la position de la row et de la tile
let currentRow = 0
let currentTile = 0

//2.1 je fais une itération sur la premiere array
guessRows.forEach((guessRow, guessRowIndex) => {
  //2.2 je cree la balise div et la met dans une variable guessRows
  const rowElement = document.createElement('div')
  console.log(rowElement)
  //2.3 j'attribue l'id à guessRow et l'index
  rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
  //console.log(rowElement)
  //2.4 je fais une itération sur la deuxieme array
  guessRow.forEach((guess, guessIndex) => {
    //2.5 je cree un tag div et le met en variable tileElement
    const tileElement = document.createElement('div')
    //console.log(tileElement)
    //2.6 j'attribue l'id, l'index de guessrow et l'index de guess
    tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
    //console.log(tileElement)
    tileElement.classList.add('tile')
    //2.7 j ajoute tileElement à rowElement
    rowElement.append(tileElement)
    // console.log(rowElement)
  })
  // 2.3.1 j ajoute les rowElement à tileDisplay
  tileDisplay.append(rowElement)
})
//console.log(guessRows)

// 1 LE BUT EST DE CREER UN CLAVIER POUR L UTILISATEUR

// 1-1 Je fais une itération sur l'array keys pour selectionner chaque key
keys.forEach(key => {
  // 1-2 Je create un tag button en js et le met dans la variable buttonElement
  const buttonElement = document.createElement('button')
  // console.log(buttonElement)
  // 1-3 On affecte une key à chaque bouton
  buttonElement.textContent = key
  // console.log(buttonElement)
  // 1-4 On attribut un id pour chaque bouton en l'appelant par le nom de la key
  buttonElement.setAttribute('id', key)
  // console.log(buttonElement)
  // 1-5 Je met une balise d'écoute pour mettre en route les clicks
  buttonElement.addEventListener('click', () => handleClick(key))
  // console.log(buttonElement)
  // 1-6 J'affiche le clavier
  keyboard.append(buttonElement)
})

// 1-7 Methode pour afficher les clicks sur la console
// 3.1 j'associe les letters à handleClick
const handleClick = (letter) => {
  console.log('clicked', letter)
  addLetter(letter)
}

// 3.2 je creer la methode addLetter pour ajouter une lettre à la tuile par default
const addLetter = (letter) => {
  const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
  tile.textContent = letter
  //3.2.1 Je change de tuile à chaque clique sur une lettre
  guessRows[currentRow][currentTile] = letter
  // 3.3 j'attribue à la tile un attribut pour pouvoir changer de couleur dans le futur
  tile.setAttribute('data', letter)
  currentTile++
  console.log('guessRows',guessRows)
}
