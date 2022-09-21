<template>
  <!-- 登陆组件 -->
  <el-dialog title="登录" :visible.sync="isShow" width="20%" center class="login" :close-on-click-modal="false" :show-close="false">
    <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.psd" show-password></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="$emit('update:isShow',false)">取 消</el-button>
        <el-button type="primary" @click="toLogin">登 录</el-button>
    </div>
  </el-dialog>
</template>

<script>
  import {reqUserInfo} from '../../api/index.js'
  export default {
    name:"Login",
    props:['isShow'],
    data() {
      return {
        form: {
          name: '',
          psd:'',
        },
        formLabelWidth: '120px',
        // dialogFormVisible:false
        userInfo:{}
      };
    },
    watch:{
      userInfo:{
        handler(val) {
          this.$emit('loginFun',val)
        }
      }
    },
    methods: {
      async toLogin() {
        if(this.form.name == 'admin' && this.form.psd =='admin'){
          this.$emit('update:isShow',false);
          this.userInfo = await reqUserInfo();
        } 
      }
    }
  }
</script>

<style lang="less">
  .login {
    .el-form-item__content {
      margin-left: 40px !important;
    }
    .el-form-item__label {
      width: 40px !important;
    }
    .el-dialog--center .el-dialog__body {
      padding-bottom: 0;
    }
    .el-dialog {
      min-width: 300px;
    }
  }
  
</style>