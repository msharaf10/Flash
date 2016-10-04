/*global alert ,confirm ,window ,setInterval ,setTimeout ,document ,clearInterval*/
    //  Get user info
(function getUserInfo() {
    'use strict';
    var url = window.location.href,
        userName,
        userAge,
        greetDate,
        userNamePlace,
        getTimeNow;

    //  if game page has no data(string) in url, keep moving.
    //  Otherwise, declare user's name and age variables.
    if ("string" === typeof url.split("?")[1]) {

        userName = url.split("?")[1].split("=")[1].split("&")[0];
        userAge = url.split("?")[1].split("=")[2];

        //  Greeting New Guest
        greetDate = document.getElementById('greeting-date');
        userNamePlace = document.getElementById('user-name');
        getTimeNow = new Date().getHours();

        if (getTimeNow >= 5 && getTimeNow <= 11) {

            greetDate.innerHTML = "Good Morning, ";
            userNamePlace.innerHTML = userName + "!";

        } else if (getTimeNow >= 12 && getTimeNow <= 18) {

            greetDate.innerHTML = "Good Afternoon, ";
            userNamePlace.innerHTML = userName + "!";

        } else {

            greetDate.innerHTML = "Good Evening, ";
            userNamePlace.innerHTML = userName + "!";
        }
    }
}());


    //  set myGame object and store variables in it to use in functions
var myGame = {
    
    myBody: document.getElementById('box-body-id'),
    myBox: document.getElementById('box-id'),
    playerTime: document.getElementById('playerTime'),
    setTime: null,
    endTime: null,
    myTime: null,
    flashOpt: document.getElementById('flashOpt')
};
    
    //  Set a random color for the box or circle
function setRandomColor() {
    'use strict';

    var letters = '0123456789ABCDEF'.split(''),
        color = '#',
        i;

    for (i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}

    //  Not Working with "onclick" event in js file
/*var gameLevelsSelect = {
    levels: document.getElementById('levels-id').children,
    easy: document.getElementById('easyOpt'),
    medium: document.getElementById('mediumOpt'),
    hard: document.getElementById('hardOpt'),
    flash: document.getElementById('flashOpt')
}
gameLevelsSelect.levels.onclick = function () {
    if (this[0]) {
        gameLevelsFunctions.lvEasy();
    }
}*/
    //  set levels functions

function lvEasy() {
    'use strict';
    myGame.myBox.style.display = "none";
    myGame.myBody.className = '';
    myGame.myBody.className = 'easy';

    //  Display a box or circle between 2 and 5 seconds
    //  with a specific style 
    var time = (Math.random() + 1) * 2500;
    setTimeout(function () {

        var moveTop = (Math.random() * 430),
            moveLeft = (Math.random() * 540);

        if (Math.random() > 0.5) {

            myGame.myBox.style.borderRadius = "50%";

        } else {

            myGame.myBox.style.borderRadius = "0";
        }

        //  set the game box to easy style
        myGame.myBox.className = '';
        myGame.myBox.className = 'easy-box';
        myGame.myBox.style.top = moveTop + 'px';
        myGame.myBox.style.left = moveLeft + 'px';
        myGame.myBox.style.backgroundColor = setRandomColor();
        myGame.myBox.style.display = "block";
        myGame.setTime = Date.now();
    }, time);
}

function lvMedium() {
    'use strict';
    myGame.myBox.style.display = "none";
    myGame.myBody.className = '';
    myGame.myBody.className = 'medium';

    //  Display a box or circle between 1 and 4 seconds
    //  with a specific style
    var time = Math.random() * 4000;
    setTimeout(function () {

        var moveTop = (Math.random() * 430),
            moveLeft = (Math.random() * 807);

        if (Math.random() > 0.5) {

            myGame.myBox.style.borderRadius = "50%";

        } else {

            myGame.myBox.style.borderRadius = "0";
        }

        //  set the game box to medium style
        myGame.myBox.className = '';
        myGame.myBox.className = 'medium-box';
        myGame.myBox.style.top = moveTop + 'px';
        myGame.myBox.style.left = moveLeft + 'px';
        myGame.myBox.style.backgroundColor = setRandomColor();
        myGame.myBox.style.display = "block";
        myGame.setTime = Date.now();
    }, time);
}

function lvHard() {
    'use strict';
    clearInterval(levelTimer.Countdown);
    myGame.myBox.style.display = "none";
    myGame.myBody.className = '';
    myGame.myBody.className = 'flash';

    //  Display a box or circle between 1 and 3 seconds
    //  with a specific style
    var time = Math.random() * 3000;
    setTimeout(function () {

        var moveTop = (Math.random() * 450),
            moveLeft = (Math.random() * 1225);

        if (Math.random() > 0.5) {

            myGame.myBox.style.borderRadius = "50%";

        } else {

            myGame.myBox.style.borderRadius = "0";
        }

        //  set the game box to hard style
        myGame.myBox.className = '';
        myGame.myBox.className = 'hard-box';
        myGame.myBox.style.top = moveTop + 'px';
        myGame.myBox.style.left = moveLeft + 'px';
        myGame.myBox.style.backgroundColor = setRandomColor();
        myGame.myBox.style.display = "block";
        myGame.setTime = Date.now();
    }, time);
}

function lvIamFlash() {
    'use strict';

    myGame.myBox.setAttribute('data-click', 'yes');
    myGame.myBox.style.display = "none";
    myGame.myBody.className = '';
    myGame.myBody.className = 'flash';

    //  Display a box or circle between 1 and 3 seconds
    //  with a specific style
    var time = Math.random() * 1000;
    setTimeout(function () {
        myGame.myBox.setAttribute('data-click', 'no');
        var moveTop = (Math.random() * 480),
            moveLeft = (Math.random() * 1255);

        if (Math.random() > 0.5) {

            myGame.myBox.style.borderRadius = "50%";

        } else {

            myGame.myBox.style.borderRadius = "0";
        }

        //  set the game box to flash style
        myGame.myBox.className = '';
        myGame.myBox.className = 'flash-box';
        myGame.myBox.style.top = moveTop + 'px';
        myGame.myBox.style.left = moveLeft + 'px';
        myGame.myBox.style.backgroundColor = setRandomColor();
        myGame.myBox.style.display = "block";
        myGame.setTime = Date.now();
    }, time);
    if (myGame.myBox.getAttribute('data-click') === "no") {
        setTimeout(function () {
            myGame.myBox.style.display = "none";
        }, 1000);
    }
}

    //  display a box or circle again depend its
    //  level after it clicked
myGame.myBox.onclick = function () {
    'use strict';
    
    switch (this.className) {
            
    case 'easy-box':
        lvEasy();
        break;

    case 'medium-box':
        lvMedium();
        break;

    case 'hard-box':
        lvHard();
        break;

    case 'flash-box':
        lvIamFlash();
        countClicks();  //  start count clicks
        break;
    }
    var comments, myTimeMin, remMyTimeSec;
    
    //  counting and declare user result
    myGame.endTime = Date.now();
    myGame.myTime = (myGame.endTime - myGame.setTime) / 1000;
    
    //  if seconds greater than or equal 60 set minutes = 1
    if (myGame.myTime >= 60) {
        
        myTimeMin = Math.floor(myGame.myTime / 60);
        remMyTimeSec = Math.floor(myGame.myTime % 60);
        
        myGame.playerTime.innerHTML = myTimeMin + "m, " + remMyTimeSec + "s";
    
    //  if past time is more than 1 second choose randomly
    //  alert from comments array
    } else if (myGame.myTime >= 1) {
        
        myGame.playerTime.innerHTML = myGame.myTime + "s";
        
        comments = [
            "Congrats," + "\n" + "You are faster than a TURTLE!",
            "Come On," + "\n" + "Is That All You Have?!",
            "Do you even know who FLASH is?!",
            "ooh" + "\n" + "I slept twice"
        ];
        alert(comments[Math.round(Math.random() * 3)]);
        
    } else {
        
        myGame.playerTime.innerHTML = myGame.myTime + "s";
    }
    
    //  make the box or circle disappear again after clicked
    this.style.display = "none";
};

//  set timer to 15 seconds
var levelTimer = {

    countTime: document.getElementById("timing"),
    seconds: 5,
    secondPass: null
};
//  start countdown timer
function startCount() {
    
    countDown = setInterval(function () {
        secondPass();
    }, 1000);
}


//  count how many clicks the user did

var clicks = 0;

function countClicks() {
    'use strict';
    clicks++;
}

//  timer Engin

function secondPass() {
    'use strict';
    
    var minutes = Math.floor(levelTimer.seconds / 60),
        remSeconds = levelTimer.seconds % 60;
    levelTimer.countTime.innerHTML = "0" + minutes + ":" + remSeconds;


    if (remSeconds % 2 === 0 && remSeconds <= 7) {
        levelTimer.countTime.style.color = '#FFF';
        if (remSeconds < 10) {
            levelTimer.countTime.innerHTML = "00:0" + remSeconds;
        }
    } else if (remSeconds > 7) {
        levelTimer.countTime.style.color = '#FFF';
        if (remSeconds < 10) {
            levelTimer.countTime.innerHTML = "00:0" + remSeconds;
        }
    } else {
        levelTimer.countTime.style.color = 'red';
        if (remSeconds < 10) {
            levelTimer.countTime.innerHTML = "00:0" + remSeconds;
        }
    }

    if (levelTimer.seconds > 0) {
        levelTimer.seconds = levelTimer.seconds - 1;
    } else {
        clearInterval(countDown);
        levelTimer.countTime.style.color = '#7fff00';
        levelTimer.countTime.innerHTML = "Time's Up";
        myGame.myBox.style.display = "none";
        myGame.myBody.className = 'box-body';
        setTimeout(function () {
            alert("You Clicked (" + clicks + ") Times");
        }, 1200);
    }
}