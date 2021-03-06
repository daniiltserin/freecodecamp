var canvas = document.getElementById("canvas");
canvas.width = 600;
canvas.height = 480;

var ctx = canvas.getContext("2d");

//field background
let fieldRows = 3;
let fieldColumns = 3;

//needed sizes
//cell is quadrat. we need only 1 value
let cellXY = 128;
let cellsOffsetLeft = 20;
let cellsOffsetTop = 20;

//some utility functions
//clear canvas
let clear = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//event listeners
let menuClickListener = (e) => {
  let x = 0;
  let y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);

  //if button "play" is clicked render new game settings
  if (x > 75 && x < 275 && y > 75 && y < 150) {
    document.removeEventListener("click", menuClickListener);
    pointChooser();
  }
};
let settingsClickListener = (e) => {
  let x = 0;
  let y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  console.log("Clicked on: " + x + ", " + y);

  //if escape arrow
  if (x > 15 && x < 115 && y > 24 && y < 75) {
    initMainMenu();
  }

};
let gameFieldListener = (e) => {
  let x = 0;
  let y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);
};
let pointChooseClickListener = (e) => {
  let x = 0;
  let y = 0;

  //grab html page coords
  if (e.pageX !== undefined && e.pageY !== undefined) {
    x = e.pageX;
    y = e.pageY;
  } else {
    x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
  }

  //make it relative to canvas only
  x -= canvas.offsetLeft;
  y -= canvas.offsetTop;

  //log clicked cell
  console.log("Clicked on: " + x + ", " + y);
  if (x > 0 && x < canvas.width / 2 -15 ) {
    document.removeEventListener("click", pointChooseClickListener);
    initGameFileld();
  } else {
    document.removeEventListener("click", pointChooseClickListener);
    initGameFileld(3, 3, "o");
  }
};


//game functions
let initGameFileld = (rows = 3, columns = 3, playerFigure = "x") => {
  clear();
  document.removeEventListener("click", gameFieldListener, false);

  //init some graphics
  let cellBackground = new Image();
  cellBackground.src = "images/drawing.svg";
  let drawField = () => {
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        var fieldX = i * cellXY + cellsOffsetLeft;
        var fieldY = j * cellXY + cellsOffsetTop;
        ctx.drawImage(cellBackground, fieldX, fieldY, cellXY, cellXY);
      }
    }
  };

  cellBackground.onload = () => {
    drawField();
  };


};

let pointChooser = () => {
  clear();
  document.addEventListener("click", pointChooseClickListener, false);
  
  //draw separator line
  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineWidth = 30;
  ctx.strokeStyle = "0059dd";
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  // draw a `x` chooser
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width / 2 - 15, canvas.height);
  ctx.fillStyle = "#6176BB";
  ctx.fill();
  ctx.closePath();

  let xImage = new Image();
  xImage.src = "images/x.svg";
  xImage.onload = () => {
    ctx.drawImage(xImage, 53, 107, 150, 150);
  };

  //draw a `o` chooser
  ctx.beginPath();
  ctx.rect(canvas.width / 2 + 15, 0, canvas.width / 2 - 15, canvas.height);
  ctx.fillStyle = "#242424";
  ctx.fill();
  ctx.closePath();

  let oImage = new Image();
  oImage.src = "images/0.svg";
  oImage.onload = () => {
    ctx.drawImage(oImage, 380, 110, 150, 135);
  };
};
let initMainMenu = () => {
  console.log('MainMenu');
  document.addEventListener("click", menuClickListener, false);
  clear();
  ctx.font = "24px source code pro bold";
  ctx.fillStyle = "#0095dd";
  ctx.fillText("TIC TAC TOE \n", 120, 40);

  //draw play button
  ctx.beginPath();
  ctx.strokeStyle = "#0095dd";
  ctx.rect(75, 75, 200, 75);
  ctx.stroke();
  ctx.closePath();

  //draw play text
  ctx.font = "32px helvetica";
  ctx.fillStyle = "#000";
  ctx.fillText("Play", 150, 120);
};

//main game
let letsPlay = () => {
  initMainMenu();
};

letsPlay();