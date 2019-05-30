<template>
  <div class="receive">
    <div id="top">
      <h2 class="btn" @click="goto('home')">TRANSFER</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content">
      <div class="title con">
        <img :src="receive_pic" alt>
        <p>
          Receive&nbsp;
          <span>{{receive_name}}</span>
        </p>
      </div>
      <div class="box con">
        <img src="../../static/qr-code.png" alt>
        <div class="con">
          <p>
            <span>sdfgdfgdfgdfgdfgdfgdfvvbertertertdfgdfgdfgdferfsdfsdfvnghdfgdfgdg</span>
            <img src="../assets/cop.png" alt>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import topright from "@/components/top_right";
export default {
  name: "receive",
  components: {
    // topright
  },
  data() {
    return {
      receive_pic: this.$route.params.pic,
      receive_name: this.$route.params.receiveid,
      loading1: true
    };
  },
  created() {
    // console.log(this.$route.params);
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
  methods: {
    goto(name, id) {
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
<style lang="scss" scoped>
.content {
  height: 750px;
}

.title {
  height: 50px;
  width: 1200px;
  margin-top: 70px;
  background: #302f39;
  margin-bottom: 60px;
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
  > img {
    display: block;
    margin: 0 auto;
    margin-bottom: 63px;
  }
  p {
    // position: absolute;
    // left: 50%;
    // transform: translateX(-50%);
    width: 380px;
    margin: 0 auto;
    // height: 50px;
    // text-align:center;
    span {
      display: inline-block;
      width: 334px;
      font-size: 16px;
      word-wrap: break-word;
      // margin: 0 auto;
      color: #bec8d6;
      line-height: 28px;
      margin-right: 22px;
       img {
            position:absolute;
           left:50%;
           transform: translateX(-50%);
      }
     
    }
    
  }
}
</style>

