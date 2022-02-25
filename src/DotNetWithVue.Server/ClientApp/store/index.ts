import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

// 创建一个新的 store 实例
const store = new Vuex.Store({
	state: {
		count: 0,
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
});

export default store;
