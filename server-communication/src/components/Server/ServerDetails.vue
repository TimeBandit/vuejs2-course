<template>
    <div class="col-xs-12 col-sm-6">
        <div v-if="server">
            {{server.id}}
            {{server.status}}
        </div>
        <p v-else>Server Details are currently not updated</p>
        <hr>
        <button @click="resetStatus">Change to Normal</button>
    </div>

</template>

<script>
import { eventBus } from "../../main.js";
export default {
	data: function() {
		return {
			server: null
		};
	},
	created() {
		eventBus.$on("serverSelected", arg => {
			this.server = arg;
		});
	},
	methods: {
		resetStatus() {
			this.server.status = "Normal";
		}
	}
};
</script>

<style>
</style>
