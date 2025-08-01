let player = {
    name: 'king',
    chips: 145
}
let sum = 0
let cards = []
let isAlive = false
hasBlackjack = false
message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ': $' + player.chips



function getRandomcard() {
    
    let randomNumber = Math.floor(Math.random()*13) + 1
    
    if (randomNumber === 1) {
        return 11

    }else if(randomNumber > 11){
        return 10
    }
    else {
        return randomNumber
    }
}


function startGame() {
    let firstCard = getRandomcard()
    let secondCard = getRandomcard()
    cards.push(firstCard)
    cards.push(secondCard)
    sum = firstCard + secondCard 
   
   
    


    isAlive = true
    renderGame()    

}

function renderGame() {

    

    

        if (sum <= 20 ) {
        message = 'do you want a new card' 
        
    }
    else if (sum === 21) {
    message =  "you've got BLACKJACK!!!"
    hasBlackjack = true
    
    } 

    else {
    message = "you're out of the game"
        isAlive = false
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum

    cardsEl.textContent = "cards: " 
     for (i = 0; i < cards.length;  i++) {
        cardsEl.textContent += cards[i] + " "
     }

    
    

    
}

function newcard()  { 
    if (isAlive && hasBlackjack === false) {
        let thirdCard = getRandomcard()
        sum += thirdCard
    
        cardsEl.textContent = cards.push(thirdCard) + ' '
    

        renderGame()

    } 
       
}


