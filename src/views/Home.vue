<template>
  <div class="container">
    <el-container>
      <el-header>
        <div class="header-left">HAPPY MMALL</div>
        <div class="header-right" @click="logout">
          欢迎,{{ $store.state.username }}
          <el-button type="text">退出</el-button>
        </div>
      </el-header>
      <el-container>
        <el-aside width="250px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            unique-opened
            router
          >
            <el-menu-item index="/home/index">
              <template slot="title">
                <i class="el-icon-s-marketing"></i>
                <span>首页</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-shop"></i>
                <span>商品</span>
              </template>
              <el-menu-item index="/product/index">商品管理</el-menu-item>
              <el-menu-item index="2-2">品类管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-success"></i>
                <span>订单</span>
              </template>
              <el-menu-item index="3-1">订单管理</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>用户</span>
              </template>
              <el-menu-item index="4-1">用户列表</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <div class="wwt-a">
            {{ $store.state.wwtRoute }}
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { wwtLogout } from "api/http.js";
export default {
  name: "",
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    async logout() {
      const Logout = await this.$confirm(
        "是否退出?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      ).catch((err) => err);
      if (Logout !== "confirm") {
        return this.$message.info("已取消退出");
      }
      const { data: res } = await wwtLogout();
      if (res.status === 0) {
        this.$router.push("/");
        this.$message.success("成功退出");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: #f0f0f0;
  height: 100%;
  .el-container{
    height: 100%;
  }
  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #fff;
    padding: 0px;
    .header-left {
      width: 230px;
      height: 60px;
      line-height: 60px;
      padding: 10px;
    }
    .header-right {
      padding: 0px 20px;
      font-size: 14px;
    }
  }
  .el-menu {
    border: none;
  }
}
.el-aside {
  height: 100%;
  background: #545c64;
}
.el-main{
  height: 100%;
}
.wwt-a{
  padding-bottom: 20px;
  font-size: 20px;
  color: #545c64;
  border-bottom: 1px solid #ddd;
}
</style>