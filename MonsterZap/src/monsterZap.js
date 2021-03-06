var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64,pn
  sourceHeight: 64,
  width: 64,
  height: 64,
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  visible: true,
  
  //Getters
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  },
};

//--- The monster object

monsterObject = Object.create(spriteObject);

//The monster's allow speed
monsterObject.speed = 1;
monsterObject.distanceCounter = 0;

//--- The main program

//The canvas
var canvas = document.querySelector("canvas"); 
var drawingSurface = canvas.getContext("2d");

//Object arrays
var sprites = [];
var assetsToLoad = [];
var assetsLoaded = 0;

//The background grid
var grid = Object.create(spriteObject);
grid.sourceY = 64;
grid.sourceWidth = 704;
grid.sourceHeight = 512;
grid.width = 704;
grid.height = 512;
sprites.push(grid);

//The monster
var monster = Object.create(monsterObject);

//Give it a position that's divisible by 64
//(it's width, or your game's maximum tile size)
monster.x = 320;
monster.y = 256;

//Set the monster's intial velocity
monster.vx = monster.speed;
monster.vy = 0;

//Make the monster choose a new random direction
sprites.push(monster);

//Load the tilesheet image
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "..\Assets\spriteMonster3.png";
assetsToLoad.push(image);

//Game states
var LOADING = 0;
var PLAYING = 1;
var gameState = LOADING;

update();

function update()
{ 
  //The animation loop
  requestAnimationFrame(update, canvas);
  
  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;
    
    case PLAYING:
      playGame();
      break;
  }
  
  //Render the game
  render();
}

function playGame()
{ 
  monster.x += monster.vx;
  monster.y += monster.vy;
  monster.distanceCounter += monster.speed;

  //Check whether the monster is at a grid cell corner
  if(Math.floor(monster.x) % 64 === 0
  && Math.floor(monster.y) % 64 === 0)
  { 
    //If it is at a corner, change its direction
    changeDirection(monster);
  }
  
  //Check the monster's screen boundaries
  if(monster.x < 0)
  {
    monster.x = 0;
    changeDirection(monster);
  }
  if(monster.y < 0)
  {
    monster.y = 0;
    changeDirection(monster);
  }
  if(monster.x + monster.width > canvas.width)
  {
    monster.x = canvas.width - monster.width;
    changeDirection(monster);
  }
  if(monster.y + monster.height > canvas.height)
  {
    monster.y = canvas.height - monster.height;
    changeDirection(monster);
  }
}

function changeDirection(monster)
{
  var UP = 1;
  var DOWN = 2;
  var LEFT = 3;
  var RIGHT = 4;
  
  var direction = Math.ceil(Math.random() * 7);
  
  if(direction < 5)
  {
    switch(direction)
    {
      case RIGHT:
        monster.vx = monster.speed;
        monster.vy = 0;
        break;
    
      case LEFT:
        monster.vx = -monster.speed;
        monster.vy = 0;
        break;
      
      case UP:
        monster.vx = 0;
        monster.vy = -monster.speed;
        break;
      
      case DOWN:
        monster.vx = 0;
        monster.vy = monster.speed;
    }
  }
}

function loadHandler()
{ 
  assetsLoaded++;
  if(assetsLoaded === assetsToLoad.length)
  {
    gameState = PLAYING;
  }
}

function render()
{ 
  drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
  
  //Display the sprites
  if(sprites.length !== 0)
  {
	  for(var i = 0; i < sprites.length; i++)
	  {
	    var sprite = sprites[i];
	    if(sprite.visible)
      {
        drawingSurface.drawImage
        (
          image, 
          sprite.sourceX, sprite.sourceY, 
          sprite.sourceWidth, sprite.sourceHeight,
          Math.floor(sprite.x), Math.floor(sprite.y), 
          sprite.width, sprite.height
		     ); 
      }
    }
  }
}