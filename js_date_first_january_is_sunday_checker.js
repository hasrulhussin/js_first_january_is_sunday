
var counter = 0;

for (var year = 2014; year <= 2050; year++){
		var d = new Date(year, 0, 1); // 2014-2050 Jan 1
		
		// 0 = Sunday, because JS date starts with Sunday
		if( d.getDay() === 0 ){ 
			document.write("1st January is being a Sunday  "+year+"<br />");
			counter++;
		}
    }
	
		document.write("<br />" +"Total of times it happens: "+counter);
