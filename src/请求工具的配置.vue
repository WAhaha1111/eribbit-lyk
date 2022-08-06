<template>
  <div class="container">
    App
    <!-- 修改数据，测试是否持久化 -->
    <!-- {{ $store.state.user.profile.account }}
    <button @click="$store.commit('user/setUser', { account: '张三' })">
      设置用户信息
    </button> -->

    <!-- <button @click="fn">测试request工具函数</button> -->
  </div>
  <p>p</p>
</template>

<script>
// import request from "@/utils/request";
export default {
  name: 'App'
  // setup() {
  //   const fn = () => {
  //     //测试请求
  //     request("/member/profile", "get", { a: 10 });
  //   };
  //   return { fn };
  // },
}
</script>
