/**var speech = 'I am a good person. i dont snore at night';
console.log(speech.length);
*/

/**var speech = 'I am a good person. I dont snore at night';
console.log(speech[2]);
*/

var speech = 'I am a good person. I dont snore at night';

var count = 0;
for ( var i = 0; i < speech.length; i++){
	var char = speech[i];
	// console.log(char);
	if(char == " " && speech[i-1] !=' '){
		count++;
	}
}

count++;
console.log(count);