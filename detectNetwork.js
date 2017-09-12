// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var networkName = "Not a Legitimate Card Number";
  var strChar = cardNumber.split("");
  if (strChar[0] === '3' && (strChar[1] === '8' || strChar[1] === '9')){
  	if (strChar.length === 14){
      networkName = "Diner's Club";
  	}
  }
  else if (strChar[0] === '3' && (strChar[1] === '4' || strChar[1] === '7')){
  	if (strChar.length === 15){
  		networkName = "American Express";
  	}
  }
  else if (strChar[0] === '4'){
  	if (strChar.length === 13 || strChar.length === 16 || strChar.length === 19){
  		networkName = "Visa";
  	}
  }
  else if (strChar[0] === '5' && (strChar[1] === '1' || strChar[1] === '2' || strChar[1] === '3' || strChar[1] === '4' || strChar[1] === '5')){
  	if (strChar.length === 16){
  		networkName = "MasterCard";
  	}
  }
  else if (cardNumber.substr(0,4) === '6011' || (Number(cardNumber.substr(0,3)) >= 644 && Number(cardNumber.substr(0,3) <= 649)) || cardNumber.substr(0,2) === '65'){
  	if (strChar.length === 16 || strChar.length === 19){
  		networkName = "Discover";
  	}
  }
  else if (cardNumber.substr(0,4) === '5018' || cardNumber.substr(0,4) === '5020'  || cardNumber.substr(0,4) === '5038' || cardNumber.substr(0,4) === '6304'){
  	if (strChar.length <= 19 || strChar.length >= 12){
  		networkName = "Maestro";
  	}
  }
  else if ((Number(cardNumber.substr(0,6)) >= 622126 && Number(cardNumber.substr(0,6)) <= 622925)  || (Number(cardNumber.substr(0,3)) >= 624 && Number(cardNumber.substr(0,3)) <= 626) || (Number(cardNumber.substr(0,4)) >= 6282 && Number(cardNumber.substr(0,4)) <= 6288)){
  	if (strChar.length <= 19 || strChar.length >= 16){
  		networkName = "China UnionPay";
  	}
  }
  //Visa and Switch have some overlap in card numbers.  Choose network with longer prefix. In this situation, 
  //Switch will always override the Visa number.
  //By excluding Switch from the else statement, it will override the Visa numbers.
  var switchPrefixes = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  for ( var index = 0; index < switchPrefixes.length; index++){
    if (switchPrefixes[index] === cardNumber.substr(0, switchPrefixes[index].length)) {
    	if (strChar.length === 19 || strChar.length === 16 || strChar.length === 18) {
    		networkName = 'Switch';
    	}
    }
  }

  return networkName;
};


