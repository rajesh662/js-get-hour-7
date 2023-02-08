


let date = new Date();

hour = date.getHours();

if(hour < 12){
	document.write("morning");
}
else if (hour < 15){
	document.write("often");
}
else if( hour < 18){
	document.write("evening");
}
else if(hour < 24){
	document.write("night");
}
else{
	document.write("not time");
}


