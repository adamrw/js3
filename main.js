//var word1 = prompt("Please enter any word. Any fucking word at all!");
//alert("You entered" + " " + '"' + word1 + '"'+ "." + " The word you entered is " +  word1.length + " letters long." + " The third letter in your word is " + '"' + word1.charAt(2) + '"' + "." + " This is your word in lowercase: " + '"' + word1.toLowerCase() + '"' + "." + " This is your word in uppercase: " + '"' + word1.toUpperCase() + '"' + "." + " This is your word in a sentence: " + " You love to eat " + '"' + word1 + '"' + "." + " These are second to fourth letters in your word: " + '"' + word1.substring(1, 4) + '"' + "." + " Take that beeyatch!");


var number1 = prompt("Please enter your phone number with dashes. We promise that we will DEFINITELY sell your personal information to third parties :P");
alert(number1.charAt(3) === '-' && number1.charAt(7) === '-');