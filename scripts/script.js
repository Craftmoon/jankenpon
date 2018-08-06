// Function that randomize and return the computer hand choice
function computerPlay () {
  const hands = ['rock', 'paper', 'scissors'];
  // Random between 0 and 2;
  let compHand = hands[Math.floor(Math.random()*3)];
  return compHand;
}

// Receives the player hand input
function playerPlay () {
  let playerHand = prompt('Write your hand!');
  return playerHand;
}

// Calculate the match result
function playRound (playerSelection, compSelection) {

  // Politely check if the player input is acceptable
  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    return 'Can\'t you fucking write?';
  }

  //  Check who wins
  if (playerSelection === 'rock') {
    if (compSelection === 'rock') {
      console.log('Draw! You both suck!');
      return null;
    } else {
      if (compSelection === 'paper') {
        console.log(`You lose! Computer's ${compSelection} beats your ${playerSelection} !`);
        return false;
      } else {
        console.log(`You win! Your ${playerSelection} beats Computer's ${compSelection} !`);
        return true;
      }
    }
  } else if (playerSelection === 'paper') {
      if (compSelection === 'rock') {
        console.log(`You win! Your ${playerSelection} beats Computer's ${compSelection} !`);
        return true;
      } else {
        if (compSelection === 'paper') {
          console.log('Draw! You both suck!');
          return null;
        } else {
          console.log(`You lose! Computer's ${compSelection} beats your ${playerSelection} !`);
          return false;
        }
    }
  } else {
    if (compSelection === 'rock') {
      console.log(`You lose! Computer's ${compSelection} beats your ${playerSelection} !`);
      return false;
    } else {
      if (compSelection === 'paper') {
        console.log(`You win! Your ${playerSelection} beats Computer's ${compSelection} !`);
        return true;
      } else {
        console.log('Draw! You both suck!');
        return null;
      }
    }
  }
}


// Functions that change the background based on the result of the matches
function fight () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/2.jpg')" }, 200);
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/3.jpg')" }, 800);
}

function win () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/win.jpg')" }, 1300);
}

function win5 () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/win5.jpg')" }, 1300);
}

function lose () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/lose.jpg')" }, 1300);
}

function lose5 () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/lose5.jpg')" }, 1300);
}

function draw () {
  setTimeout(function(){ document.body.style.backgroundImage = "url('images/draw.jpg')" }, 1300);
}


// Declaring the variables announcement to be used
const announcement = document.querySelector('#announcement');
let playerWinCount = 0;
let compWinCount = 0;

function fiveWins () {
  if (playerWinCount === 4) {
    setTimeout(() => {announcement.textContent = 'You won 5 matches!', 1300});
    win5();
    playerWinCount = 0;
    return true;

  } else if ( compWinCount === 4) {
    setTimeout(() => {announcement.textContent = 'You lost 5 matches!', 1300});
    lose5();
    compWinCount = 0;
    return true;

  }
  return false;
}



// Shows the result in the click event
function showResult (result) {

  if (result === true) {
    fight();
    win();
    if (fiveWins() === false) {
      setTimeout(() => {announcement.textContent = 'You win!'}, 1300);
      playerWinCount += 1;
    } else {
      return;
    }

  } else if (result === false) {
    fight();
    lose();
    if (fiveWins() === false) {
      setTimeout(() => {announcement.textContent = 'You lose!'}, 1300);
      compWinCount += 1;
    } else {
      return;
    }

    } else {
      fight();
      draw();
      setTimeout(() => {announcement.textContent = 'It\'s a draw!'}, 1300);
    }
} 


// Buttons that play the game on click
rock.addEventListener('click', () => { 
  announcement.textContent = ''
  showResult(playRound('rock', computerPlay()))
});

paper.addEventListener('click', () => {
  announcement.textContent = ''
  showResult(playRound('paper', computerPlay()))
});

scissors.addEventListener('click', () => {
  announcement.textContent = ''
  showResult(playRound('scissors', computerPlay()))
});
