<template>
	<el-container>
		<el-header>
			<Header></Header>
		</el-header>
		<el-container>
			<el-aside>
				<Navi></Navi>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
		<el-footer>
			<Footer></Footer>
		</el-footer>
	</el-container>
</template>

<script>
import Header from "./component/header-bar.vue";
import Navi from "./component/navi-bar.vue";
import Footer from "./component/footer-bar.vue";
import "./css/main.css";
import MyClass from "./scripts/demo";

var aaa = new MyClass();
aaa.SayHi();

export default {
	name: "App",
	data: function () {
		return {};
	},
	methods: {},
	components: {
		Header,
		Navi,
		Footer,
	},
};
</script>