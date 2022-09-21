<template>
  <div class="wrapper">
    <MainSearch />
    <el-table
      :data="tableData"
      style="width: 100%"
      max-height="710px"
      :header-cell-style="headStyle"
      :cell-style="rowStyle"
      show-overflow-tooltip="true"
    >
      <el-table-column
        type="index"
        label="序号"
        prop="index"
        :index="indexMethod"
        width="50"
      >
      </el-table-column>
      <el-table-column prop="xingmin" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="gangwei" label="岗位" width="180">
      </el-table-column>
      <el-table-column prop="xingbie" label="性别" width="180">
      </el-table-column>
      <el-table-column prop="hukou" label="户口所在地" width="180">
      </el-table-column>
      <el-table-column prop="xueli" label="学历" width="180"> </el-table-column>
      <el-table-column prop="yongxing" label="用工性质" width="180">
      </el-table-column>
      <el-table-column prop="rushi" label="入职时间" width="180">
      </el-table-column>
      <el-table-column prop="lizhi" label="离职时间" width="180">
      </el-table-column>
      <el-table-column prop="gongzuosc" label="工作时长(月)" width="180">
      </el-table-column>
      <el-table-column prop="note1" label="离职原因" width="180">
      </el-table-column>
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
    <Footer />
    <el-dialog
      title="新增一行"
      class="new-row-dialog"
      :visible.sync="newRowVisible"
      width="60%"
      style="min-width: 1160px"
    >
      <el-form
        :inline="true"
        :model="formData"
        class="demo-form-inline"
        size="mini"
        label-width="auto"
      >
        <el-form-item label="姓名">
          <el-input v-model="formData.xingmin"></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formData.gangwei"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formData.xingbie"></el-input>
        </el-form-item>
  
        <el-form-item label="户口所在地">
          <el-input v-model="formData.hukou"></el-input>
        </el-form-item>
       
        <el-form-item label="学历">
          <el-input v-model="formData.xueli"></el-input>
        </el-form-item>
        <el-form-item label="用工性质">
          <el-input v-model="formData.yongxing"></el-input>
        </el-form-item>
       
        <el-form-item label="入职时间">
          <el-input v-model="formData.rushi"></el-input>
        </el-form-item>
        <el-form-item label="离职时间">
          <el-input v-model="formData.lizhi"></el-input>
        </el-form-item>
        <el-form-item label="工作时长">
          <el-input v-model="formData.gongzuosc"></el-input>
        </el-form-item>
        
        <el-form-item label="备注一">
          <el-input
            v-model="formData.note1"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2 }"
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
import MainSearch from "./MainSearch/MainSearch.vue";
import Footer from "./Footer/Footer.vue";
export default {
  data() {
    return {
      formData: {
          xingmin: "",
          gangwei: "",
          xingbie: "",
          hukou: "",
          xueli: "",
          yongxing: "",
          rushi: "",
          lizhi: "",
          gongzuosc: "",
          note1: "",
      },
      tableData: [
        {
          xingmin: "王大花",
          gangwei: "前端",
          xingbie: "女",
          hukou: "山西",
          xueli: "本科",
          yongxing: "1232131",
          rushi: "2211213",
          lizhi: "321312312",
          gongzuosc: "231131",
          note1: "2131231",
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
    handleRegular() {},
    /* 删除 */
    handleDelete(index) {
      this.tableData.splice(index, 1);
    },
  },
  components: { MainSearch, Footer },
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
    .el-input,
    .el-textarea {
      width: 110px;
    }
  }
}
</style>