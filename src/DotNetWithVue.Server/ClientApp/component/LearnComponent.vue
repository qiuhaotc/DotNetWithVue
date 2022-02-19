<template>
	<div>
		{{ clicktime }}
		<button-counter
			:value="clicktime"
			v-on:buttonclick="buttonclick(1)"
		></button-counter>
		<h5>通过 Prop 向子组件传递数据</h5>
		<blog-post
			v-for="post in posts"
			v-bind:key="post.id"
			v-bind:title="post.title"
		></blog-post>
		<DemoComponent>
			<p>Slot: Content from parent, 作用域当前组件: {{ title }}</p>
		</DemoComponent>
		<h5>
			使用v-model绑定到子控件: {{ inputInfo }} <br />
			v-bind:title.sync: {{ title }}
		</h5>
		<SubComponent
			v-model="inputInfo"
			v-bind:title.sync="title"
		></SubComponent>
	</div>
</template>

<script>
import Vue from "vue";
import SubComponent from "./SubComponent.vue";

Vue.component("blog-post", {
	props: ["title"],
	template: "<h3>{{ title }}</h3>",
});

Vue.component("DemoComponent", {
	template: `
    <div class="demo-alert-box">
      <strong>Error!</strong>
      <slot></slot>
    </div>
  `,
});

export default {
	data: function () {
		return {
			datas: "123",
			inputInfo: {
				A: "123",
				B: "456",
			},
			title: "测试sync",
			clicktime: 0,
			posts: [
				{ id: 1, title: "My journey with Vue" },
				{ id: 2, title: "Blogging with Vue" },
				{ id: 3, title: "Why Vue is so fun" },
			],
		};
	},
	methods: {
		buttonclick(val) {
			this.clicktime += val;
			console.log("click");
		},
	},
	components: { SubComponent },
};
</script>