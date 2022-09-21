<template>
  <div class="wrapper">
    <MainSearch/>
    <el-table
    :data="tableData"
    style="width: 100%"
    max-height="710px"
    :header-cell-style="headStyle"
    :cell-style="rowStyle"
    show-overflow-tooltip="true"
  >
    <el-table-column type="index" label="序号" prop="index" :index="indexMethod" width="50">
    </el-table-column>
    <el-table-column prop="trainJob" label="岗位" width="180"> </el-table-column>
    <el-table-column prop="trainName" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="trainGender" label="性别" width="180"> </el-table-column>
    <el-table-column prop="startTime" label="培训开始时间" width="180">
    </el-table-column>
    <el-table-column prop="endTime" label="培训结束时间" width="180">
    </el-table-column>
    <el-table-column prop="note" label="备注" width="180"> </el-table-column>
    <el-table-column label="操作" fixed="right" width="250">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="mini"
          type="primary"
          @click="handleRegular(scope.$index, scope.row)"
          >转正</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <Footer/>
    <el-dialog
      title="新增一行"
      class="new-row-dialog"
      :visible.sync="newRowVisible"
      width="60%"
      style="min-width:1160px"
    >
      <el-form
        :inline="true"
        :model="formData"
        class="demo-form-inline"
        size="mini"
        label-width="auto"
      >
      <el-form-item label="岗位">
        <el-input v-model="formData.trainJob"></el-input>
      </el-form-item>
      
        <el-form-item label="姓名">
          <el-input v-model="formData.trainName"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formData.trainGender"></el-input>
        </el-form-item>
        <el-form-item label="培训开始时间">
          <el-input v-model="formData.startTime"></el-input>
        </el-form-item>
        <el-form-item label="培训结束时间">
          <el-input v-model="formData.endTime"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input
            v-model="formData.note"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2}"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="newRowVisible = false" plain
            >取消</el-button
          >
          <!-- <el-button
            size="small"
            type="primary"
            @click="$store.commit('staging', formData)"
            plain
            >暂存</el-button
          > -->
          <el-button size="small" type="primary" @click="editRow" plain
            >确认修改</el-button
          >
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
  <!-- 列表组件 -->
  <!-- max-height="730px" -->
 
</template>

<script>
import MainSearch from './MainSearch/MainSearch.vue';
import Footer from './Footer/Footer.vue';
export default {
    data() {
        return {
            formData: {
              trainJob: "",
              trainName: "",
              trainGender: "",
              startTime: "",
              endTime: "",
              note:""
            },
            tableData: [
                {
                  trainJob: "出现CDS v",
                  trainName: "富士达富士达",
                  trainGender: " 阿凡达",
                  startTime: " 发哈哈",
                  endTime: "微软企鹅",
                  note:" 规范和闪光灯"
          },
            ],
            newRowVisible: false,
        };
    },
    methods: {
        indexMethod(index) {
            return index + 1;
        },
        /* 列表行居中 */
        rowStyle() {
            return "text-align:center";
        },
        /* 表头居中 */
        headStyle() {
            return "text-align:center";
        },
        /* 调出编辑页面 */
        handleEdit(index, data) {
            this.newRowVisible = true;
            this.formData = { ...data };
            this.editing = index;
        },
        /* 编辑一行，需要发请求 */
        editRow() {
            this.$set(this.tableData, this.editing, { ...this.formData });
            this.newRowVisible = false;
        },
        /* 转正 */
        handleRegular() { },
        /* 删除 */
        handleDelete(index) {
            this.tableData.splice(index, 1);
        },
    },
    components: { MainSearch, Footer }
};
</script>
<style lang="less">
  .wrapper {
    .el-table {
      .el-table-column {
      line-height: 20px;
    }
  }
    .el-form {
      .el-input, .el-textarea  {
        width: 110px;
      }
    }
  }

</style>