<template>
  <div class="wwt-container">
    <div class="wwt-box">
      <div class="wwt-title">
        <h3>欢迎登录 - MMALL管理系统</h3>
      </div>
      <el-form :model="users" :rules="rules" ref="users">
        <el-form-item prop="username">
          <el-input v-model="users.username" placeholder="username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="users.password" placeholder="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn" @click="wwt_login"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { wwtLogin } from "api/http.js";
export default {
  name: "",
  data() {
    return {
      users: {
        username: "admin",
        password: "admin",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    wwt_login() {
      this.$refs.users.validate(async (valid) => {
        if(!valid) return
        const { data: res } = await wwtLogin(this.users);
        if(res.status!==0){
          this.$message.error(res.msg)
          return false;
        }
        this.$message.success(res.msg)
        this.$router.push("/home");
        this.$store.commit('wwtName',res.data.username)
        console.log(res)
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.wwt-container {
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  // position: relative;
  .wwt-box {
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    padding: 0px 20px;
    border-radius: 5px;
    .wwt-title {
      height: 50px;
      line-height: 50px;
    }
  }
}
.btn {
  width: 100%;
}
</style>