console.log("running......");

const vm = new Vue({
	el: "#app",
	data: {
		gameStarted: false,
		playerScore: 100,
		monsterScore: 100,
		logs: [],
		modal:{
			display: 'none',
			winner:'',
			imgHref: ''
		}
	},
	methods: {
		startGame: function() {
			// clear the list of actions
			// reset the scores
		},
		attack: function(e, playerHit = 10, monsterHit = 10) {
			let hit;

			// monster attacks you
			hit = this.hitPower(monsterHit);
			const newPlayerScore = this.playerScore - hit;
			newPlayerScore <= 0 ? (this.playerScore = 0) : (this.playerScore -= hit);
			// this.playerScore -= hit;
			this.logs.push({
				isPlayer: true,
				message: `monster hits player for ${hit}`
			});

			// you attack monster
			hit = this.hitPower(playerHit);
			const newMonsterScore = this.monsterScore - hit;
			newMonsterScore <= 0 ? (this.monsterScore = 0) : (this.monsterScore -= hit);
			// this.monsterScore -= hit;
			this.logs.push({
				isPlayer: false,
				message: `player hits monster for ${hit}`
			});
		},
		specialAttack: function() {
			this.attack(null, 20, 10);
		},
		heal: function(e, playerHit = 10, monsterHit = 10) {
			// TODO this is a special case of attack, can be refactored

			const newPlayerScore = this.playerScore + 10;
			// score cant be greater than 100;
			if (newPlayerScore >= 100) {
				this.playerScore = 100;
			} else {
				// heal by 10
				this.playerScore += 10;
			}
			this.logs.push({
				isPlayer: true,
				message: `player heals himself for 10`
			});

			// monster attacks you
			hit = this.hitPower(monsterHit);
			this.playerScore -= hit;
			this.logs.push({
				isPlayer: false,
				message: `monster hits player for ${hit}`
			});
		},
		hitPower: function(max = 100) {
			return Math.ceil(Math.random() * max);
		},
		resetGame: function() {
			this.gameStarted = false;
			this.playerScore = this.monsterScore = 100;
			this.logs.length = 0;
		}
	},
	watch: {
		playerScore: function(val) {
			if (val === 0) {
				setTimeout(()=>{
					// window.alert("Monster Won 👾");
					this.resetGame();
					// set the player name
					this.modal.winner='Monster'
					// set the imgurl
					this.modal.imgHref='/public/img/monster.jpeg'
					// display the modal
					this.modal.display='block'
				},700)

			}
		},
		monsterScore: function(val) {
			if (val === 0) {
				setTimeout(()=>{
					// window.alert("Player Won 🏃");
					this.resetGame();
					// set the player name
					this.modal.winner='Player'
					// set the imgurl
					this.modal.imgHref='/public/img/player.jpeg'
					// display the modal
					this.modal.display='block'
				},700)
			}
		}
	},
	computed: {}
});
