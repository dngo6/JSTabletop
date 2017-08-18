/****************************
Version Summary

2017.10.08 -
	1. Initial Push
	2. Basic classes
		3. Card
		4. Deck
*****************************/
const NUM_SUITS = 4;
const DECK_SIZE = 52;

/**********************************
Card class - 
getValue -
getSuit - 
setSuit -
***********************************/
class Card {
	constructor(value, suit) {
		this._value = value;
		this._suit = suit;
	}
	
	getValue(){
		return this._value;
	}
	
	getSuit(){
		return this._suit;
	}
	
	setSuit(suit){
		this._suit = suit;
	}
}

/**************************
Deck class to contain Card objects
Functions:
populateDeck - Generates a normal deck of playing cards
shuffleDeck - Randomizes the order of the deck
drawCard - 
***************************/
class Deck {
	this._deck = new Card[DECK_SIZE];
	this._suits = ["Spade", "Clubs", "Diamond", "Heart"];
	this._faces = ["Ace", "Jack", "Queen", "King"];
	
	populateDeck() {
		//Generates a regular playing card deck
		card_counter = 0; //count the cards as deck is populated
		for (i = 0; i < 13; i++){
			for (j = 0; j < NUM_SUITS; j++) {
				switch(i){
					case 0: //ace
						deck[i*NUM_SUITS+j].setValue(this._faces[0]);
						break;
					case 10: //jack
						deck[i*NUM_SUITS+j].setValue(this._faces[1]);
						break;
					case 11: //queen
						deck[i*NUM_SUITS+j].setValue(this._faces[2]);
						break;
					case 12: //king
						deck[i*NUM_SUITS+j].setValue(this._faces[3]);
						break;
					default:
						deck[i*NUM_SUITS+j].setValue(i);
				}
				
				deck[i*NUM_SUITS+j].setSuit(this._suits[j]); //each card gets a suit
				
			}
		}
	}
	
	shuffleDeck() {
		
	}
	
	drawCard() {
		return this._deck.pop();
	}
	
	addCard (card) {
		this._deck.push(card);
	}
	
	dealCards() {
		
	}
}

/*********************************
Player class contains:
hand - Array of cards dealt from the deck
**********************************/
class Player {
	this._hand = new Array(); //unlimited amount
	this._playerID = 0;
	this._name = "";
	
	playCard(card) {
	
	}
	
}