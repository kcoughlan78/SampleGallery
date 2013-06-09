function formValidation()
{
var uname = document.getElementById("firstname");
var sname = document.getElementById("surname")
var uemail = document.getElementById("email");
var squery = document.getElementById("query");
{
    if(allLetter(uname))
{
    if(allLetter(sname))    	
{
    if(emailValidator(uemail))
{
	if(validateSelect(squery))
{		
	alert('Query submitted successfully');
    return true;
}
}
}
}
}
	return false;    
}

//below snippets taken from http://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php
//24/11 tailored for use
function allLetter(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert("Name must contain letters only.");
uname.focus();
return false;
}
}

function allLetter2(sname)
{ 
var letters = /^[A-Za-z]+$/;
if(sname.value.match(letters))
{
return true;
}
else
{
alert("Name must contain letters only.");
sname.focus();
return false;
}
}

function emailValidator(email)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(email.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
}
}
function validateSelect(squery)  
{  
if(squery.value === "Default")  
{  
alert('Please select one option from the list');  
squery.focus();  
return false;  
}  
else  
{
alert("Thank you for your query " + (firstname.value) + ", we will get back to you shortly");  
window.location.reload()  
return true;  
}  
}  