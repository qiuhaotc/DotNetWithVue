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
import Grid from "./component/Grid.vue";
import Buttons from "./component/Buttons.vue";
import Header from "./component/Header.vue";
import Navi from "./component/Navi.vue";
import Footer from "./component/Footer.vue";
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
    Grid,
    Buttons,
    Header,
    Navi,
    Footer,
  },
};
</script>