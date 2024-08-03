// var business = 450;
// var minister = 350;

// if( business > minister){
// 	console.log('Business is bigger');
// }
// else{
// 	console.log('Minister is bigger');
// }

// or 

/**var business = 450;
var minister = 950;
var sochib = 650;

if( business > minister){
	if(business > sochib){
		console.log('Business is bigger');
	}
	else{
		console.log('sochib is bigger')
	}
}
else{
	if( minister > sochib ){
		console.log('Minister is bigger');
	}
	else{
		console.log('sochib is bigger')
	}
	
}
	*/
	
var business = 450;
var minister = 950;
var sochib = 650;

var max = Math.max (business, minister, sochib);
console.log(max);