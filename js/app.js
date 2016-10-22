/*global alert, window, setInterval, setTimeout, document*/

(function () {
  'use strict';

  // define the user's name & age from href
  var url = window.location.href,
    data = {
      urlParts: url.split('?')[1],
      userName: null,
      userAge: null
    },
    now = new Date(),
    currentHour = now.getHours(),
    getDate = document.getElementById('get-date'),
    userNamePlace = document.getElementById('user-name');

  // if url has string data, print the user name
  if (url.indexOf('?') !== -1) {

    data.userName = data.urlParts.match(/userName=([^&]+)/)[1];
    data.userAge = data.urlParts.match(/userAge=([^&]+)/)[1];


    if (data.getHours >= 5 && currentHour <= 11) {

      getDate.innerHTML = 'Good Morning, ';
      userNamePlace.innerHTML = data.userName + '!';

    } else if (currentHour >= 12 && currentHour <= 18) {
      getDate.innerHTML = 'Good Afternoon, ';
      userNamePlace.innerHTML = data.userName + '!';
    } else {

      getDate.innerHTML = 'Good Evening, ';
      userNamePlace.innerHTML = data.userName + '!';
    }
  }

    // set random color every time the box is appear
  function setRandomColor () {

    var letters = '0123456789ABCDEF'.split(''),
      color = '#',
      i;
    for (i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
  }

  // define page elements to the 'elements' object
  var elements = {
    body: document.getElementById('box-body'),
    box: document.getElementById('click-me-box'),
    playerTime: document.getElementById('player-time'),
    headerMenu: document.getElementById('header-menu'),
    levelsMenu: document.getElementById('levels-menu'),
    timing: document.getElementById('timing'),
    setting: document.getElementById('game-setting'),
    resultField: document.getElementById('result-field'),
    levels: document.getElementsByClassName('level-choise')
  };


  //    display levels menu while hover
  elements.headerMenu.addEventListener('mouseover', function () {
    elements.levelsMenu.style.display = 'inline-block';
  });
  //    hide levels menu when hover out
  elements.headerMenu.addEventListener('mouseout', function () {
    elements.levelsMenu.style.display = 'none';
  });

  //    declare variables to use it as data attribute
  var levelSeconds,
    timesUp,
    currentLevel,
    dataTime,
    dataTop,
    dataLeft,
    // use a function expression to declare data of what ever level selected
    defineCurrentLevel = function () {
      elements.setting.style.display = 'block';
      elements.resultField.style.visibility = 'visible';
      elements.levelsMenu.style.display = 'none';

      levelSeconds = this.getAttribute('data-difficulty');
      timesUp = this.getAttribute('data-times-up');
      currentLevel = this.getAttribute('data-current-level');
      dataTime = this.getAttribute('data-time');
      dataTop = this.getAttribute('data-top');
      dataLeft = this.getAttribute('data-left');

      console.log(levelSeconds);
      console.log(currentLevel);
    },
    i;
    //  use for loop to select level then calling defineCurrentLevel function
  for (i = 0; i < elements.levels.length; i++) {
    elements.levels[i].addEventListener('click', defineCurrentLevel);
  }


  var setTimer,     // define setTimer variable to control setTimeout function
    countDown,      // define countDown variable to control setInterval function
    setTime,        // store the second box has displayed
    endTime,        // store the second player has clicked
    reactionTime,   // store howlong player take to click the box after it displayed
    numberOfClicks = 0;

  // check the level's seconds and warning when remain seconds is less than or equal to 7
  function secondPass () {

    var minutes = Math.floor(levelSeconds / 60),
      remSeconds = levelSeconds % 60;
    elements.timing.innerHTML = '0' + minutes + ':' + remSeconds ;

    if (remSeconds % 2 === 0 && remSeconds <= 7) {
      elements.timing.style.color = '#FFF';
      if (remSeconds < 10) {
        elements.timing.innerHTML = '00:0' + remSeconds;
      }
    } else if (remSeconds > 7) {
      elements.timing.style.color = '#FFF';
      if (remSeconds < 10) {
        elements.timing.innerHTML = '00:0' + remSeconds;
      }
    } else {
      elements.timing.style.color = 'red';
      if (remSeconds < 10) {
        elements.timing.innerHTML = '00:0' + remSeconds;
      }
    }

    if (levelSeconds > 0) {
      levelSeconds -= 1;    // change number of seconds by subtract ONE second

  } else {    //    when levle seconds reach 0, STOP counting & show result
      window.clearTimeout(setTimer);
      window.clearInterval(countDown);
      elements.timing.style.color = '#7fff00';
      elements.timing.innerHTML = "Time's Up";
      elements.box.style.display = 'none';
      elements.body.className = 'default-box-body';
      setTimeout(function () {
        alert('You Clicked (' + numberOfClicks + ') Times');
        console.log(levelSeconds);
      }, 1200);
    }
  }

  //    the constructor function of all levels
  function gameEngine () {

    elements.box.style.display = 'none';
    elements.body.className = currentLevel; // give the box a className based on which level selected


    //  store the duration the box is taking to display then use it to setTimeout function
    var time = Math.random() * dataTime * 1000;


    setTimer = setTimeout(function () {     //  move the box to right and bottom based on its data
      var moveTop = (Math.random() * dataTop),
        moveLeft = (Math.random() * dataLeft);

      if (Math.random() > 0.5) {
        elements.box.style.borderRadius = '50%';

      } else {
        elements.box.style.borderRadius = "0";
      }

      elements.box.className = currentLevel + '-box';
      elements.box.style.top = moveTop + 'px';
      elements.box.style.left = moveLeft + 'px';
      elements.box.style.backgroundColor = setRandomColor();
      elements.box.style.display = "block";

      setTime = Date.now();
      console.log(setTime);
    }, time);
  }

  //    set interval function to change the number of seconds every ONE seconds
  function startCount () {
    countDown = setInterval(function () {
      secondPass();
    }, 1000);
  }

  //   start counting When the box is clicked
  function clickMeEngine () {

    numberOfClicks++;
    endTime = Date.now();
    reactionTime = (endTime - setTime) / 1000;

    if (reactionTime >= 60) {

      var myTimeMin = Math.floor(reactionTime / 60),
        remMyTimeSec = Math.floor(reactionTime % 60);

      elements.playerTime.innerHTML = myTimeMin + 'm, ' + remMyTimeSec + 's';

    } else if (reactionTime >= 1) {

      elements.playerTime.innerHTML = reactionTime + 's';

      var comments = [
        'Congrats,\n You are faster than a TURTLE!',
        'Come On,\n Is That All You Have?!',
        'Do you even know who FLASH is?!',
        'ooh\n I slept twice'
      ];
      alert (comments[ Math.round(Math.random() * 3) ]);

    } else {

      elements.playerTime.innerHTML = reactionTime + 's';
    }

    elements.box.style.display = 'none';

    var time;
    if (dataTime >= 4){
      time = (Math.random() + 1) * dataTime * 1000;
    } else {
      time = Math.random() * dataTime * 1000;
    }

    setTimer = setTimeout(function () {
      gameEngine();
    }, time);
  }

  //    activate clickMeEngine function
  elements.box.addEventListener('click', clickMeEngine);


  // store the 2 function inside one function (playNow) to use addEventListener once
  function playNow () {
      startCount();
      gameEngine();
  }
  document.getElementById('play-btn-choise').addEventListener('click', playNow);

  //    play another round with the same level
  document.getElementById('play-again-btn-choise').addEventListener('click', function () {
    numberOfClicks = 0;
      //  use switch to reset level's seconds to default seconds
    switch (currentLevel) {

      case 'easy':
        levelSeconds = '30';
        break;

      case 'medium':
        levelSeconds = '25';
        break;

      case 'hard':
        levelSeconds = '20';
        break;

      case 'flash':
        levelSeconds = '10';
        break;
    }
    gameEngine();
    startCount();
    console.log(levelSeconds);
  });


  //    Cancel and clear the current 'clickme' round
  document.getElementById('pause-btn-choise').addEventListener('click', function () {
    elements.box.style.display = 'none';
    reactionTime = 0;
    window.clearTimeout(setTimer);
    window.clearInterval(countDown);
  });

})();
