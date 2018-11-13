console.log("running...");

const vm = new Vue({
	el: "#app",
	data: {
		gameStarted: false,
		youScore: 100,
		monsterScore: 100,
		history: []
	},
	methods: {
		giveUp: function() {
			this.gameStarted = false;
		},
		startGame: function() {
			// clear the list of actions
			// reset the scores
		},
		attack: function() {
			console.log("attacking");
			let hit;
			// monster attacks you
			hit = this.hitPower(10);
			this.youScore -= hit;
			this.history.push(`monster hits player for ${hit}`);
			// you attack monster
			hit = this.hitPower(10);
			this.monsterScore -= hit;
			this.history.push(`player hits monster for ${hit}`);
		},
		specialAttack: function() {
			console.log("special attack");
		},
		heal: function() {
			console.log("healing");
		},
		hitPower: function(max = 100) {
			return Math.ceil(Math.random(10) * 10);
		}
	},
	computed: {}
});
