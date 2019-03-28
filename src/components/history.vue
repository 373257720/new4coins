<template>
  <div class="history">
    <div id="top">
      <h2 class="btn" @click="goto('home')">NETNOTE</h2>
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
            <div class="norecord" v-if="transferdata.length<=0">No record</div>
            <historytable
              :transfer="transferdata"
              :tablehead="transferhead"
              v-if="transferdata.length>0"
            ></historytable>
          </el-tab-pane>
          <el-tab-pane label="EXCHANGES" name="second">
            <div class="norecord" v-if="exchangedata.length<=0">No record</div>
            <historyexchange
              :transfer="exchangedata"
              :tablehead="exchangehead"
              v-if="exchangedata.length>0"
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
import topright from "@/components/top_right";
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
      exchangedata: []
    };
  },
  created() {
    //  console.log(this.$global_func.goto())
    var token = sessionStorage.getItem("token");
    this.$axios
      .get(`${this.$baseurl}/growthing-02/users/transfer_history`, {
        params: {
          limit: 100,
          offset: 0,
          // access_token: token
        }
      })
      .then(res => {
        this.transferdata = res.data.records;
        // console.log(this.transferdata.length)
      })
      .catch(err => {});

    this.$axios
      .get(`${this.$baseurl}/growthing-02/users/exchange_history`, {
        params: {
          limit: 100,
          offset: 0,
          // access_token: token
        }
      })
      .then(res => {
        // console.log(res.data);
        if (res.data.status == "success") {
          this.exchangedata = res.data.records;
          // console.log(res.data.records)
        }
      })
      .catch(err => {
        //console.log(err); //错误信息
      });
  },
  methods: {
    //tap切换
    handleClick(tab, event) {},
      goto(name, id) {
      // 编程式路由导航：获取router实例
      // this.$router  路由实例（包含跳转等方法）
      // this.$route   当前路由信息
      // console.log(this.$route,this.$router)
      // 路由传参
      let obj = { name };
      // console.log(obj)
       if (id) {
        obj.params = { id };
      }
      this.$router.push(obj);
    }
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
.norecord {
  color: #aaaaaa;
  font-size: 16px;
  text-align: center;
  margin-top: 100px;
}
</style>


