<template>
  <div class="historytable">
    <el-table
      :data="transfer.slice((currpage - 1) * pagesize, currpage * pagesize)"
      style="width: 100%"
      :default-sort="{prop: 'CreatedStr', order: 'descending'}"
    >
      <el-table-column prop="date" :label="tablehead[0]" sortable width="180"></el-table-column>
      <el-table-column prop="date" :label="tablehead[1]" width="180"></el-table-column>
      <el-table-column prop="date" :label="tablehead[2]"></el-table-column>
      <el-table-column prop="date" :label="tablehead[3]"></el-table-column>
      <el-table-column prop="date" :label="tablehead[4]"></el-table-column>
    </el-table>
    <el-pagination
      :page-size="pagesize"
      :pager-count="5"
      layout="prev, pager, next"
      @current-change="handleCurrentChange"
      :current-page.sync="currpage"
      @size-change="handleSizeChange"
      :total="transfer.length"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "historyexchange",
  props: ["transfer","tablehead"],

  data() {
    return {
      pagesize: 10, // 每页条数
      // transfer_currpage:1,
      currpage: 1 //当前页数
    };
  },
  created() {
    // console.log(this.transfer);
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    }
  }
};
</script>
<style>
 .box_tap .el-tabs__content{
            height: 650px;
}
.historytable .el-pagination{
  position: absolute;

  left:50%;
  transform: translateX(-50%);
  bottom:40px;
  /* background: #302e39; */
}

.historytable .el-pagination button:disabled{
    background:0;
}
.el-pagination .el-pager li{
    
    background:0;
    font-size: 18px;
}
.historytable .el-pagination{
    color:#aaa;
    
}
 .historytable .el-pagination .btn-prev .el-icon,.el-pagination .btn-next .el-icon {
    font-size: 16px;
}
.historytable .el-pagination .btn-next, .el-pagination .btn-prev{
    color:#aaa;
    background:0;
    
}
.historytable .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px dashed #afb9c7;
}
.historytable .el-table td,
.el-table th {
  text-align: center;
  color: #afb9c7;
}
.historytable .el-tabs__item {
  color: #aaaaaa;
  line-height: 55px;
}
.historytable .el-table th,
.el-table tr {
  background: #302e39;
}
.historytable .el-tabs__item.is-active {
  color: #409eff;
}
.historytable .el-tabs__item:hover {
  color: #409eff;
}
.historytable .el-tabs__nav-wrap::after {
  background-color: #373542;
}

</style>
<style lang="scss" scoped>
    .history{
        position:  relative;
        // height: 1000px;
    }
</style>