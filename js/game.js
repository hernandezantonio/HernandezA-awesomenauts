
/* Game namespace */
var game = {

	// an object where to store game information
	data : {
		// calls  for everything from the mount of health at a base to 
                //the abilities each player has and  the  amount of exp they have
		score : 0,
                enemyBaseHealth: 10, 
                playerBaseHealth: 10,
                enemyCreepHealth: 10,
                playerHealth: 10,
                enemyCreepAttack: 1,
                playerAttack: 1,
                playerAttackTimer: 1000,
                enemyCreepAttackTimer: 1000,
                playerMoveSpeed: 5,
                creepMoveSpeed: 5,
                gameTimerManager: "",
                heroDeathManager:"",
                player:"",
                exp: 0,
                gold: 0,
                ability1: 0,
                ability2: 0,
                ability3: 0,
                skill1: 0,
                skill2: 0,
                skill3: 0,
                exp1: 0,
                exp2: 0,
                exp3: 0,
                exp4: 0,
                win:"",
                pausePos: "",
                buytext: ""
                
                
                
	},
	
	
	// Run on page load.
	"onload" : function () {
	// Initialize the video.
	if (!me.video.init("screen",  me.video.CANVAS, 1067, 600, true, '1.0')) {
		alert("Your browser does not support HTML5 canvas.");
		return;
	}

	// add "#debug" to the URL to enable the debug Panel
	if (document.location.hash === "#debug") {
		window.onReady(function () {
			me.plugin.register.defer(this, debugPanel, "debug");
		});
	}
       
        
        me.state.SPENDEXP = 112; 
          me.state.LOAD = 113; 
          me.state.NEW = 114; 
	// Initialize the audio.
	me.audio.init("mp3,ogg");

	// Set a callback to run when loading is complete.
	me.loader.onload = this.loaded.bind(this);

	// Load the resources.
	me.loader.preload(game.resources);

	// Initialize melonJS and display a loading screen.
	me.state.change(me.state.LOADING);
},

	// Run on game resources loaded.
	"loaded" : function () {
                me.pool.register("player", game.PlayerEntity, true); 
                me.pool.register("PlayerBase", game.PlayerBaseEntity);
                me.pool.register("EnemyBase", game.EnemyBaseEntity);
                me.pool.register("EnemyCreep", game.EnemyCreep,  true); 
                me.pool.register("GameTimerManager", game.GameTimerManager);
                me.pool.register("HeroDeathManager", game.HeroDeathManager); 
                me.pool.register("ExperienceManager", game.ExperienceManager); 
                me.pool.register("SpendGold", game.SpendGold);
                //all the screens that are in my game
		me.state.set(me.state.MENU, new game.TitleScreen());
		me.state.set(me.state.PLAY, new game.PlayScreen());
                me.state.set(me.state.SPENDEXP, new game.SpendExp());
                me.state.set(me.state.LOAD, new game.LoadProfile());
                me.state.set(me.state.NEW, new game.NewProfile());
                
		// makes the game start in the menu screen 
		me.state.change(me.state.MENU
                        );
	}
};
