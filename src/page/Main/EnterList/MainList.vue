<template>
  <div class="wrapper">
    <MainSearch @onSearch="toSearch" :targetPage="targetPage" />
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
      <el-table-column prop="empStaNum  " label="员工编号" width="180">
      </el-table-column>
      <el-table-column prop="empName " label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="empJob" label="岗位" width="180">
      </el-table-column>
      <el-table-column prop="xmanpai" label="项目安排" width="180">
      </el-table-column>
      <el-table-column prop="empSex" label="性别" width="180">
      </el-table-column>
      <el-table-column prop="empIdCardNo " label="身份证号" width="180">
      </el-table-column>
      <el-table-column prop="empFamiAddress " label="户口所在地" width="180">
      </el-table-column>
      <el-table-column prop="empDegree" label="学历" width="180"> </el-table-column>
      <el-table-column prop="empType" label="用工性质" width="180">
      </el-table-column>
      <el-table-column prop="empHirDate" label="入职时间" width="180">
      </el-table-column>
      <el-table-column prop="empSal" label="薪资" width="180"> </el-table-column>
      <el-table-column prop="remarks1" label="人员性格分析" width="180">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="250">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="primary"
            @click="handleAdd(scope.$index, scope.row)"
            >新增</el-button
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage1"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next, jumper, total"
      :total="totalAll"
    >
      <!-- :hide-on-single-page="true" -->
    </el-pagination>
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
        <el-form-item label="员工编号">
          <el-input v-model="formData.empStaNum  "></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.empName "></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formData.empJob"></el-input>
        </el-form-item>
        <el-form-item label="项目安排">
          <el-input v-model="formData.xmanpai"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formData.empSex"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="formData.empIdCardNo "></el-input>
        </el-form-item>

        <el-form-item label="户口所在地">
          <el-input v-model="formData.empFamiAddress "></el-input>
        </el-form-item>

        <el-form-item label="学历">
          <el-input v-model="formData.empDegree"></el-input>
        </el-form-item>
        <el-form-item label="用工性质">
          <el-input v-model="formData.empType"></el-input>
        </el-form-item>

        <el-form-item label="入职时间">
          <el-input v-model="formData.empHirDate"></el-input>
        </el-form-item>

        <el-form-item label="薪资">
          <el-input v-model="formData.empSal"></el-input>
        </el-form-item>

        <el-form-item label="备注一">
          <el-input
            v-model="formData.remarks1"
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
    <el-dialog
      title="新增一行"
      class="new-row-dialog"
      :visible.sync="addRowVisible"
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
        <el-form-item label="员工编号">
          <el-input v-model="formDataAdd.empStaNum  "></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formDataAdd.empName "></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formDataAdd.empJob"></el-input>
        </el-form-item>
        <el-form-item label="项目安排">
          <el-input v-model="formDataAdd.xmanpai"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formDataAdd.empSex"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="formDataAdd.empIdCardNo "></el-input>
        </el-form-item>

        <el-form-item label="户口所在地">
          <el-input v-model="formDataAdd.empFamiAddress "></el-input>
        </el-form-item>

        <el-form-item label="学历">
          <el-input v-model="formDataAdd.empDegree"></el-input>
        </el-form-item>
        <el-form-item label="用工性质">
          <el-input v-model="formDataAdd.empType"></el-input>
        </el-form-item>

        <el-form-item label="入职时间">
          <el-input v-model="formDataAdd.empHirDate"></el-input>
        </el-form-item>

        <el-form-item label="薪资">
          <el-input v-model="formDataAdd.empSal"></el-input>
        </el-form-item>

        <el-form-item label="备注一">
          <el-input
            v-model="formDataAdd.remarks1"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2 }"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="small" @click="addRowVisible = false" plain
            >取消</el-button
          >
          <!-- <el-button
            size="small"
            type="primary"
            @click="$store.commit('staging', formData)"
            plain
            >暂存</el-button
          > -->
          <el-button size="small" type="primary" @click="addRow" plain
            >确认新增</el-button
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
import {
  reqSearchOnBoardingAll,
  reqUpdateOnBoarding,
  reqInserOnBoarding,
} from "../../../api";
export default {
  data() {
    return {
      /* 默认页 */
      currentPage1: 1,
      /* 总条数 */
      totalAll: 1,
      targetPage: 1,
      formDataAdd: {
        empStaNum:"",
        empName : "",
        empJob: "",
        xmanpai: "",
        empSex: "",
        empIdCardNo:"",
        empFamiAddress : "",
        empDegree: "",
        empType: "",
        empHirDate: "",
        empSal: "",
        remarks1: "",
      },
      formData: {
        empStaNum:"",
        empName : "",
        empJob: "",
        xmanpai: "",
        empSex: "",
        empIdCardNo:"",
        empFamiAddress : "",
        empDegree: "",
        empType: "",
        empHirDate: "",
        empSal: "",
        remarks1: "",
      },
      tableData: [
        {
          empStaNum:"1001",
          empName : "王大花",
          empJob: "前端",
          xmanpai: "前端项目",
          empSex: "女",
          empIdCardNo:"622322201010105569",
          empFamiAddress : "山西",
          empDegree: "本科",
          empType: "前端页面设置",
          empHirDate: "2021年1月1日",
          empSal: "3000",
          remarks1: "这是一个备注",
        },
      ],
      newRowVisible: false,
      addRowVisible: false,
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.targetPage = val;
    },
    indexMethod(index) {
      return index + 1;
    },
    /* 查询到的数据 */
    toSearch(info) {
      this.tableData = info;
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
    /* 调出新增页面*/
    handleAdd() {
      this.addRowVisible = true;
    },
    /* 编辑一行，需要发请求 */
    async editRow() {
      this.$set(this.tableData, this.editing, { ...this.formData });
      this.newRowVisible = false;
      let result = await reqUpdateOnBoarding(this.formData);
    },
    /* 新增一行 */
    async addRow() {
      let result = await reqInserOnBoarding(this.formDataAdd);
      this.tableData.push({ ...this.formDataAdd });
      this.addRowVisible = false;
    },
    /* 删除 */
    async handleDelete(index) {
      this.tableData.splice(index, 1);
      let result = await reqDelete(index);
    },
    /* 查询所有数据 */
    async searchData() {
      let result = await reqSearchOnBoardingAll();
      this.$nextTick(() => {
        this.totalAll = result.data;
      });
    },
  },

  components: { MainSearch, Footer },
  created() {
    this.searchData();
  },
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