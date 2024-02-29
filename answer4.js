class Card{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
  }
}

class Deck{
  constructor(){
    this.cards = [];
    this.initializeDeck();
  }

  initializeDeck(){
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

    for(let suit of suits){
      for(let value of values){
        this.cards.push(new Card(suit, value));
      }
    }
  }

  shuffle(){}

  drawCard(){}

  cardsLeft(){ return this.cards.length; }
}

class Hand{
  constructor(){
    this.cards = [];
  }

  addCard(card){ this.cards.push(card); }

  // calculates the score of the hand of cards
  calculateScore(){}
}


// Unit testing

//Initialize the deck of cards
const deck = new Deck();
deck.shuffle();

// Draw a card from the deck and add it to the hand
const hand = new Hand();
const drawnCard = deck.drawCard();
hand.addCard(drawnCard);

// Get the number of cards left in the deck
console.log(deck.cardsLeft());