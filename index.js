// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentence_arr = sentence.split(' ');
var words;
var firstCharacter;
var result = "";

for(words of sentence_arr){
	firstCharacter = "";
	firstCharacter = words.charAt(0).toUpperCase();
	result += replaceFirstLetter(words, sentence_arr, firstCharacter);
}

console.log('\'' + result + '\'');

function replaceFirstLetter(words, sentence_arr, firstCharacter){
	if(words === sentence_arr[sentence_arr.length - 1] && words.length > 1){
		return firstCharacter + words.substring(1);
	}
	else if(words === sentence_arr[sentence_arr.length - 1] && words.length === 1){
		return firstCharacter;
	
	if(words.length > 1){
		return firstCharacter + words.substring(1) + " ";
	}
	else{
		return firstCharacter + " ";
	}
}


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
console.log(money.substring(0)
