<template>
  <!-- 主页 -->
    <el-container style="height:100%;" >
      <el-header>
        <img src="./assets/img/header.png" alt="">
        <h2>朗驰科技内部管理平台</h2>
        <el-button type="text" style="font-size:16px; color:#fff;" @click="isShow=!isShow">{{isLogin ? userInfo.username : '登录' }}</el-button>
      </el-header>
      <el-container>
        <el-aside width="200px"  style="height:877px;">
          <!-- 侧边菜单栏 -->
          <Menu></Menu>
        </el-aside>
        <el-container style="height:100%;" >
          <el-main>
            <!-- 内容展示区 -->
            <router-view></router-view>
             <!-- 登录组件 -->
            <Login :isShow.sync="isShow"  @loginFun = "loginFun"/>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
 
</template>

<script>
import Menu from './components/Menu/Menu.vue';
import Login from './components/Login/Login.vue';
export default {
  name: 'App',
  components:{
    Menu,
    Login
  },
  data () {
    return {
      isLogin:false,
      isShow:false,
      userInfo:{}
    }
  },
  methods: {
    loginFun({code,data}) {
      if(code == 200){
        this.isLogin = true;
        this.userInfo = data;
      }
    }
  }
}
</script>

<style>
  .el-header{
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  img {
    width: 42px;
  }
  .el-footer {
    display: flex;
      align-items: center;
      justify-content: center;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
  }
  .el-header h2 {
    width: 50%;
    font-size: 22px;
    font-weight: bolder;
    letter-spacing: 30px;
  }
  .el-aside {
    background-color: #fff;
    color: #fff;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    overflow: hidden;
    min-width:1221px;
    max-width:1920px;
    margin: 0 auto;
  }
</style>
