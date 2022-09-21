<template>
  <!-- 搜索组件 -->
  <div class="wrapper">
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      size="mini"
      label-width="auto"
    >
      <el-form-item label="姓名">
        <el-input v-model="formInline.staffName" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证">
        <el-input v-model="formInline.staffId" placeholder="身份证"></el-input>
      </el-form-item>
      <el-form-item label="岗位">
        <el-input v-model="formInline.staffJob" placeholder="岗位"></el-input>
      </el-form-item>
      <el-form-item label="籍贯">
        <el-input
          v-model="formInline.staffOrigin"
          placeholder="籍贯"
        ></el-input>
      </el-form-item>
      <el-form-item label="用工性质">
        <el-input
          v-model="formInline.staffCharacter"
          placeholder="用工性质"
        ></el-input>
      </el-form-item>
      <el-form-item label="毕业院校">
        <el-input
          v-model="formInline.staffSchool"
          placeholder="毕业院校"
        ></el-input>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-date-picker
          v-model="formInline.staffTime"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          unlink-panels
          width="300px"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="性别">
        <el-input
          v-model="formInline.staffGender"
          placeholder="性别"
        ></el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSearch" id="search" size="mini"
      >查询<i class="el-icon-search el-icon--right"></i
    ></el-button>
    <el-button type="primary" id="upload" size="mini"
      >上传<i class="el-icon-upload el-icon--right"></i
    ></el-button>
    <el-button type="primary" id="download" size="mini"
      >下载<i class="el-icon-download el-icon--right"></i
    ></el-button>
  </div>
</template>

<script>
  import {reqStraffInfo} from "../../../../api"
  export default {
    name: "MainSearch",
    data() {
      return {
        formInline: {
          staffName: "",
          staffId: "",
          staffJob: "",
          staffOrigin: "",
          staffCharacter: "",
          staffSchool: "",
          staffTime: "",
          staffGender: "",
        },
      };
    },
    methods: {
      /* 查询列表信息 */
      async onSearch() {
        let info = await reqStraffInfo(this.formInline);
      },
    },
  };
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
  .el-form {
    .el-input {
      width: 110px;
    }
  }
  #upload,
  #download,
  #search {
    height: 28px;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 300px;
  }
}
</style>