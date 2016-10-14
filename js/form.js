  /*global alert*/
      // store DOM elements in myElements object
(function () {

  var myElement = {
    closeForm: document.getElementById('close-form'),
    formBody: document.getElementById('form-body'),
    yes: document.getElementById('yes-btn-choise'),
    no: document.getElementById('no-btn-choise'),
    backSpan: document.getElementById('back-btn-choise'),
    nav: document.getElementById('navigation'),
    frontField: document.getElementById('front-field'),
    backField: document.getElementById('back-field'),
    userName: document.getElementById('user-name'),
    userAge: document.getElementById('user-age'),
    submit: document.getElementById('submit-form'),
    spinner: document.getElementById('spinner')
  };

  //  go to the "Go Home" page
  myElement.no.addEventListener('click', function () {
    myElement.frontField.style.display = 'none';
    myElement.backField.style.display = 'block';
  });

  //  back to the main page
  myElement.backSpan.addEventListener('click', function () {
    myElement.backField.style.display = 'none';
    myElement.frontField.style.display = 'block';
  });

  //  display the "Registration" form
  myElement.yes.addEventListener('click', function () {
    myElement.formBody.style.display = 'block';
  });

  //  dismiss the "Registration" form
  myElement.closeForm.addEventListener('click', function () {
    myElement.formBody.style.display = 'none';
  });

  //  submit the form & go to the game page
  myElement.submit.addEventListener('click', function (ev) {

      //  react submit button after submitted
      //  if user puts real values
    if (isNaN(myElement.userName.value) && !isNaN(myElement.userAge.value) &&  myElement.userAge.value !== '') {
      this.className = 'submit2';
      myElement.spinner.style.display = 'inline-block';
    }

      //  avoid alert if user name is empty to access
      //  input's required message by returning true
    if (myElement.userName.value === '') {
      return true;

      //  alert if user name is a number & return false
      //  to not submit the form
    } else if (!isNaN(myElement.userName.value)) {

      alert('Please insert a REAL Name' + "\n" + 'in (Your Name) field!');
      ev.preventDefault();
    }

      //  alert if user age is not a number & return false
      //  to not submit the form
      if (isNaN(myElement.userAge.value)) {
        alert('Please insert a REAL Number' + "\n" + 'in (Your Age) field!');
        ev.preventDefault();
      }

  });
})();
