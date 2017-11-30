		function GetSetTime() {
			var speed = "1000";
			var date = new Date();
			var hours = date.getHours();
			var mins = date.getMinutes();
			var secs = date.getSeconds();
			
		if(hours<=9){
		hours="0"+hours;
		}else{
		hours = date.getHours();
		}
		if(mins<=9){
		mins="0"+mins;
		}else{
		mins = date.getMinutes();
		}
		if(secs<=9){
		secs="0"+secs;
		}else{
		secs = date.getSeconds();
		}
		
		document.getElementById("timedisplay").innerHTML = hours+":"+mins+":"+secs;
		window.setTimeout("GetSetTime()", speed);
		}
		GetSetTime();