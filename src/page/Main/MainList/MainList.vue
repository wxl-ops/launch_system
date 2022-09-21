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
    <el-table-column prop="staffId" label="员工编号" width="180">
    </el-table-column>
    <el-table-column prop="xingmin" label="姓名" width="180"> </el-table-column>
    <el-table-column prop="sector" label="部门" width="180"> </el-table-column>
    <el-table-column prop="gangwei" label="岗位" width="180"> </el-table-column>
    <el-table-column prop="zhiji" label="职级" width="180"> </el-table-column>
    <el-table-column prop="xingbie" label="性别" width="180"> </el-table-column>
    <el-table-column prop="shengri" label="出生年月" width="180">
    </el-table-column>
    <el-table-column prop="nianling" label="年龄" width="180">
    </el-table-column>
    <el-table-column prop="hunfou" label="婚否" width="180"> </el-table-column>
    <el-table-column prop="jiguan" label="籍贯" width="180"> </el-table-column>
    <el-table-column prop="hukou" label="户口所在地" width="180">
    </el-table-column>
    <el-table-column prop="huxing" label="户口性质" width="180">
    </el-table-column>
    <el-table-column prop="shenfen" label="身份证号码" width="180">
    </el-table-column>
    <el-table-column prop="xueli" label="学历" width="180"> </el-table-column>
    <el-table-column prop="biye" label="毕业学校" width="180">
    </el-table-column>
    <el-table-column prop="zhuanye" label="专业" width="180"> </el-table-column>
    <el-table-column prop="yongxing" label="用工性质" width="180">
    </el-table-column>
    <el-table-column prop="dianhau" label="联系电话" width="180">
    </el-table-column>
    <el-table-column prop="address" label="住址" width="180"> </el-table-column>
    <el-table-column prop="rushi" label="入职时间" width="180">
    </el-table-column>
    <el-table-column prop="zhuanshi" label="转正时间" width="180">
    </el-table-column>
    <el-table-column prop="zhuanshun" label="转正顺延" width="180">
    </el-table-column>
    <el-table-column prop="lizhi" label="离职时间" width="180">
    </el-table-column>
    <el-table-column prop="waiyu" label="外语水平" width="180">
    </el-table-column>
    <el-table-column prop="techang" label="特长" width="180"> </el-table-column>
    <el-table-column prop="zhicheng" label="职称" width="180">
    </el-table-column>
    <el-table-column prop="minzu" label="民族" width="180"> </el-table-column>
    <el-table-column prop="mianmao" label="政治面貌" width="180">
    </el-table-column>
    <el-table-column prop="shebao" label="社保账号" width="180">
    </el-table-column>
    <el-table-column prop="gongji" label="公积金账号" width="180">
    </el-table-column>
    <el-table-column prop="gongzi" label="工资卡开户行" width="180">
    </el-table-column>
    <el-table-column
      prop="gzkzh"
      label="工资卡账号"
      width="180"
      :show-overflow-tooltip="true"
    >
    </el-table-column>
    <el-table-column prop="lianxi" label="紧急联系人" width="180">
    </el-table-column>
    <el-table-column prop="lianfang" label="联系方式" width="180">
    </el-table-column>
    <el-table-column prop="guanxi" label="关系" width="180"> </el-table-column>
    <el-table-column prop="note1" label="备注" width="180"> </el-table-column>
    <el-table-column prop="note2" label="备注" width="180"> </el-table-column>
    <el-table-column prop="note3" label="备注" width="180"> </el-table-column>
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
        <el-form-item label="员工编号">
          <el-input v-model="formData.staffId"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="formData.xingmin"></el-input>
        </el-form-item>
        <el-form-item label="部门">
          <el-input v-model="formData.sector"></el-input>
        </el-form-item>
        <el-form-item label="岗位">
          <el-input v-model="formData.gangwei"></el-input>
        </el-form-item>
        <el-form-item label="职级">
          <el-input v-model="formData.zhiji"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="formData.xingbie"></el-input>
        </el-form-item>
        <el-form-item label="出生年月">
          <el-input v-model="formData.shengri"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formData.nianling"></el-input>
        </el-form-item>
        <el-form-item label="婚否">
          <el-input v-model="formData.hunfou"></el-input>
        </el-form-item>
        <el-form-item label="籍贯">
          <el-input v-model="formData.jiguan"></el-input>
        </el-form-item>
        <el-form-item label="户口所在地">
          <el-input v-model="formData.hukou"></el-input>
        </el-form-item>
        <el-form-item label="户口性质">
          <el-input v-model="formData.huxing"></el-input>
        </el-form-item>
        <el-form-item label="学历">
          <el-input v-model="formData.xueli"></el-input>
        </el-form-item>
        <el-form-item label="毕业学校">
          <el-input v-model="formData.biye"></el-input>
        </el-form-item>
        <el-form-item label="专业">
          <el-input v-model="formData.zhuanye"></el-input>
        </el-form-item>
        <el-form-item label="用工性质">
          <el-input v-model="formData.yongxing"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="formData.dianhau"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址">
          <el-input v-model="formData.address"></el-input>
        </el-form-item>
        <el-form-item label="入职时间">
          <el-input v-model="formData.rushi"></el-input>
        </el-form-item>
        <el-form-item label="转正时间">
          <el-input v-model="formData.zhuanshi"></el-input>
        </el-form-item>
        <el-form-item label="转正顺延">
          <el-input v-model="formData.zhuanshun"></el-input>
        </el-form-item>
        <el-form-item label="离职时间">
          <el-input v-model="formData.lizhi"></el-input>
        </el-form-item>
        <el-form-item label="外语水平">
          <el-input v-model="formData.waiyu"></el-input>
        </el-form-item>
        <el-form-item label="特长">
          <el-input v-model="formData.techang"></el-input>
        </el-form-item>
        <el-form-item label="职称">
          <el-input v-model="formData.zhicheng"></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-input v-model="formData.minzu"></el-input>
        </el-form-item>
        <el-form-item label="政治面貌">
          <el-input v-model="formData.mianmao"></el-input>
        </el-form-item>
        <el-form-item label="社保账号">
          <el-input v-model="formData.shebao"></el-input>
        </el-form-item>
        <el-form-item label="公积金账号">
          <el-input v-model="formData.gongji"></el-input>
        </el-form-item>
        <el-form-item label="工资卡开户行">
          <el-input v-model="formData.gongzi"></el-input>
        </el-form-item>
        <el-form-item label="工资卡账号">
          <el-input v-model="formData.gzkzh"></el-input>
        </el-form-item>
        <el-form-item label="紧急联系人">
          <el-input v-model="formData.lianxi"></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="formData.lianfang"></el-input>
        </el-form-item>
        <el-form-item label="关系">
          <el-input v-model="formData.guanxi"></el-input>
        </el-form-item>
        <el-form-item label="备注一">
          <el-input
            v-model="formData.note1"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2}"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注二">
          <el-input
            v-model="formData.note2"
            type="textarea"
            size="small"
            :autosize="{ minRows: 1, maxRows: 2}"
          ></el-input>
        </el-form-item>
        <el-form-item label="备注三">
          <el-input
            v-model="formData.note3"
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
                staffId: "",
                xingmin: "",
                sector: "",
                gangwei: "",
                zhiji: "",
                xingbie: "",
                shengri: "",
                nianling: "",
                hunfou: "",
                jiguan: "",
                hukou: "",
                huxing: "",
                shenfen: "",
                xueli: "",
                biye: "",
                zhuanye: "",
                yongxing: "",
                dianhau: "",
                address: "",
                rushi: "",
                zhuanshi: "",
                zhuanshun: "",
                lizhi: "",
                waiyu: "",
                techang: "",
                zhicheng: "",
                minzu: "",
                mianmao: "",
                shebao: "",
                gongji: "",
                gongzi: "",
                gzkzh: "",
                lianxi: "",
                lianfang: "",
                guanxi: "",
                note1: "",
                note2: "",
                note3: "",
            },
            tableData: [
                {
                    staffId: "1001",
                    xingmin: "张三",
                    sector: "人力资源部",
                    gangwei: "人事专员",
                    zhiji: "",
                    xingbie: "",
                    shengri: "2000年1月2日",
                    nianling: "27",
                    hunfou: "未婚",
                    jiguan: "山西",
                    hukou: "朔州",
                    huxing: "农户",
                    shenfen: "622211111111111111",
                    xueli: "本科",
                    biye: "山西农业大学",
                    zhuanye: "会计",
                    yongxing: "正式员工",
                    dianhau: "13911111111",
                    address: "山西省朔州市朔城区",
                    rushi: "2020/7/13",
                    zhuanshi: "2022/10/13",
                    zhuanshun: "",
                    lizhi: "2021/1/1",
                    waiyu: "",
                    techang: "",
                    zhicheng: "人事专员",
                    minzu: "汉",
                    mianmao: "群众",
                    shebao: "",
                    gongji: "",
                    gongzi: "建行",
                    gzkzh: "12516541655644654123164515416",
                    lianxi: "18811111111",
                    lianfang: "李四",
                    guanxi: "儿子",
                    note1: "",
                    note2: "",
                    note3: "",
                },
                {
                    staffId: "1001",
                    xingmin: "张三",
                    sector: "人力资源部",
                    gangwei: "人事专员",
                    zhiji: "",
                    xingbie: "",
                    shengri: "2000年1月2日",
                    nianling: "27",
                    hunfou: "未婚",
                    jiguan: "山西",
                    hukou: "朔州",
                    huxing: "农户",
                    shenfen: "622211111111111111",
                    xueli: "本科",
                    biye: "山西农业大学",
                    zhuanye: "会计",
                    yongxing: "正式员工",
                    dianhau: "13911111111",
                    address: "山西省朔州市朔城区",
                    rushi: "2020/7/13",
                    zhuanshi: "2022/10/13",
                    zhuanshun: "",
                    lizhi: "2021/1/1",
                    waiyu: "",
                    techang: "",
                    zhicheng: "人事专员",
                    minzu: "汉",
                    mianmao: "群众",
                    shebao: "",
                    gongji: "",
                    gongzi: "建行",
                    gzkzh: "12516541655644654123164515416",
                    lianxi: "18811111111",
                    lianfang: "李四",
                    guanxi: "儿子",
                    note1: "",
                    note2: "",
                    note3: "",
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