var name = [2, 4, 2, 4, 56, 64, 45, 34, 2, 5, 5,2];
var uniqueName = [];

for(var i = 0; i < name.length; i++){
	var element = name[i];
	var index = uniqueName.indexOf(element);
	if(index == -1){
		uniqueName.push(element)
	}
}
console.log(uniqueName);