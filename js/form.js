  /*global alert*/
      // store DOM elements in myElements object
(function (){
  var myElement = {

    closeForm: document.getElementById('closeForm'),
  	formBody: document.getElementById('formBody'),
  	yes: document.getElementById('yes'),
  	no: document.getElementById('no'),
  	backSpan: document.getElementById('back'),
  	nav: document.getElementById('nav'),
  	container: document.getElementById('container'),
  	getBack: document.getElementById('get-back'),
    userName: document.getElementById('userName'),
    userAge: document.getElementById('userAge'),
    submit: document.getElementById('submit'),
    spinner: document.getElementById('spinner')
  };

  //  go to the "Go Home" page
  myElement.no.addEventListener('click', function () {
      'use strict';
  	myElement.container.style.display = "none";
  	myElement.getBack.style.display = "block";
  });

  //  back to the main page
  myElement.backSpan.addEventListener('click', function () {
      'use strict';
  	myElement.getBack.style.display = "none";
  	myElement.container.style.display = "block";
  });

  //  display the "Registration" form
  myElement.yes.addEventListener('click', function () {
      'use strict';
  	myElement.formBody.style.display = "block";
  });

  //  dismiss the "Registration" form
  myElement.closeForm.addEventListener('click', function () {
      'use strict';
  	myElement.formBody.style.display = "none";
  });

  //  submit the form & go to the game page
  // TODO addEventListener Doesn't work(it returns true & submitted the form)
  myElement.submit.onclick = function () {

      //  react submit button after submitted
      //  if user puts real values
      if (isNaN(myElement.userName.value) && !isNaN(myElement.userAge.value) &&  myElement.userAge.value !== "") {

        this.className = '';
        this.className = "submit2";
        myElement.spinner.style.display = "inline-block";
      }

      //  avoid alert if user name is empty to access
      //  input's required message by returning true
      if (myElement.userName.value === "") {
          return true;

      //  alert if user name is a number & return false
      //  to not submit the form
      } else if (!isNaN(myElement.userName.value)) {

          alert("Please insert a REAL Name" + "\n" + "in (Your Name) field!");
          return false;
      }

      //  alert if user age is not a number & return false
      //  to not submit the form
      if (isNaN(myElement.userAge.value)) {
          alert("Please insert a REAL Number" + "\n" + "in (Your Age) field!");
          return false;
      }
  };
})();
