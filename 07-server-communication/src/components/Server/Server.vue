<template>
  <div class="server" @click="selected">
    <div class="server__title">
      Server
    </div>
    <div class="server__number">
      {{server.id}}
    </div>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
export default {
	props: ["appServer"],
	data: function() {
		return {
			server: this.appServer
		};
	},
	methods: {
		selected: function() {
			console.log("clicked");
			eventBus.$emit("serverSelected", this.server);
		}
	}
};
</script>

<style scoped>
.server {
	display: flex;
	justify-content: space-between;
}
.server-number {
	color: aliceblue;
}
</style>
