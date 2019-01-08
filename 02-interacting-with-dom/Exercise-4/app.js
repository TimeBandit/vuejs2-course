console.log("Yellow... 👋");

const vm = new Vue({
	el: "#exercise",
	data: {
		start: false,
		timer: null,
		flip: false
	},
	watch: {
		// *1 using a watch
		start: function(val) {
			console.log("start changed to ", val);
			const self = this;
			if (val) {
				this.timer = setInterval(() => {
					console.log("starting interval");
					self.flip = !self.flip;
				}, 1500);
			} else {
				console.log("stoping interval");
				clearInterval(this.timer);
			}
		}
	},
	computed: {
		// same as *1 but using a computed property
		// looks like a watch is the best way in this scenario
		// timer2: function() {
		// 	const self = this;
		// 	if (this.start) {
		// 		return setInterval(() => {
		// 			console.log("interval");
		// 			self.flip = !self.flip;
		// 		}, 1500);
		// 	} else {
		// 		console.log(this.timer2);
		// 		if (this.timer2) clearInterval(this.timer2);
		// 		return null;
		// 	}
		// }
	}
});

console.log(vm);
