var marks = [34, 36, 78, 89, 67, 57, 64, 86];
var max = marks[0];

for( var i = 0; i < marks.length; i++){
	var element = marks[i];
	if(element > max){
		max = element;
	}
}

console.log('Highest value is: ', max);