<template>
  <div class="deposit">
    <!-- <div id="top"></div> -->
    <div id="top">
      <h2 class="btn" @click="goto('home')">DEPOSIT</h2>
      <topright></topright>
      <lang></lang>
    </div>
    <div class="content con">
      <div class="title">
        <img src="../assets/up.png" alt>
        <p>{{$t('deposit.Upload')}}</p>
      </div>
      <div class="box">
        <h3>{{$t('deposit.Receipt')}}</h3>
        <div class="pic">
          <el-upload
            ref="upload"
            action
            list-type="picture-card"
            :http-request="uploadFile"
            :on-preview="handlePictureCardPreview"
            :on-remove="appear"
            :on-error="appear"
            :on-change="dispear"
            :limit="1"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt>
          </el-dialog>
        </div>
        <h3>{{$t('deposit.Currency')}}</h3>
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
        <h3>{{$t('deposit.Amount')}}</h3>
        <div class="amount common">
          <el-input placeholder="-" v-model="amount" clearable></el-input>
        </div>
        <div class="btn" @click="submitUpload" v-if="pic_submit">{{$t('deposit.Submit')}}</div>
        <div class="btn submit" v-if="!pic_submit">{{$t('deposit.Submit')}}</div>
      </div>
    </div>
  </div>
</template>
<script>
// import topright from "@/components/top_right";
export default {
  name: "deposit",
  components: {
    // topright
  },
  data() {
    return {
      amount: "",
      value: "",
      formData: "",
      dialogImageUrl: "",
      pic_submitok: false,
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
      ]

      //   dialogImageUrl: "",
      //   dialogVisible: false
    };
  },

  computed: {
    pic_submit: function() {
      if (this.pic_submitok && this.value && this.amount) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    goto() {
      this.$router.push({
        name: "home"
      });
    },
    //文件状态改变时的钩子，参数为上传的文件,把那个十字选择框去掉
    dispear(file) {
      // console.log(this.dialogVisible)
      var a = document.querySelector(".el-upload--picture-card");
      // console.log(a);
      a.style = "display:none;";
    },
    //文件列表移除文件时的钩子
    appear(file, fileList) {
      this.pic_submitok = false;
      var a = document.querySelector(".el-upload--picture-card");
      var b = document.querySelector(".el-upload-list__item");
      b.style = "transition:0s";
      a.style =
        "position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);display:block;";
      //  a.style="margin:0 auto;display:block;"
    },
    // handleRemove(file, fileList) {
    //   console.log(file, fileList);
    // },
    //点击文件列表中已上传的文件时的钩子,图片放大镜
    handlePictureCardPreview(file) {
      // console.log(4456)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 自定义上传
    // 文件上传

    uploadFile(params) {
      console.log(params);
      // console.log("uploadFile", params);
      this.pic_submitok = false;
      const _file = params.file;
      // const isLt2M = _file.size / 1024 / 1024 < 2;
      // 通过 FormData 对象上传文件
      if (_file) {
        this.pic_submitok = true;
      }
      this.formData = new FormData();
      this.formData.append("file", _file);
      // if (!isLt2M) {
      //   this.$message.error("请上传2M以下的.xlsx文件");
      //   return false;
      // }
    },
    // 确认上传
    submitUpload() {
      this.$refs.upload.submit();
      this.goto();
      // this.$axios({
      //   data: this.formData,
      //   url: `${this.$baseurl}/growthing-02/users/wallet_data`,
      //   method: "get"
      // })
      //   .then(res => {
      //     console.log(111);
         
      //     // this.$router.push({
      //     //   name: "home"
      //     // });
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
  width: 350px;
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
  .submit {
    background: #30313b;
    color: #64656b;
  }
}
</style>


