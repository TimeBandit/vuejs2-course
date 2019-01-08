new Vue({
	el: "#exercise",
	data: {
		value: 0
	},
	computed: {
		result() {
			return this.value === 37 ? "DONE" : "not there yet";
		}
	},
	//  most useful when you want to perform asynchronous or
	//  expensive operations in response to changing data.
	//  the watch option allows us to perform an asynchronous
	//  operation (accessing an API), limit how often we
	//  perform that operation, and set intermediary states
	//  until we get a final answer. None of that would be
	//  possible with a computed property.
	watch: {
		value: function() {
			const self = this;
			setTimeout(() => {
				self.value = 0;
			}, 5000);
		}
	}
});
