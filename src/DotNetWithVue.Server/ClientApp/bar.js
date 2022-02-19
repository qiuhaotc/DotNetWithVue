import Vue from "vue";

Vue.component("button-counter", {
	props: {
		value: Number,
	},
	data: function () {
		return {};
	},
	methods: {
		changeData() {
			this.$emit("buttonclick", 1);
			console.log("changeData called");
		},
	},
	template:
		'<button @click="changeData">You clicked me {{ value }} times.</button>',
});
