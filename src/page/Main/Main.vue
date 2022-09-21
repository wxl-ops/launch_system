<template>
  <!-- 主要内容，列表等 -->
  <div>
    <!-- 搜索组件 -->
    <!-- <MainSearch /> -->
    <!-- 列表展示区 -->
    <router-view></router-view>
    <!-- 分页组件 -->
    <!-- <Footer/> -->
   
    
    <!-- 编辑列表组件 -->
    <!-- <EditerInfo /> -->
  </div>
</template>

<script>
// import MainSearch from "./MainSearch/MainSearch.vue";
// import Footer from "./Footer/Footer.vue";

export default {
  name: "Main",
  components: {
    // MainSearch,
    // Footer,
  },
};
</script>

<style>
</style>