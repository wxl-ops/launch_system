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
      <el-form-item label="员工编号">
        <el-input v-model="formInline.empStaNum  " placeholder="员工编号"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="formInline.empName " placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item label="岗位">
        <el-input v-model="formInline.empJob " placeholder="岗位"></el-input>
      </el-form-item>
      <el-form-item label="用工性质">
        <el-input
          v-model="formInline.empType"
          placeholder="用工性质"
        ></el-input>
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input
          v-model="formInline.empIdCardNo "
          placeholder="身份证号"
        ></el-input>
      </el-form-item>
      <el-form-item label="户口所在地">
        <el-input
          v-model="formInline.empFamiAddress "
          placeholder="户口所在地"
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
    </el-form>
    <el-button type="primary" @click="onSearch" id="search" size="mini"
      >查询<i class="el-icon-search el-icon--right"></i
    ></el-button>
    <el-upload
      class="upload-demo"
      action=""
      accept=".xlsx"
      :on-success="handleExalSuccess"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传Excel文件，且不超过500kb</div>
    </el-upload>
    <el-button
      type="primary"
      id="downloadAll"
      class="download"
      size="mini"
      @click="downloadAllOnBoarding"
      >下载全部<i class="el-icon-download el-icon--right"></i
    ></el-button>
    <el-button
      type="primary"
      id="downloadTarget"
      size="mini"
      class="download"
      @click="downloadTargetOnBoarding"
      >下载当前页<i class="el-icon-download el-icon--right"></i
    ></el-button>
    <el-button
      type="primary"
      id="downloadTime"
      size="mini"
      class="download"
      @click="downloadTimeOnBoarding"
      >下载某年某月<i class="el-icon-download el-icon--right"></i
    ></el-button>
    <el-date-picker
          v-model="downTime"
          size="mini"
          type="month"
          placeholder="请选择月份"
        >
    </el-date-picker>
  </div>
</template>

<script>
import { reqSearchOnBoarding, reqDownloadAllOnBoarding,reqDownloadTargetOnBoarding ,reqDownloadTimeOnBoarding, reqUploadOnBoarding } from "../../../../api";
export default {
  name: "MainSearch",
  props:['targetPage'],
  data() {
    return {
      formInline: {
        empStaNum:"",
        empName : "",
        empJob : "",
        empType: "",
        empIdCardNo:"",
        empFamiAddress:"",
        staffTime: "",
        leaveTime: "",
      },
      downTime:""
    };
  },
  methods: {
    /* 上传方法 */
    async handleExalSuccess(res,file) {
      console.log(res,file);
      let formData = new FormData();
      formData.append("file",file);
      let result = await reqUploadOnBoarding(formData)
    },
    /* 查询列表信息 */
    async onSearch() {
      let info = await reqSearchOnBoarding(this.formInline);
      this.$nextTick(() => {
        this.$emit("onSearch", info);
      });
    },
    /* 下载全部 */
    async downloadAllOnBoarding() {
      let download = await reqDownloadAllOnBoarding();
    },
    /* 下载当前页 */
    async downloadTargetOnBoarding() {
      let download = await reqDownloadTargetOnBoarding(this.targetPage)
    },
    /* 下载当前日期内的表 */
    async downloadTimeOnBoarding() {
      let download = await reqDownloadTimeOnBoarding(this.downTime)
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
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
  .download,
  #search {
    height: 28px;
  }
  .el-date-editor--daterange.el-input__inner {
    width: 300px;
  }
  .el-date-editor.el-input {
    height: 28px;
    width: 150px;
  }
}
</style>