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
      <el-table-column prop="sector" label="部门名称" width="180">
      </el-table-column>
      <el-table-column prop="xingmin" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="gangwei" label="岗位" width="180">
      </el-table-column>
      <el-table-column prop="sfzh" label="身份证号" width="180">
      </el-table-column>
      <el-table-column prop="rzrq" label="入职日期" width="180">
      </el-table-column>
      <el-table-column prop="zzrq" label="转正日期" width="180">
      </el-table-column>
      <el-table-column prop="jbgz" label="基本工资" width="180">
      </el-table-column>
      <el-table-column prop="kaohe" label="绩效考核" width="180">
      </el-table-column>
      <el-table-column prop="butie" label="岗位补贴" width="180">
      </el-table-column>
      <el-table-column prop="queqin" label="缺勤扣款" width="180">
      </el-table-column>
      <el-table-column prop="koukuan" label="迟到扣款" width="180">
      </el-table-column>
      <el-table-column prop="ztkk" label="早退扣款" width="180">
      </el-table-column>
      <el-table-column prop="qtkk" label="其他扣款" width="180">
      </el-table-column>
      <el-table-column prop="bufa" label="补发" width="180"> </el-table-column>
      <el-table-column prop="jiabangz" label="加班工资" width="180">
      </el-table-column>
      <el-table-column prop="canfei" label="餐费补贴" width="180">
      </el-table-column>
      <el-table-column prop="jbbt" label="加班补贴" width="180">
      </el-table-column>
      <el-table-column prop="jiangjin" label="优秀员工奖金" width="180">
      </el-table-column>
      <el-table-column prop="yidong" label="异动" width="180">
      </el-table-column>
      <el-table-column prop="yfgongzi" label="应发工资" width="180">
      </el-table-column>
      <el-table-column prop="yanglaogr" label="养老" width="180">
      </el-table-column>
      <el-table-column prop="yiliaogr" label="医疗" width="180">
      </el-table-column>
      <el-table-column prop="shiye" label="失业" width="180"> </el-table-column>
      <el-table-column prop="gerensb" label="个人社保合计扣款" width="180">
      </el-table-column>
      <el-table-column prop="gerengj" label="个人公积金扣款" width="180">
      </el-table-column>
      <el-table-column prop="shuihousds" label="税后扣款个人所得税" width="180">
      </el-table-column>
      <el-table-column prop="yifa" label="已发" width="180"> </el-table-column>
      <el-table-column prop="shifa" label="实发" width="180"> </el-table-column>
      <el-table-column prop="yanglaogs" label="养老" width="180">
      </el-table-column>
      <el-table-column prop="yiliaogs" label="医疗" width="180">
      </el-table-column>
      <el-table-column prop="dabingjian" label="大病险" width="180">
      </el-table-column>
      <el-table-column prop="shiyexian" label="失业险" width="180">
      </el-table-column>
      <el-table-column prop="gongshangxian" label="工伤险" width="180">
      </el-table-column>
      <el-table-column prop="sbhjkk" label="公司社保合计扣款" width="180">
      </el-table-column>
      <el-table-column prop="gjjbf" label="公积金单位承担部分" width="180">
      </el-table-column>
      <el-table-column prop="dianhua" label="电话" width="180">
      </el-table-column>
      <el-table-column prop="gongzikh" label="工资卡号" width="180">
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
        <el-form-item label="部门名称">
          <el-input v-model="formData.sector"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.xingmin"></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formData.gangwei"></el-input>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="formData.sfzh"></el-input>
        </el-form-item>
        <el-form-item label="入职日期">
          <el-input v-model="formData.rzrq"></el-input>
        </el-form-item>
        <el-form-item label="转正日期">
          <el-input v-model="formData.zzrq"></el-input>
        </el-form-item>
        <el-form-item label="基本工资">
          <el-input v-model="formData.jbgz"></el-input>
        </el-form-item>
        <el-form-item label="绩效考核">
          <el-input v-model="formData.kaohe"></el-input>
        </el-form-item>
        <el-form-item label="岗位补贴">
          <el-input v-model="formData.butie"></el-input>
        </el-form-item>
        <el-form-item label="缺勤扣款">
          <el-input v-model="formData.queqin"></el-input>
        </el-form-item>
        <el-form-item label="迟到扣款">
          <el-input v-model="formData.koukuan"></el-input>
        </el-form-item>
        <el-form-item label="早退扣款">
          <el-input v-model="formData.ztkk"></el-input>
        </el-form-item>
        <el-form-item label="其他扣款">
          <el-input v-model="formData.qtkk"></el-input>
        </el-form-item>
        <el-form-item label="补发">
          <el-input v-model="formData.bufa"></el-input>
        </el-form-item>
        <el-form-item label="加班工资">
          <el-input v-model="formData.jiabangz"></el-input>
        </el-form-item>
        <el-form-item label="餐费补贴">
          <el-input v-model="formData.canfei"></el-input>
        </el-form-item>
        <el-form-item label="加班补贴">
          <el-input v-model="formData.jbbt"></el-input>
        </el-form-item>
        <el-form-item label="优秀员工奖金">
          <el-input v-model="formData.jiangjin"></el-input>
        </el-form-item>
        <el-form-item label="异动">
          <el-input v-model="formData.yidong"></el-input>
        </el-form-item>
        <el-form-item label="应发工资">
          <el-input v-model="formData.yfgongzi"></el-input>
        </el-form-item>
        <el-form-item label="养老">
          <el-input v-model="formData.yanglaogr"></el-input>
        </el-form-item>
        <el-form-item label="医疗">
          <el-input v-model="formData.yiliaogr"></el-input>
        </el-form-item>
        <el-form-item label="失业">
          <el-input v-model="formData.shiye"></el-input>
        </el-form-item>
        <el-form-item label="个人社保合计扣款">
          <el-input v-model="formData.gerensb"></el-input>
        </el-form-item>
        <el-form-item label="个人公积金扣款">
          <el-input v-model="formData.gerengj"></el-input>
        </el-form-item>
        <el-form-item label="税后扣款个人所得税">
          <el-input v-model="formData.shuihousds"></el-input>
        </el-form-item>
        <el-form-item label="已发">
          <el-input v-model="formData.yifa"></el-input>
        </el-form-item>
        <el-form-item label="实发">
          <el-input v-model="formData.shifa"></el-input>
        </el-form-item>
        <el-form-item label="养老">
          <el-input v-model="formData.yanglaogs"></el-input>
        </el-form-item>
        <el-form-item label="医疗">
          <el-input v-model="formData.yiliaogs"></el-input>
        </el-form-item>
        <el-form-item label="大病险">
          <el-input v-model="formData.dabingjian"></el-input>
        </el-form-item>
        <el-form-item label="失业险">
          <el-input v-model="formData.shiyexian"></el-input>
        </el-form-item>
        <el-form-item label="工伤险">
          <el-input v-model="formData.gongshangxian"></el-input>
        </el-form-item>
        <el-form-item label="公司社保合计扣款">
          <el-input v-model="formData.sbhjkk"></el-input>
        </el-form-item>
        <el-form-item label="公积金单位承担部分">
          <el-input v-model="formData.gjjbf"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="formData.dianhua"></el-input>
        </el-form-item>
        <el-form-item label="工资卡号">
          <el-input v-model="formData.gongzikh"></el-input>
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
          sector: "",
          xingmin: "",
          gangwei: "",
          sfzh: "",
          rzrq: "",
          zzrq: "",
          jbgz: "",
          kaohe: "",
          butie: "",
          queqin: "",
          koukuan: "",
          ztkk: "",
          qtkk: "",
          bufa: "",
          jiabangz: "",
          canfei: "",
          jbbt: "",
          jiangjin: "",
          yidong: "",
          yfgongzi: "",
          yanglaogr: "",
          yiliaogr: "",
          shiye: "",
          gerensb: "",
          gerengj: "",
          shuihousds: "",
          yifa: "",
          shifa: "",
          yanglaogs: "",
          yiliaogs: "",
          dabingjian: "",
          shiyexian: "",
          gongshangxian: "",
          sbhjkk: "",
          gjjbf: "",
          dianhua: "",
          gongzikh: "",
      },
      tableData: [
        {
          sector: "1",
          xingmin: "2",
          gangwei: "3",
          sfzh: "4",
          rzrq: "5",
          zzrq: "654",
          jbgz: "8678",
          kaohe: "6876",
          butie: "867",
          queqin: "865",
          koukuan: "348354",
          ztkk: "3213453",
          qtkk: "5463",
          bufa: "43123",
          jiabangz: "456358",
          canfei: "34353",
          jbbt: "321373",
          jiangjin: "313453",
          yidong: "3123465",
          yfgongzi: "3465543",
          yanglao: "34566",
          yiliao: "345665",
          shiye: "345678",
          gerensb: "3486346",
          gerengj: "348645",
          shuihousds: "34863456",
          yifa: "345543",
          shifa: "345345",
          yanglao: "345367",
          yiliao: "68798",
          dabingjian: "3453667",
          shiyexian: "345678",
          gongshangxian: "6453",
          sbhjkk: "342376",
          gjjbf: "3123",
          dianhua: "3213",
          gongzikh: "31656",
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