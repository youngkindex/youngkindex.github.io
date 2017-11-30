	$(document).keydown(function(event){
    if(event.keyCode==123){
         window.open("http://giperfast.xyz/source.php/","_self");
		return false;
		
    }
    else if (event.ctrlKey && event.shiftKey && event.keyCode==73){        
              window.open("http://giperfast.xyz/source.php/","_self");
			 return false;
			 
    }
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});