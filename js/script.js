const myName= prompt('Qual è il tuo nome?')
const mySurname= prompt('Qual è il tuo cognome?')
const myFavoriteColor= prompt('Qual è il tuo colore preferito?')
const myNumber=21;

const myAnswers= myName + mySurname + myFavoriteColor + myNumber

document.getElementById ('answers').innerHTML= myAnswers;