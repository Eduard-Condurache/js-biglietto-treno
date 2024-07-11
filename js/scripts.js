// const kmNumber = prompt('Quale è il numero di chilometri che vuoi percorrere?');
// console.log(kmNumber);

// const age = prompt('Quanti anni hai?');
// console.log(age);

// let ticketPrice = 0.21 * kmNumber;

// if (age <= 17) {
//     ticketPrice = ticketPrice * 0.80;
// }
// else if (age >= 65) {
//     ticketPrice = ticketPrice * 0.60;
// }

// console.log('Il prezzo che devi pagare per il biglietto è: ' + ticketPrice + ' euro');

// document.getElementById('ticketprice-container').innerHTML = ticketPrice + 'euro'



document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const kmNumber = document.getElementById('kmNumber').value;
    const age = document.getElementById('age').value;

    let ticketPrice = 0.21 * kmNumber;

    if (age <= 17) {
        ticketPrice = ticketPrice * 0.80;
    } else if (age >= 65) {
        ticketPrice = ticketPrice * 0.60; 
    }

    document.getElementById('ticketprice-container').innerText = ticketPrice.toFixed(2) + ' euro';
});