<template>
  <div class="withdraw">
    <div id="top">WITHDRAW</div>
    <div class="content">
      <div class style="margin-top:28px;">
        <p>
          <span>Fiat</span>
          <span>Available balance $
            <em>99999.99999</em>
            <span>RMB</span>
          </span>
        </p>
        <div class="choose">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="rate first" style="margin-top:28px;">
        <p>RMBn</p>
        <el-input v-model="input2" placeholder="请输入内容"></el-input>
        <u>Max</u>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "withdraw",
  data() {
    return {};
  }
};
</script>
<style>
    
</style>

<style lang="scss" scoped>
#top {
  height: 60px;
  background: #25262e;
  color: white;
  font-size: 24px;
  line-height: 60px;
  padding-left: 100px;
}
.content {
  height: 800px;
  width: 468px;
  margin: 0 auto;
}
</style>


