<template>
	<el-row>
		<h1>Total Clicks: {{ startNumber }}</h1>
		<button-counter
			v-model="startNumber"
			@buttonclick="clickbutton"
		></button-counter>
		<button-counter
			v-model="startNumber"
			@buttonclick="clickbutton"
		></button-counter>
		<button value="123" @click="startNumber = 0">To Zero</button>
		<el-row>
			<el-button @click="startNumber++">默认按钮</el-button>
			<el-button type="primary">主要按钮</el-button>
			<el-button type="success">成功按钮</el-button>
			<el-button type="info">信息按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
			<i class="el-icon-edit"></i>
			<i class="el-icon-share"></i>
			<i class="el-icon-delete"></i>
			<el-button type="primary" icon="el-icon-search">搜索</el-button>
		</el-row>
	</el-row>
</template>

<script>
export default {
	data() {
		return {
			startNumber: 0,
		};
	},
	methods: {
		clickbutton(params) {
			this.startNumber += params;
			console.log("startNumber: " + this.startNumber);
		},
	},
};
</script>
