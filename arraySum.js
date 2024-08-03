/**var numbers = [34, 24, 56, 67, 65, 87, 87, 98, 56];
var sum = 0;

for( var i = 0; i < numbers.length; i++){
	var element = numbers[i];
	sum = sum + element;
}
console.log('total of the numbers: ', sum);
*/

function getArraySum(numbers){
	var sum = 0;
	for(var i = 0; i < numbers.length; i++){
		var element = numbers[i];
		sum = sum + element;

	}
	return sum;
}

var numbers = [80, 40, 56, 64, 76, 86, 97, 84, 90];
var result = getArraySum(numbers);
console.log('total of the numbers: ', result);

var total = getArraySum([34, 65, 75, 86, 98]);
console.log('total of the numbers; ', total);