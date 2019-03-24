<template>
  <div class="history">
    <div id="top">
      NETNOTE
      <topright></topright>
    </div>
    <div class="content con">
      <div class="title">
        <!-- <img src="../assets/up.png" alt> -->
        <p>History</p>
      </div>

      <div class="box_tap">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="TRANSFERS" name="first">
            <historytable
              :transfer="transferdata"
              :tablehead="transferhead"
              v-if="transferdata.length>0"
            ></historytable>
          </el-tab-pane>
          <el-tab-pane label="EXCHANGES" name="second">
            <historyexchange
              :transfer="table"
              :tablehead="exchangehead"
              v-if="transferdata.length>0"
            ></historyexchange>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import historytable from "@/components/historytable";
import historyexchange from "@/components/historyexchange";
import topright from "@/components/top_right"
export default {
  name: "history",
  components: {
    historytable,
    historyexchange,
    topright
  },
  data() {
    return {
      msg: 8888,
      // list: [],
      activeName: "first",
      transferhead: ["Date", "Opear-tion", "Token", "Amount", "Result"],
      exchangehead: ["Date", "Opear-tion", "Token", "Amount", "Result"],
      transferdata: [],
      exchangedata: [],
      table: [
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
      ],

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
  created() {
    var token = sessionStorage.getItem("token");
    this.$axios
      .get("/walletapi/growthing-02/users/transfer_history", {
        params: {
          limit: 100,
          offset: 0,
          access_token: token
        }
      })
      .then(res => {
        this.transferdata = res.data.records;
        // console.log(this.transferdata)
      })
      .catch(err => {});

    this.$axios
      .get("/walletapi/growthing-02/users/exchange_history", {
        params: {
          limit: 100,
          offset: 0,
          access_token: token
        }
      })
      .then(res => {
        // console.log(res.data);
        if (res.data.status == "success") {
          this.exchangedata = res.data;
          // console.log(res.data.records)
        }
      })
      .catch(err => {
        //console.log(err); //错误信息
      });
  },
  methods: {
    //tap切换
    handleClick(tab, event) {}
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

/* .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px dashed #ebeef5;
} */

.box_tap .el-tabs__item {
  color: #aaaaaa;
  line-height: 55px;
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


