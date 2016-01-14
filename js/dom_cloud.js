var cloudCount = {};
function tagCloud (table){
	console.log("inside tagCloud");
	var tableAttrs = table.children;
	for (var i = 0; i < tableAttrs.length; i++){
		var passOver = tableAttrs[i].nodeName.toLowerCase();
 	// 
 	// if (){

 	// }
console.log(cloudCount[passOver]);
 		cloudCount[passOver] += parseFloat(passOver);
 		tagCloud(tableAttrs[i]);
 		
 }
}
var table = document.documentElement;
tagCloud(table);