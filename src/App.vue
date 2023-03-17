<template>
  <div id="app">
    <!-- <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row> -->

    <!-- <p>
      使用 router-link 组件来导航.
      通过传入 `to` 属性指定链接.
      <router-link> 默认会被渲染成一个 `<a>` 标签
      <router-link to="/home">Go to Home</router-link>
      <router-link to="/user">Go to User</router-link>
    </p> -->
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style lang="less">
  html, body, h1, p {
    margin: 0;
    padding: 0;
  }
</style>
