<template>
	<div class="row">
		<form action>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<label for="newQuote">Quote</label>
				<textarea name="newQuote" id="newQuote" cols="30" rows="3" v-model="quote"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<!-- prevent modifier user to prevent the form being submitted -->
				<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				quote: ""
			};
		},
		methods: {
			createNew() {
				this.$emit("quoteAdded", this.quote);
				this.quote = "";
			}
		}
	};
</script>

<style>
</style>