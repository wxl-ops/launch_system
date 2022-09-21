<template>
  <el-menu :default-openeds="['/hr']" router :default-active="this.$route.path">
    <el-submenu index="1">
      <template slot="title"><i class="el-icon-mouse"></i>技术</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="/hr">
      <template slot="title"><i class="el-icon-coordinate"></i>人力</template>
      <el-menu-item-group>
        <el-menu-item index="/hr/hrList">员工花名</el-menu-item>
        <el-menu-item index="/hr/timeList">员工考勤</el-menu-item>
        <el-menu-item index="/hr/wagesList">员工工资</el-menu-item>
        <el-menu-item index="/hr/enterList">员工入职名单</el-menu-item>
        <el-menu-item index="/hr/regularList">员工转正名单</el-menu-item>
        <el-menu-item index="/hr/leaveList">员工离职名单</el-menu-item>
        <el-menu-item index="/hr/TrainingList">培训人员名单</el-menu-item>
        <el-menu-item index="/hr/anaCharts">分析图表</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-box"></i>后勤</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="4">
      <template slot="title"
        ><i class="el-icon-office-building"></i>企宣</template
      >
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="3-4">
        <template slot="title">选项4</template>
        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Menu",
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style scoped>
</style>