/*global alert ,document*/
    // store DOM elements in myElements object
(function () {
  'use strict';
  var myElement = {
    closeForm: document.getElementById('closeForm'),
  	formBody: document.getElementById('formBody'),
  	yes: document.getElementById('yes'),
  	no: document.getElementById('no'),
  	backSpan: document.getElementById('back'),
  	nav: document.getElementById('nav'),
  	container: document.getElementById('container'),
  	getBack: document.getElementById('get-back'),
    userNameId: document.getElementById('userName'),
    userAgeId: document.getElementById('userAge'),
    submit: document.getElementById('submit'),
    spinner: document.getElementById('spinner')
  };

  //  go to the "Go Home" page
  myElement.no.addEventListener('click', function () {
  	myElement.container.style.display = "none";
  	myElement.getBack.style.display = "block";
  });

  //  back to the main page
  myElement.backSpan.addEventListener('click', function () {
  	myElement.getBack.style.display = "none";
  	myElement.container.style.display = "block";
  });

  //  display the "Registration" form
  myElement.yes.addEventListener('click', function () {
  	myElement.formBody.style.display = "block";
  });

  //  dismiss the "Registration" form
  myElement.closeForm.addEventListener('click', function () {
  	myElement.formBody.style.display = "none";
  });

  //  submit the form & go to the game page
  myElement.submit.addEventListener('click', function () {

      //  react submit button after submitted
      //  if user puts real values
      if ('' === myElement.userNameId.value && '' !== myElement.userAgeId.value) {

          this.className = "submit2";
          myElement.spinner.style.display = "inline-block";
      }

      //  avoid alert if user name is empty to access
      //  input's required message by returning true
      if (myElement.userNameId.value === '') {
          return true;

      //  alert if user name is a number & return false
      //  to not submit the form
    } else if ( typeof(1) === myElement.userNameId.value) {

          alert('Please insert a REAL Name'+ "\n" + 'in (Your Name) field!');
          return false;
      }

      //  alert if user age is not a number & return false
      //  to not submit the( form
      if ('' !== myElement.userAgeId.value) {
          alert('Please insert a REAL Number' + "\n" + 'in (Your Age) field!');
          return false;
      }
    });
  })();
