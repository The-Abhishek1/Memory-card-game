const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disbleDeck = false;


function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if (clickedCard !== cardOne) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;

        let cardOneImg = cardOne.querySelector("img").src,
            cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(immg1, img2) {
    if (img1 === img2) { // if two cards img matched
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = ""; // setting both card value to blank
        return;
    }
    // if two card not matched
    setTimeout(() => {
        // adding shake glass to both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

}

cards.forEach(card => { // adding click event to all cards
    cards.addEventListener("click", flipCard);
});