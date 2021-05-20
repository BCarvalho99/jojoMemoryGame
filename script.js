const cards = document.querySelectorAll('.memory-card')

let hasFlippedCard = false
let firstCard, secondCard
let lockB = false

function flipCard(){
    if (lockB) return; 
    if (this === firstCard) return

    this.classList.add('flip')

    if (hasFlippedCard === false) {
    hasFlippedCard = true
    firstCard = this

    return;
  }
    secondCard = this
    matchCheck()
}

function matchCheck(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework

    isMatch ? disableCard() : unflipCard()
    
}

function disableCard(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)

    resetBoard()
}

function unflipCard(){
    lockB = true;

    setTimeout(() => { 
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
    resetBoard()
    }, 800)
}

(function shuffle() {
  cards.forEach(card => {
    let random = Math.floor(Math.random() * 12)
    card.style.order = random
  });
})();

function resetBoard(){
    [hasFlippedCard, lockB] = [false, false];
    [firstCard, secondCard] = [null, null];
}


cards.forEach(card => card.addEventListener('click', flipCard));