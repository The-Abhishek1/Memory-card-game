const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disbleDeck = false;


function flipCard(e) {
    let clickedCard = e.target; //getting user clicked card
    if (clickedCard !== cardOne && !disbleDeck) {
        clickedCard.classList.add("flip");
        if (!cardOne) {
            //return the cardOne value to clickedCard
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disbleDeck = true;
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
        return disbleDeck = false;
    }
    // if two card not matched
    setTimeout(() => {
        // adding shake glass to both card after 400ms
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        // removing both shake & flip classes from the both card after 1200ms
        cardOne.classList.remove("shake");
        cardTwo.classList.remove("shake");
        cardOne = cardTwo = ""; // setting both card value to blank
        disbleDeck = false;
    }, 1200);

}

cards.forEach(card => { // adding click event to all cards
    cards.addEventListener("click", flipCard);
});