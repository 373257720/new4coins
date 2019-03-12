<template>
  <div>
    <div id="top">NETNOTE</div>
    <div class="content">
      <div class="trend"></div>
      <variety v-for="(item,index) in tabs" :key="index" :son="tabs[index]"></variety>
    </div>
  </div>
</template>
<script>
import variety from "@/components/variety";
export default {
  name: "home",
  data() {
    return {
      tabs: [
        {
          id: 0,
          text: "../assets/hkd.png"
        },
        {
          id: 1,
          text: "../assets/jpy.png"
        },
        {
          id: 2,
          text: "../assets/rmb.png"
        },
        {
          id: 3,
          text: "../assets/usd.png"
        }
      ]
    };
  },
  components: {
    variety
  }
};
</script>


<style lang="scss" scoped>
.content{
  height: 870px;
}
#top {
  height: 60px;
  background: #25262e;
  color: white;
  font-size: 24px;
  line-height: 60px;
  padding-left: 100px;
}
.trend {
  height: 400px;
  // background: red;
  margin-bottom: 40px;
}
</style>