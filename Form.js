class Form{

     constructor(){



     }

     display() {
     
     var title = createElement('h2');
         title.html("PLAYER DETAILS");
         title.position(130,0);

     var inputBox = createInput("Type your name here");
         inputBox.position(130,160);

     var playButton = createButton("CLICK HERE TO START");
         playButton.position(250,200);

     var greeting = createElement('h3');

         playButton.mousePressed(function(){

         inputBox.hide();
         playButton.hide();
         
             var NAME = inputBox.value();
             playerCount = playerCount + 1;
             player.updateName(NAME);
             player.updateCount(playerCount);
             greeting.html("WELCOME PLAYER" + NAME)
             greeting.position(130,160);

         })

     }

}