<template>
	<div class="row">
		<!-- click.native allows you to monitor clicks on the component -->
		<app-quote
			v-for="(quote, index) in allQuotes"
			:key="index"
			@click.native="deleteQuote(index)"
		>{{ quote }}</app-quote>
	</div>
</template>

<script>
	import Quote from "./Quote.vue";
	export default {
		props: ["quotes"],
		components: {
			appQuote: Quote
		},
		data: function() {
			return {
				allQuotes: this.quotes
			};
		},
		methods: {
			deleteQuote(index) {
				this.$emit("quoteDeleted", index);
			}
		}
	};
</script>

<style>
</style>