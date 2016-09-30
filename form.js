/*global alert ,document*/
    // store DOM elements in myElements object
var myElement = {
    
    closeForm: document.getElementById('closeForm'),
	formBody: document.getElementById('formBody'),
	yes: document.getElementById('yes'),
	no: document.getElementById('no'),
	backSpan: document.getElementById('back'),
	nav: document.getElementById('nav-id'),
	container: document.getElementById('container-id'),
	getBack: document.getElementById('get-back'),
    userNameId: document.getElementById('userName-id'),
    userAgeId: document.getElementById('userAge-id'),
    submit: document.getElementById('submit'),
    spinner: document.getElementById('spinner')
};

//  go to the "Go Home" page
myElement.no.onclick = function () {
    'use strict';
	myElement.container.style.display = "none";
	myElement.getBack.style.display = "block";
};

//  back to the main page
myElement.backSpan.onclick = function () {
    'use strict';
	myElement.getBack.style.display = "none";
	myElement.container.style.display = "block";
};

//  display the "Registration" form
myElement.yes.onclick = function () {
    'use strict';
	myElement.formBody.style.display = "block";
};

//  dismiss the "Registration" form
myElement.closeForm.onclick = function () {
    'use strict';
	myElement.formBody.style.display = "none";
};

//  submit the form & go to the game page
myElement.submit.onclick = function () {
    'use strict';
    
    //  react submit button after submitted
    //  if user puts real values
    if (isNaN(myElement.userNameId.value) && !isNaN(myElement.userAgeId.value) &&  myElement.userAgeId.value !== "") {
        
        this.id = "submit2";
        myElement.spinner.style.display = "inline-block";
    }
    
    //  avoid alert if user name is empty to access
    //  input's required message by returning true
    if (myElement.userNameId.value === "") {
        return true;
        
    //  alert if user name is a number & return false
    //  to not submit the form
    } else if (!isNaN(myElement.userNameId.value)) {
        
        alert("Please insert a REAL Name" + "\n" + "in (Your Name) field!");
        return false;
    }
    
    //  alert if user age is not a number & return false
    //  to not submit the form
    if (isNaN(myElement.userAgeId.value)) {
        alert("Please insert a REAL Number" + "\n" + "in (Your Age) field!");
        return false;
    }
};