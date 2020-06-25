class Player{

      constructor(){

       

      }

      readCount(){
  
        var readC = database.ref('playerCount');
        readC.on("value",function(data){
  
            playerCount = data.val();

        })

      }

      updateCount(count){

       var readP = database.ref('/');
           readP.update({

           playerCount: count

           })

      }

      updateName(name){

      var playerIndex = "Player" + playerCount;
      var playerRef = database.ref(playerIndex);
            playerRef.set({

              playerName: name

            })
            }

}