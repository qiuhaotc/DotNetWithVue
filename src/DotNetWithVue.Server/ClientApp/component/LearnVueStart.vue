<template>
  <div>
    <h5>绑定attribute</h5>
    <span :title="message"> 鼠标悬停几秒钟查看此处动态绑定的提示信息! </span>
    <h5>条件显示和事件</h5>
    <p v-if="seen" v-on:click="switchVisible">现在你看到我了,点击我就会消失</p>
    <h5>循环</h5>
    <ol>
      <li v-for="todo in todos" :key="todo.test">
        {{ todo.text }}
      </li>
    </ol>
    <h5>用户输入</h5>
    <p>{{ messageInput }}</p>
    <input v-model="messageInput" />
    <el-button v-on:click="reverseMessage" type="warning">反转消息</el-button>
    <h5>组件使用及传参</h5>
    <todo-item v-for="todo in todos" :key="todo.text" :todo="todo"></todo-item>
  </div>
</template>

<script>
import Vue from "vue";
// 定义名为 todo-item 的新组件
Vue.component("todo-item", {
  template: "<li>{{ todo.text }}</li>",
  props: ["todo"],
});

export default {
  computed: {
    username() {
      // 我们很快就会看到 `params` 是什么
      // 动态路由 :id
      return this.$route.params.id;
    },
  },
  data: function () {
    return {
      message: "页面加载于 " + new Date().toLocaleString(),
      messageInput: "Hello Vue.js!",
      seen: true,
      todos: [
        { text: "学习 JavaScript" },
        { text: "学习 Vue" },
        { text: "整个牛项目" },
      ],
    };
  },
  methods: {
    async switchVisible() {
      this.seen = !this.seen;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.seen = !this.seen;
    },
    reverseMessage: function () {
      this.messageInput = this.messageInput.split("").reverse().join("");
    },
  },
};
</script>
