<template>
  <div class="deposit">
    <div id="top">DEPOSIT</div>
    <div class="content con">
      <div class="title">
        <img src="../assets/up.png" alt>
        <p>Upload a picture of your bank receipt</p>
      </div>
      <div class="box">
        <h3>Receipt</h3>
        <div class="pic">
          <el-upload
            action="/haha/api/note/login"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="appear"
            :on-error="appear"
            :before-upload="dispear"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </div>

        <h3>Currency</h3>
        <div class="select common">
          <el-select v-model="value" placeholder="-">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <h3>Amount</h3>
        <div class="amount common">
          <el-input placeholder="-" v-model="input7" clearable></el-input>
        </div>
        <div class="btn" @click="goto">SUBMIT</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "deposit",
  data() {
    return {
      input7: "",
      dialogImageUrl: "",
      dialogVisible: false,
      options: [
        {
          value: "选项1",
          label: "HKD"
        },
        {
          value: "选项2",
          label: "JPY"
        },
        {
          value: "选项3",
          label: "RMB"
        },
        {
          value: "选项4",
          label: "USD"
        }
      ],
      value: ""
      //   dialogImageUrl: "",
      //   dialogVisible: false
    };
  },
  methods: {
    goto() {
      this.$router.push({
        name: "home"
      });
    },

    //上传文件之前的钩子，参数为上传的文件,把那个十字选择框去掉
    dispear(file) {
      // console.log(111)
      var a = document.querySelector(".el-upload--picture-card");
      console.log(a);
      a.style = "display:none;";
      // var b=document.querySelector('.el-upload-list__item')
      // b.style="transition:0s
      // console.log(response,file,fileList)
    },
    //文件上传不成功时的钩子
    //文件列表移除文件时的钩子
    appear(file, fileList) {
      var a = document.querySelector(".el-upload--picture-card");
      var b = document.querySelector(".el-upload-list__item");
      // a.style="display:";
      b.style = "transition:0s";
      //  b.style="width:80%;height:80%;transition:0s"top
      a.style =
        "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:block;";
      //  a.style="margin:0 auto;display:block;"
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //点击文件列表中已上传的文件时的钩子
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>
<style>
.pic {
  padding-top: 37px;
  position: relative;
  box-sizing: border-box;
}
.pic .el-upload-list__item-status-label {
  background: #5ce2ee;
}
.pic .el-upload-list--picture-card .el-upload-list__item {
  width: 300px;
  /* height: 100%; */
  display: block;
  margin: 0 auto;
}

.pic .avatar-uploader {
  width: 468px;
  height: 222px;
}
.pic .el-upload-list__item-thumbnail {
  /* width: 100%;
    height: 100%; */
}
.select .el-select {
  width: 468px;
}
.common .el-input__inner {
  border-radius: 0;
  background: #25262e;
  border: 0;
  color: #bec8d6;
}
.pic .el-upload--picture-card {
  background: none;

  display: block;
  margin: 0 auto;
  /* text-align: center； */

  /* display: block; */
}
/* .pic .el-icon-plus{
        display: inline-block;
         width: 468px;
        height: 222px;  
        text-align: center;
    } */
</style>

<style lang="scss" scoped>
.content {
  height: 800px;
  // background:#363541;
  margin-top: 70px;
}
.title {
  height: 50px;
  width: 1200px;

  background: #302f39;
  margin-bottom: 60px;
  color: #ffffff;
  font-size: 20px;
  img {
    // margin-left:37px;
    // margin-right:18px;

    float: left;
    margin: 13px 22px 0 24px;
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
  height: 558px;
  width: 468px;
  //
  margin: 0 auto;
  h3 {
    color: #bec8d6;
    margin-bottom: 10px;
  }

  .pic {
    height: 222px;
    background: #25262e;
    margin-bottom: 30px;
  }
  .select {
    // height: 40px;
    margin-bottom: 25px;
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
}
</style>


