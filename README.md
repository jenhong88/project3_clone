# Classic Arcade Game Clone Project

## Table of Contents

- [Instructions](#instructions)
- [Contributing](#contributing)

## Instructions

  ### How to Play 
  This is a frogger game built using HTML, HTML Canvas, CSS, and Object-Oriented Javascript.

  To play the game, you can simply go to the site and start playing as soon as the page is loaded. 
  The enemies, the giant bugs, are moving at randomly generated speeds. Your goal is to use the arrow keys to move the player across the     grid / canvas to the water. 

  If you collide with any of the enemies, your player will be bounced back to his/her original starting point. 

  Once you successfully get the player across to the water, the game will stop and a message will pop up giving you an option (button) to     start over. Clicking on the said button will reload the page and restart the game. 

  ### Understanding the Application
  I used a starter code provided by Udacity which included HTML, CSS, Engine.js, and Resources,js.
  The area I added my codes in is App.js to define how the player and the enemies should move and behave on the game board. 
  
  There are 2 main object prototypes: Enemies and Player. The constructor functions were used to set the initial positions of both objects
  and the update functions were used to define their movements based on actions (arrow keys) and/or time.
  
  You can find description of the codes in the comments. 

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.
