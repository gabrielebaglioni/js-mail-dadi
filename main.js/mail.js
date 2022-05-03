// Definisco una lista di email tramte un array
// chiedo all'utente di identificarsi
// costruisco un ciclo di controllo 
//  Se l'email esiste l'utente è benvenuto 
// Se non è registrato gli chiedo di fare in Sing Up
 
const controllo = document.querySelector(".container");
const mail = ["frank@gmail.com", "gb@gmail.com", "bf@gmail.com , sapienza@gmail.com"];
let mailutente = prompt ("La tua email");

if (mail.includes(mailutente)){
   let element = document.createElement("div");
   element.classList.add("sing-in");
   console.log("bentornato");
}