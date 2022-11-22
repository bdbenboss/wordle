// Je selectionne mon tile container et je lui donne comme variable tileDisplay
const tileDisplay = document.querySelector('.tile-container');
//console.log(tileDisplay)
// Je selectionne mon key container et je lui donne comme variable keyboard
const keyboard = document.querySelector('.key-container');
//console.log(keyboard)


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
// 7- Methode pour afficher les clicks sur la console
const handleClick = () => {
  console.log('clicked')
};

// Le but est de créer un clavier pour l'utilisateur
// 1- Je fais une itération sur l'array keys pour selectionner chaque key
keys.forEach(key => {
  // 2- Je create un tag button en js et le met dans la variable buttonElement
  const buttonElement = document.createElement('button');
  // console.log(buttonElement)
  // 3- On affecte une key à chaque bouton
  buttonElement.textContent = key;
  // console.log(buttonElement)
  // 4- On attribut un id pour chaque bouton en l'appelant par le nom de la key
  buttonElement.setAttribute('id', key);
  // console.log(buttonElement)
  // 5- Je met une balise d'écoute pour mettre en route les clicks
  buttonElement.addEventListener('click', handleClick);
  // console.log(buttonElement)
  // 6- J'affiche le clavier
  keyboard.append(buttonElement);
});
