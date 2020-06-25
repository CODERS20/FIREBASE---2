class Game{

constructor(){



}

readState(){

      var gameRefer = database.ref('gameState');
        gameRefer.on("value",function(data){
        gameState = data.val();
     })
     }

updateState(state){

      var stateRefer = database.ref('/');
          stateRefer.update({

            gameState: state

          })

} 

start(){

      if(gameState === 0){

         player = new Player();
         player.readCount();
         form = new Form();
         form.display();

      }

}

}