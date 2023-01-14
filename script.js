const cards = document.querySelectorAll(".card");

function flipCard(e) {
    console.log(e.target);
}

cards.forEach(card => { // adding click event to all cards
    cards.addEventListener("click", flipCard);

});