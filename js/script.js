const myName= prompt('Qual è il tuo nome?')
const mySurname= prompt('Qual è il tuo cognome?')
const myFavoriteColor= prompt('Qual è il tuo colore preferito?')

const myAnswers= myName +' '+ mySurname +' '+ myFavoriteColor

document.getElementById ('answers').innerHTML= myAnswers;