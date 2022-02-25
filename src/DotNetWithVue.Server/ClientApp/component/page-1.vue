<template>
	<el-row>
		<div>Hello From Page 1, ID: {{ username }}</div>
		<div>this.$store.state.count {{ total }}</div>
		<el-button type="primary" v-on:click="Commit">主要按钮</el-button>
	</el-row>
</template>

<script>
export default {
	computed: {
		username() {
			// 我们很快就会看到 `params` 是什么
			// 动态路由 :id
			return this.$route.params.id;
		},
		total() {
			return this.$store.state.count;
		},
	},
	methods: {
		Commit() {
			this.$store.commit("increment");
		},
	},
};
</script>
