<template>
  <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next, jumper, total"
        :total="400"
        >
      </el-pagination>
  </div>
</template>

<script>
export default {
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage4: 4
      };
    }
  }
</script>

<style>
    .el-pagination__total {
        margin-left: 5px;
    }
    .el-pagination {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 60px;
    } 
    .el-pager {
      height: 28px;
    }
</style>