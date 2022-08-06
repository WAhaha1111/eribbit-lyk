<template>
  <!-- 顶部通栏 -->
  <AppNavbar />
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 吸顶头部组件 -->
  <AppHeaderSticky />
  <!-- 内容容器 -->
  <main class="app-body">
    <router-view></router-view>
  </main>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import AppNavbar from "../components/app-navbar";
import AppHeader from "../components/app-header";
import AppHeaderSticky from "../components/app-header-sticky";
import AppFooter from "../components/app-footer";
import { useStore } from "vuex";
export default {
  name: "Layout",
  components: {
    AppNavbar,
    AppHeader,
    AppHeaderSticky,
    AppFooter,
  },
  // 获取下分类数据
  setup() {
    const store = useStore();
    store.dispatch("category/getList");
  },
};
</script>

<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
