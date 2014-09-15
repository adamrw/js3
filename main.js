//for + tab=
//for (var i = Things.length - 1; i >= 0; i--) {
//	Things[i]
//};


//var word1 = prompt("Please enter any word. Any fucking word at all!");
//alert("You entered" + " " + '"' + word1 + '"'+ "." + " The word you entered is " +  word1.length + " letters long." + " The third letter in your word is " + '"' + word1.charAt(2) + '"' + "." + " This is your word in lowercase: " + '"' + word1.toLowerCase() + '"' + "." + " This is your word in uppercase: " + '"' + word1.toUpperCase() + '"' + "." + " This is your word in a sentence: " + " You love to eat " + '"' + word1 + '"' + "." + " These are second to fourth letters in your word: " + '"' + word1.substring(1, 4) + '"' + "." + " Take that beeyatch!");


var number1 = prompt("Please enter your phone number with dashes. We promise that we will DEFINITELY sell your personal information to third parties :P");
alert(number1.charAt(3) === '-' && number1.charAt(7) === '-');
var bday = prompt("Please enter your birthday in format mm/dd/yy:");
alert(bday.charAt(2) === "/" && bday.charAt(5) === "/");
var zip = prompt("Please enter your zip code:");
alert(zip.length === 5 || zip.charAt(5) === "-");
var state = prompt("Please enter your state two letter abbreviation in UPPERCASE:");
alert(state.length === 2 && state === state.toUpperCase());
var married = prompt("Are you married? Please enter yes or no:");
alert(married === "yes" || "Yes" || "YES" || "no" || "NO" || "No");
