/* Lab 5 JavaScript File 
   Place variables and functions in this file */

function validate(formObj) {
   // put your validation code here
   // it will be a series of if statements
   var error = "";

   if (formObj.firstName.value == "") {
      if(error == ""){
         formObj.firstName.focus();
      }
      error+="You must enter a first name\n";
   }
   if (formObj.lastName.value == "") {
      if(error == ""){
         formObj.lastName.focus();
      }
      error+="You must enter a last name\n";
   }
   if (formObj.title.value == "") {
      if(error == ""){
         formObj.title.focus();
      }
      error+="You must enter a title\n";
   }
   if (formObj.org.value == "") {
      if(error == ""){
         formObj.org.focus();
      }
      error+="You must enter an organization\n";
   }
   if (formObj.pseudonym.value == "") {
      if(error == ""){
         formObj.pseudonym.focus();
      }
      error+="You must enter a nickname\n";
   }
   if (formObj.comments.value == "" || formObj.comments.value == "Please enter your comments") {
      if(error == ""){
         formObj.comments.focus();
      }
      error+="You must enter some comments\n";
   }

   if(error != ""){
      alert(error);
      return false;
   }

   alert("Done! The form has been submitted.");
   return true;
}

function commentClearFunct() {
   if (comments.value == "Please enter your comments") {
      comments.value = "";
   }
}

function displayNames() {
   alert(firstName.value + " " + lastName.value + " is " + pseudonym.value);
}

function loadFunct(){
   document.getElementById("firstName").focus();
}
