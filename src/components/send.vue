<template>
  <div class="send">
    <div id="top">
      <h2 class="btn" @click="goto('home')">TRANSFER</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content">
      <div class="title con">
        <img :src="receive_pic" alt>
        <p>
          {{$t('Send.Send')}}
          <span>{{receive_name}}</span>
        </p>
      </div>
      <div class="box con">
        <div>
          <h3>{{$t('Send.TO')}}:</h3>
          <p class="to same">
            <el-input placeholder="-" v-model.trim="to" clearable></el-input>
          </p>
        </div>
        <div>
          <h3>{{$t('Send.Amount')}}:</h3>
          <p class="amount same">
            <el-input placeholder="-" v-model.trim="amount" clearable></el-input>
          </p>
        </div>
        <div>
          <h3>{{$t('Send.REMARK')}}:</h3>
          <p class="remark same">
            <el-input placeholder="-" v-model.trim="remark" clearable></el-input>
          </p>
        </div>
        <div class="btn" @click="goto" v-if="send_switch">{{$t('deposit.Submit')}}</div>
         <div class="btn submit" v-if="!send_switch">{{$t('deposit.Submit')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
// import topright from "@/components/top_right";
export default {
  name: "send",
  components:{
    // topright  
  },
  data() {
    return {
      to: "",
      amount: "",
      remark: "",
      receive_pic: this.$route.params.pic,
      receive_name: this.$route.params.receiveid
    };
  },
  beforeRouteEnter: function(to, from, next) {
    if (from.name == "home" && to.params.pic) {
      next();
    } else {
      next({
        path: "/home"
      });
    }
  },
  created() {
    // console.log(this.$route.params.sendid)
  },
  computed:{
      send_switch:function(){
        if(this.to && this.amount && this.remark){
          return true
        }else{
          false
        }
      }
  },
  methods: {
    goto() {
      this.$router.push({
        name: "home"
      });
    }
  }
};
</script>
<style>
.same input.el-input__inner {
  background: #25262e;
  height: 40px;
  border-radius: 0px;
  border: 0;
  color: #aaaaaa;
  /* margin-bottom:30px; */
}
</style>
<style lang="scss" scoped>
.content {
  height: 750px;
}

.title {
  height: 50px;
  width: 1200px;
  margin-top: 70px;
  background: #302f39;
  color: #ffffff;
  font-size: 20px;
  img {
    // margin-left:37px;
    // margin-right:18px;
    float: left;
    margin: 3px 18px 0 37px;
    font-weight: 700;
  }
  p {
    float: left;
    // display: inline;
    line-height: 50px;
    height: 50px;
  }
}
.box {
  height: 335px;
  color: #bec8d6;

  width: 475px;
  //   color: #bec8d6;
  // background: white;
  margin-top: 48px;

  > div {
    // height: 65px;
    margin-bottom: 30px;
    h3 {
      height: 25px;
      font-size: 14px;
      //   font-size: 12px;
      font-weight: 500;
    }
  }
  .btn {
    height: 38px;
    width: 475px;
    background: #5ce2ee;
    border-radius: 20px;
    margin-top: 60px;
    color: #25262e;
    line-height: 38px;
    text-align: center;
    font-weight: 700;
  }
  .submit {
    background: #30313b;
    color: #64656b;
  }
}
</style>

