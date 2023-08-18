<template>
	<div class="form-floating mt-3">
		<textarea
        :type="type"
			class="form-control mb-3"
			:id="label"
			:placeholder="label"
			@input="inputHandler"
			:value="modelValue">
        </textarea>
		<label :for="label">{{ label }}</label>
	</div>
</template>

<script>
export default {
	name: 'Textare',
	props: {
		label: String,
		type: String,
		modelValue: [String, Number],
	},
	methods: {
		inputHandler(e) {
			this.$emit('update:modelValue', e.target.value)
		},
	},
}
</script>

<style></style>