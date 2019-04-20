<template>
  <div class="bob">
    <section>
      <router-view></router-view>
    </section>
    <footer v-if="!$route.meta.isHideTopAndBottom">
      <van-tabbar v-model="active" class='fot' @change="navchange">
        <van-tabbar-item icon="wap-home" class="fix">首页</van-tabbar-item>
        <van-tabbar-item icon="wap-home" class="fix">分类</van-tabbar-item>
        <van-tabbar-item icon="home-o" class="fix">我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
        active:0
    };
  },
  methods: {
    navchange(){
      switch(this.active){
        case 0:
        this.$router.push({
          name:'index'
        })
        break;
        case 1:
        this.$router.push({
          name:'List'
        })
        break;
        case 2:
        this.$router.push({
          name:'our'
        })
        break;
      }
    }
  }
};
</script>
<style>
body,
html {
  height: 100%;
  font-size: 16px;
}
.bob {
  height: 100%;
  display: flex;
  flex-direction: column;
}
hgroup {
  height: 10%;
  background: orangered;
}
section {
  min-height: 90%;
  width: 100%;
  overflow: auto;
}
footer {
  min-height: 10%;
  width: 100%;
}
.fot{
    padding-top:0.2rem;display:flex;justify-content: space-around;
}
.fix{font-size:1rem}
</style>

