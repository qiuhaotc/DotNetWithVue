<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        :default-active="defaultOpen"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>Main</span>
          </template>
          <el-menu-item-group>
            <template slot="title">Menu Group</template>
            <el-menu-item
              v-for="item in routes"
              :key="item.path"
              :index="item.path"
            >
              {{ item.Name }}
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import Page1 from "../component/Page1";
import LearnVueStart from "../component/LearnVueStart";
import LearnStep2 from "../component/LearnStep2";
import LearnComponent from "../component/LearnComponent";
import CallApiPage from "../Pages/CallApi";
import VueRouter from "vue-router";

// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)
// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Home = { template: "<div>home</div>" };

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  // 动态路由 :id
  { path: "/", component: Home, Name: "Home" },
  { path: "/LearnVueStart", component: LearnVueStart, Name: "LearnVueStart" },
  { path: "/LearnStep2", component: LearnStep2, Name: "LearnStep2" },
  {
    path: "/LearnComponent",
    component: LearnComponent,
    Name: "LearnComponent",
  },
  { path: "/Page1/:id", component: Page1, Name: "Page1" },
  { path: "/CallApiPage", component: CallApiPage, Name: "Call Api Page" },
];

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes, // (缩写) 相当于 routes: routes
});

export default {
  router: router,
  data: function () {
    return {
      routes: routes,
      defaultOpen: this.$router.currentRoute.path,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
