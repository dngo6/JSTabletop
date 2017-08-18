/****************************
Version Summary

2017.10.08 -
	1. Initial Push
	2. Basic classes
		3. Card
		4. Deck
*****************************/

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
}

class Deck {
	this._deck = new Card[52];
	this._suits = ["Spade", "Clubs", "Diamond", "Heart"];
	this._face = ["Ace", "Jack", "Queen", "King"];
	populateDeck() {
		//Generates a regular playing card deck
		for (i = 0; i < 11; i++){
			for (j = 0; j < 4; j++) {
				
			}
		}
	}
}