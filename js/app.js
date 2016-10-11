/*global alert, window, setInterval, setTimeout, document*/

(function () {
  'use strict';
  var url = window.location.href,
    now = new Date(),
    data = {
      urlParts: url.split('?')[1],
      greetDate: document.getElementById('greeting-date'),
      userNamePlace: document.getElementById('user-name'),
      currentHour: now.getHours()
    },
    userName,
    userAge;

  // if url has string data
  if (url.indexOf('?') !== -1) {

      userName = data.urlParts.match(/userName=([^&]+)/)[1];
      userAge = data.urlParts.match(/userAge=([^&]+)/)[1];


      if (data.getHours >= 5 && data.currentHour <= 11) {

        data.greetDate.innerHTML = 'Good Morning, ';
        data.userNamePlace.innerHTML = userName + '!';

      } else if (data.currentHour >= 12 && data.currentHour <= 18) {

            data.greetDate.innerHTML = "Good Afternoon, ";
            data.userNamePlace.innerHTML = userName + "!";

        } else {

            data.greetDate.innerHTML = "Good Evening, ";
            data.userNamePlace.innerHTML = userName + "!";
        }
    }

    // set random color every time the box is appear
    function setRandomColor() {
        var letters = '0123456789ABCDEF'.split(''),
          color = '#',
          i;

        for (i = 0; i < 6; i++) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }


    var elements = {
      body: document.getElementById('box-body'),
      box: document.getElementById('box'),
      playerTime: document.getElementById('playerTime'),
      timming: document.getElementById('timing')
    };


    var menu = document.getElementById('menu'),
      levelsMenu = document.getElementById('levels');
    menu.onmouseover = function () {
      levelsMenu.style.display = 'block';
    };
    menu.onmouseout = function () {
      levelsMenu.style.display = 'none';
    };

  var levels = document.getElementsByClassName('level-choise'),
    setting = document.getElementById('setting'),
    resultField = document.getElementById('result-field'),
    levelSeconds,
    timesUp,
    className,
    dataTime,
    dataTop,
    dataLeft,
    displaySetting = function () {
      setting.style.display = 'block';
      resultField.style.visibility = 'visible';
      levelsMenu.style.display = 'none';
      levelSeconds = this.getAttribute('data-difficulty');
      timesUp = this.getAttribute('data-times-up');
      className = this.getAttribute('data-class');
      dataTime = this.getAttribute('data-time');
      dataTop = this.getAttribute('data-top');
      dataLeft = this.getAttribute('data-left');
      console.log(levelSeconds);
      console.log(className);
    },
    i;

    for(i = 0; i < levels.length; i++) {
      levels[i].addEventListener('click', displaySetting);
    }



  function pauesGame () {
    alert(dataTime * 1000);
  }
  document.getElementById('pause').addEventListener('click', pauesGame);


  var setTimer,   // for setTimeout function
    countDown,    // for setInterval function
    setTime,
    endTime,
    reactTime;


    //
  function endTimeout () {
      window.clearTimeout(setTimeoutTwo);
  }

  function endInterval () {
    window.clearInterval(countDown);
  }


  function secondPass() {

    var minutes =Math.floor( levelSeconds / 60 ),
        remSeconds = levelSeconds % 60;
    elements.timming.innerHTML = "0" + minutes + ":" + remSeconds ;


    if (remSeconds % 2 === 0 && remSeconds <= 7){
        elements.timming.style.color = '#FFF';
        if (remSeconds < 10) {
            elements.timming.innerHTML = "00:0" + remSeconds;
        }
    } else if (remSeconds > 7) {
        elements.timming.style.color = '#FFF';
        if (remSeconds < 10) {
            elements.timming.innerHTML = "00:0" + remSeconds;
        }
    } else {
        elements.timming.style.color = 'red';
        if (remSeconds < 10) {
            elements.timming.innerHTML = "00:0" + remSeconds;
        }
    }

    if (levelSeconds > 0) {
      levelSeconds = levelSeconds - 1;
    } else {
      endTimeout();
      endInterval();
      elements.timming.style.color = '#7fff00';
      elements.timming.innerHTML = "Time's Up";
      elements.box.style.display = "none";
      elements.body.className = 'box-body';
      setTimeout(function () {
          alert('You Clicked (' + clicks + ') Times');
          console.log(levelSeconds);
      }, 1200);
    }
  }

  var clicks = 0;
  function countClicks () {
    clicks++;
    return clicks;
  }

  function gameEngine () {

    elements.box.style.display = 'none';
    elements.body.className = className;
    var time;

      time = Math.random() * dataTime * 1000;


    setTimer = setTimeout(function () {
      var moveTop = (Math.random() * dataTop),
          moveLeft = (Math.random() * dataLeft);

      if (Math.random() > 0.5) {

          elements.box.style.borderRadius = "50%";

      } else {

          elements.box.style.borderRadius = "0";
      }

      elements.box.className = '';
      elements.box.className = className + '-box';
      elements.box.style.top = moveTop + 'px';
      elements.box.style.left = moveLeft + 'px';
      elements.box.style.backgroundColor = setRandomColor();
      elements.box.style.display = "block";

      setTime = Date.now();
      console.log(setTime);
    }, time);

  }

  function startCount () {
    countDown = setInterval(function () {
      secondPass();
    }, 1000);
  }


  var setTimeoutTwo;

  function clickMeEngine () {

    endTime = Date.now();
    reactTime = (endTime - setTime) / 1000;

    if (reactTime >= 60) {

      var myTimeMin = Math.floor(reactTime / 60),
        remMyTimeSec = Math.floor(reactTime % 60);

        elements.playerTime.innerHTML = myTimeMin + 'm, ' + remMyTimeSec + 's';

    } else if (reactTime >= 1) {

        elements.playerTime.innerHTML = reactTime + 's';

        var comments = [
            "Congrats," + "\n" + "You are faster than a TURTLE!",
            "Come On," + "\n" +"Is That All You Have?!",
            "Do you even know who FLASH is?!",
            "ooh" + "\n" + "I slept twice"
        ];
        alert(comments[Math.round(Math.random() * 3)]);

    } else {

        elements.playerTime.innerHTML = reactTime + "s";
    }

    elements.box.style.display = 'none';

    var time;
    if (dataTime >= 4){
      time = (Math.random() + 1) * dataTime * 1000;
    } else {
      time = Math.random() * dataTime * 1000;
    }

    setTimeoutTwo = setTimeout(function () {
      gameEngine();

    }, time);
  }


  function playAgain () {
    clicks = 0;
    switch (className) {

      case 'easy':
        levelSeconds = '30';
        gameEngine();
        startCount();
        break;

      case 'medium':
        levelSeconds = '25';
        gameEngine();
        startCount();
        break;

      case 'hard':
        levelSeconds = '20';
        gameEngine();
        startCount();
        break;

      case 'flash':
        levelSeconds = '10';
        gameEngine();
        startCount();
        break;

    }
    console.log(levelSeconds);
  }

  document.getElementById('stop').addEventListener('click', playAgain);
  //box.addEventListener('click', startCount);
  elements.box.addEventListener('click', countClicks);
  elements.box.addEventListener('click', clickMeEngine);
  document.getElementById('resume').addEventListener('click', startCount);
  document.getElementById('resume').addEventListener('click', gameEngine);

})();
