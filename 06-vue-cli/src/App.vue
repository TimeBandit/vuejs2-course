<template>
	<div>
		<h1>Hello {{msg}}</h1>
		<app-servers/>
	</div>
</template>

<script>
export default {
	name: "app",
	data() {
		return {
			msg: "welcome to the start of my day 🌠"
		};
	}
};
</script>

<style lang="scss" scoped>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

h1,
h2 {
	font-weight: normal;
}

ul {
	list-style-type: none;
	padding: 0;
}

li {
	display: inline-block;
	margin: 0 10px;
}

a {
	color: #42b983;
}
</style>
