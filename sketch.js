var gameState = 0;
var playerCount = 0;
var form,player,game;
var database;

function setup(){

createCanvas(1200,1200);

database= firebase.database();
game = new Game();
game.readState();
game.start();

}

function draw(){



}