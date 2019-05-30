<template>
  <div class="language fr">
    <el-dropdown @command="handleCommand" trigger="click">
      <span class="el-dropdown-link">
        {{gg}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="English">English</el-dropdown-item>
        <el-dropdown-item command="complex">繁體中文</el-dropdown-item>
        <el-dropdown-item command="simple">简体中文</el-dropdown-item>
        
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  name: "language",
  computed: {
    gg: function() {
      if (this.$store.state.lang == "complex") {
        return "繁体中文";
      } else if (this.$store.state.lang == "simple") {
        return "简体中文";
      } else if (this.$store.state.lang == "English") {
        return "English";
      }
    }
  },
  methods: {
    handleCommand(command) {
      (this.$i18n.locale = command),
        // this.languange=command
        this.$store.commit("currencylang", command);
      // sessionStorage.setItem("lang", this.languange);
      // this.$message("click on item " + command);
    }
  }
};
</script>
<style>
.language {
  margin-right: 30px;
  font-size: 12px;
  
}
.el-dropdown-link {
  cursor: pointer;
  /* color: white; */
  border: 0;
  color:#cbcfd8;
}
.el-icon-arrow-down {
  font-size: 12px;
  color:#cbcfd8;
}
</style>


