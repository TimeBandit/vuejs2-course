new Vue({
	el: "#exercise",
	data: {
		value: ""
	},
	methods: {
		// these methods could all have been inline, seperate methods were not needed
		clicked: function(e) {
			alert("clicked");
		}
	}
});
