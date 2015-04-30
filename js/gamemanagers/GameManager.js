

game.ExperienceManager = Object.extend({
    init: function(x, y, settings) {
        this.alwyasUpdate = true;
        this.gameover = false;
    },
    update: function() {
        if (game.data.win === true && !this.gameover) {
            this.gameOver(true);
        } else if (game.data.win === false && !this.gameover) {
            this.gameOver(false);
        }

        return true;

    },
    gameOver: function(win) {
        if (win) {
            game.data.exp += 10;
        } else {
            game.data.exp += 1;
        }
        console.log(game.data.exp);
        this.gameover = true;
        me.save.exp = game.data.exp;
        me.save.exp2 = 4;
        
     
                    $.ajax({
                       type: "POST",
                       url: "php/controller/save-user.php",
                       data:{
                          exp: game.data.exp,
                           exp1: game.data.exp1,
                           exp2: game.data.exp2,
                           exp3: game.data.exp3,
                           exp4: game.data.exp4,
                       },
                       dataType: "type"
                   })
                  .success(function(response){
                   if(response==="true"){
                       me.state.change(me.state.PLAY);
                   }else{
                       alert(response);
                   }
                           
                   })
                        .fail(function(response){
                            alert("Fail");
                        });
                              
    }

});
