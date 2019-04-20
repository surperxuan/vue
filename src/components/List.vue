<template>
  <div id="app">
    <hgroup>{{title}}</hgroup>
    <div class="main">
      <van-swipe :autoplay="3000" indicator-color="white" class="banner">
        <van-swipe-item>
          <img src="../assets/image/timg (1).jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/image/timg (2).jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/image/timg (3).jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/image/timg.jpg">
        </van-swipe-item>
      </van-swipe>
      <ul class="choose">
        <li v-for="(item) in txt" :key="item.id">
          <router-link :to="{name:'L-list',params:{id:item.id}}">{{item.name}}</router-link>
        </li>
        <li v-for="(item,index) in txtt" :key="index">
          <router-link :to="{name:'L-list',params:{id:item.id}}">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <span @click="change='today'">今日推荐</span>
    <span @click="change='tolist'">小编力推</span>
    <component :is="current"></component>
  </div>
</template>
<script>
import today from './L-today';
import tolist from './L-top';
export default {
  name: "app",
  data() {
    return {
      title: "分页",
      txt: "",
      txtt: "",
      change:'today'
    };
  },
  components: {
    today,
    tolist
  },
  computed:{
    current(){
      return this.change
    }
  },
  methods: {
  },
  created() {
    this.$ajax
      .get("http://47.104.244.134:8080/goodstypelist.do", {
        params: { l: 1 }
      })
      .then(response => {
        this.txt = response.data;
      })
      .catch(error => {
        console.log(error);
      }); //txt
    this.$ajax
      .get("http://47.104.244.134:8080/goodstypelist.do", {
        params: { l: 2 }
      })
      .then(response => {
        this.txtt = response.data;
      })
      .catch(error => {
        console.log(error);
      }); //txtt
  }
};
</script>

<style scoped>
#app {
  height: 100%;
}
#app .main {
  height: 40%;
  background: blue;
}
#app .main .banner {
  width: 96%;
  height: 60%;
  position: relative;
  left: 2%;
  padding:0.1rem 0;
  border-radius: 10%;
}
#app .main .banner img {
  width: 100%;
  height: 100%;
}
.choose {
  display:flex;
  flex-wrap: wrap;
  padding:0 0.3rem;
  justify-content: space-around;
}
.choose li {
  float: left;
  height:0.5rem;
  text-align: center;
  margin-bottom:0.1rem;
  width:2rem;
  background: orange;
}
</style>
