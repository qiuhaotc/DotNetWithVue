<template>
	<div>
		<h5>动态参数</h5>
		<a v-on:[eventName]="doSomething"> Click </a>
		<h5>侦听属性(watch)</h5>
		<input type="text" v-model="firstName" />
		<input type="text" v-model="lastName" />
		<p>{{ fullName }}</p>
		<h5>绑定 HTML Class</h5>
		<div v-bind:class="{ active: isActive }">123</div>
		<h5>绑定内联样式</h5>
		<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">
			内联样式展示
		</div>
		<div v-bind:style="styleObject">内联样式展示</div>
		<ul>
			<template v-for="item in items">
				<li :key="123 + item.key">{{ item.msg }}</li>
				<li
					:key="456 + item.key"
					class="divider"
					role="presentation"
				></li>
			</template>
		</ul>
		<h5>数据绑定</h5>
		<select v-model="selected">
			<option
				v-for="option in options"
				v-bind:value="option.value"
				:key="option.value"
			>
				{{ option.text }}
			</option>
		</select>
		<span>Selected: {{ selected }}</span>
		<h5>lazy绑定</h5>
		<input v-model.lazy="fontSize" />
		<h5>number</h5>
		<input v-model.number="fontSize" type="number" />
	</div>
</template>

<script>
export default {
	computed: {},
	data: function () {
		return {
			eventName: "click",
			firstName: "Foo",
			lastName: "Bar",
			fullName: "Foo Bar",
			isActive: true,
			activeColor: "#0094ff",
			fontSize: 13,
			styleObject: {
				color: "red",
				fontSize: "13px",
			},
			items: [
				{ key: 1, msg: "Wohaha1" },
				{ key: 2, msg: "Wohaha2" },
				{ key: 3, msg: "Wohaha3" },
			],
			selected: "A",
			options: [
				{ text: "One", value: "A" },
				{ text: "Two", value: "B" },
				{ text: "Three", value: "C" },
			],
		};
	},
	methods: {
		doSomething() {
			alert("123");
		},
	},
	watch: {
		firstName: function (val) {
			this.fullName = val + " " + this.lastName;
		},
		lastName: function (val) {
			this.fullName = this.firstName + " " + val;
		},
	},
};
</script>
