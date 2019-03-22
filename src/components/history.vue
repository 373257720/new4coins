<template>
  <div class="history">
    <div id="top">NETNOTE</div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>History</p>
      </div>
      <div class="box_tap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="TRANSFERS" name="first">
            <!-- <el-table
              :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
              style="width: 100%"
              :default-sort="{prop: 'date', order: 'descending'}"
            >
              <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
              <el-table-column prop="name" label="姓名" sortable width="180"></el-table-column>
              <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
             <el-pagination
            :page-size="pagesize"
            :pager-count="5"
            layout="prev, pager, next"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :total="tableData.length"
            ></el-pagination>-->
          </el-tab-pane>
          <el-tab-pane label="EXCHANGES" name="second">
            <el-table
              :data="tableData.slice((currpage - 1) * pagesize, currpage * pagesize)"
              style="width: 100%"
              :default-sort="{prop: 'date', order: 'descending'}"
            >
              <el-table-column prop="date" label="Date" sortable width="180"></el-table-column>
              <el-table-column prop="name" label="Opear-tion" width="180"></el-table-column>
              <el-table-column prop="address" label="Token"></el-table-column>
              <el-table-column prop="address" label="Amount"></el-table-column>
              <el-table-column prop="address" label="Rusult"></el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </div>
      <el-pagination
        :page-size="pagesize"
        :pager-count="5"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  name: "history",
  data() {
    return {
      msg: 8888,
      // list: [],
      pagesize: 10, // 每页条数
      currpage: 1, //当前页数
      activeName: "second",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  created(){
        var token = sessionStorage.getItem("token");
        this.$axios
          .get("/walletapi/growthing-02/users/transfer_history", {
            params: {
              limit: 100,
              offset: 0,
              access_token:token
            }
          })
          .then(res => {
            console.log(res.data);
            // if (res.data.Status == "success") {
              
            //   // this.$store.dispatch("setUser", this.name);
            //   // sessionStorage.setItem("token", res.data.Token.access_token);
            //   // this.$router.push({
            //   //   name: "home"
            //   // });
            // } else {
            //   // this.warn = "Incorrect username or password.";
            // }
          })
          .catch(err => {
            //console.log(err); //错误信息
          });
  },
  methods: {
    handleCurrentChange(cpage) {
      this.currpage = cpage;
    },
    handleSizeChange(psize) {
      this.pagesize = psize;
    },

    //tap切换
    handleClick(tab, event) {
      console.log(tab, event);
    }
    // //点击当前页面
    // current_change: function(currentPage) {
    //   this.currentPage = currentPage;
    // }
  }
};
</script>
<style>
.box_tap .el-tabs__header {
  padding-left: 12px;
  margin-bottom: 0;
  height: 55px;
}


.content .el-pagination{
  position: absolute;
  left:50%;
  transform: translateX(-50%);
  bottom:170px;
  background: #302e39;
}
.box_tap .el-tab-pane {
  /* position: relative; */
}

.box_tap .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px dashed #ebeef5;
}
.box_tap .el-table td,
.el-table th {
  text-align: center;
  color: #afb9c7;
}
.box_tap .el-tabs__item {
  color: #aaaaaa;
  line-height: 55px;
}
.box_tap .el-table th,
.el-table tr {
  background: #302e39;
}
.box_tap .el-tabs__item.is-active {
  color: #409eff;
}
.box_tap .el-tabs__item:hover {
  color: #409eff;
}
.box_tap .el-tabs__nav-wrap::after {
  background-color: #373542;
}
</style>

<style lang="scss" scoped>
.content {
  height: 872px;
  position: relative;
  .title {
    height: 50px;
    width: 1200px;
    margin-top: 50px;
    background: #302f39;
    // margin-bottom: 60px;
    color: #ffffff;
    font-size: 20px;
    // img {
    //   // margin-left:37px;
    //   // margin-right:18px;

    //   float: left;
    //   margin: 13px 22px 0 24px;
    //   font-weight: 700;
    // }
    p {
      float: left;
      // display: inline;
      line-height: 50px;
      font-size: 18px;
      padding-left: 19px;
      height: 50px;
    }
  }
}
</style>


