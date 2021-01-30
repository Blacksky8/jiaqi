<template>
  <div>
    <el-row :gutter="20">
      <el-col class="wwt-col" :span="6" style="background:#FFA500">
        <span>{{ list.userCount }}</span>
        <span>用户总数</span>
      </el-col>
      <el-col class="wwt-col" :span="6" style="background:#6BBE6B">
        <span>{{ list.productCount }}</span>
        <span>商品总数</span>
      </el-col>
      <el-col class="wwt-col" :span="6" style="background:#5DB8D2">
        <span>{{ list.orderCount }}</span>
        <span>订单总数</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {wwtHome} from "api/http.js"
export default {
  name: "",
  data() {
    return {
      list:[]
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.getData()
  },
  methods: {
    async getData(){
      const {data:res}=await wwtHome()
      console.log(res)
      if(res.status===0){
        this.list=res.data
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.wwt-col{
  color: #fff;
  width: 200px;
  height: 100px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  span:nth-of-type(1){
    font-size: 18px;
  }
  span:nth-of-type(2){
    padding-top: 20px;
    font-size: 12px;
  }
}
</style>