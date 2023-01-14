const cards = document.querySelectorAll(".card");

let cardOne, cardTwo


function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    clickedCard.classList.add("flip");
    if (clickedCard !== cardOne) {
        if (!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        console.log(cardOne, cardTwo);
    }
}

cards.forEach(card => { // adding click event to all cards
    cards.addEventListener("click", flipCard);

});