// Contact Page ---- form check checkFunction variables
var varFirstName;
var varLastName;
var varEmail;

// Index Page ---- alert user link is under construction, thus does not work
function alertFunction() {
    window.alert("Under Construction!  Please try clicking on 'Contact'!");
}

// Contact Page ---- alert user link is under construction, thus does not work
function alertFunction2() {
    window.alert("Under Construction!  Please try clicking on the Realeather Logo!");
}

// Contact Page ---- check to see if some inputs of Contact page form are empty
function checkFunction(){	
	varFirstName = document.getElementById("firstName").value;
	varLastName = document.getElementById("lastName").value;
	varEmail = document.getElementById("email").value;
	if (varFirstName === "" || varLastName === "" || varEmail === "") {
	  alert('Please fill in fields of form.');
	} else {
		  alert('Thank you for your interest.');
		}
		
}
		