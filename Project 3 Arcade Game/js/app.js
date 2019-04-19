// Enemies our player must avoid
const Enemy = function(speed, x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = (-1) * (Math.floor (Math.random() * 700) + 100);
    this.y = y;
    this.speed = Math.round((Math.random() * 400) + 50);
}


let allEnemies = [];
for (i=0; i < 6; i++) {
  let enemyObj = new Enemy();
  allEnemies.push(enemyObj) ;
}

for (i=0; i < allEnemies.length; i++){
  if (i < 2) {
    allEnemies[i].y = 55;
  }
  else if (i < 4 && i > 1) {
      allEnemies[i].y = 145 ;
    }
    else {
      allEnemies[i].y = 225;
    }
  }


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  ctx.beginPath();
  this.x +=  (dt * this.speed) + (Math.round(Math.random() * 1.2));
  ctx.save();
  ctx.closePath();
  if (this.x >= 1500) {
    this.x = (-1) * (Math.floor (Math.random() * 300) + 100);
  }
}

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // if (this.x == player.x && this.y == player.y) {
    //   player.x = 101*3;
    //   player.y =41.5*9;}
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

const Player = function(x, y) {

    this.sprite = 'images/char-boy.png';
    this.x = 101*2;
    this.y = 41.5*9;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

Player.prototype.update = function () {
allEnemies.forEach (function(enemy) {
  if (enemy.x >= (player.x -(101/2)) && enemy.x < player.x &&  enemy.y - 40 < player.y && enemy.y > player.y && player.y > 40) {
    player.x =  101*2;
    player.y = 41.5*9;
  }
});
}



//NEED TO - make sure the player can't move when the enemies are driving by

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

const player = new Player ();


Player.prototype.handleInput = function() {

let key = event.key || event.keyCode;

  if (key === 37 || key === 'ArrowLeft' && this.x > 0) {
    this.x -= 101;
  }

  else if (key === 38 || key === 'ArrowUp' && this.y > 0) {
    this.y -= 83;
  }

  else if (key === 39 || key === 'ArrowRight' && this.x < 101*4) {
    this.x += 101;
  }

  else if (key === 40 || key === 'ArrowDown' && this.y < 41.5*9) {
    this.y +=83;
  }
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

// Message that pops up when the player is on the water / has won the game
function ending () {
let winMessage = document.createElement('div');
  winMessage.className = 'game-over';
  winMessage.innerHTML =
  `<h3>  Congratulations!<br>
You got to the water safely! </h3>
<br>
<br>
<div>
Do you want to play again?
<button id="new-game">Play Again</i></button>
</div>`;
// give the player option to play again
document.body.appendChild(winMessage);
}
//
