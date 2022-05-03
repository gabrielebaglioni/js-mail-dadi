// definisco minimo e massimo
//estraggo due numeri tyra il minimo e il massimo 
// li comparo
// il più grande vince


const min = Number("1");
const max = Number("6");
const randomUtente = Math.floor(Math.random() * (max - min + 1)) + min;
const randomComp = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomUtente);
// console.log(randomComp);
if ( randomUtente > randomComp){
   console.log("l'utente ha vinto")
}
else if ( randomUtente < randomComp){
   console.log("il computer ha vinto")
}
else{
   console.log("pareggio = ritirare una seconda volta il dado")
}
