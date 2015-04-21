$(document).ready(function(){
	$('#button1').on("click", function(){
	alert("I'm right!");	
	});

	$('#button2').on("click", function(){
		alert("No, I'm right!");
	});
	
/*2. Create a larger element on the page that says 
"Don't hover over me" inside of it. 
When you hover over the element, send an alert to 
the user that says, "Hey, I told you not to hover over me!"*/

	$('.snoopy').hover(function(){
		alert("Hey, I told you not to hover over me!");
	});


/*Create and trigger a custom (not `click`, `mouseover`, etc.) 
event in an implementation of your choice.*/

	$('.trigger').hide();
	$('.trigger').slideDown(4000, function(){
		alert("Woah!")
	});

});

