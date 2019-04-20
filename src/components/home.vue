<template>
  <div class="home" style="position: relative;">
  	<van-search placeholder="请输入搜索关键词" v-model="value"/>
  	<van-swipe :autoplay="3000" indicator-color="white">
	  	<van-swipe-item><img src="../assets/1.jpg"/></van-swipe-item>
	  	<van-swipe-item><img src="../assets/2.jpg"/></van-swipe-item>
	  	<van-swipe-item><img src="../assets/3.jpg"/></van-swipe-item>
	  	<van-swipe-item><img src="../assets/4.jpg"/></van-swipe-item>
		</van-swipe>
		<div @click="wdd()" class="wd" style="border-radius: 50%;background: #eee;color: #000;
			width:50px;height: 50px;font-size: 18px;line-height: 50px;
			position:fixed;right: 0;bottom:90px;
			">
			问答
		</div>
		<div class="ceter">
		<h3>—— 主编推荐 ——<router-link class="jt" to="/lview">></router-link></h3>
		<div class="logo" style="box-shadow:0px 0px  10px 5px #aaa;width: 100%;">
			<img @click="wdds()" src="../assets/4.jpg"/>
			<span class="jpjh" style="color: #000;">
				超轻黏土的春天~精品大合集~
			</span>
		</div>
		<h3>—— 主编推荐 ——<router-link class="jt" to="/lview">></router-link></h3>
		<div class="logo" style="box-shadow:0px 0px  10px 5px #aaa;width: 100%;">
			<img @click="wdds()" src="../assets/5.png"/>
			<span class="jpjh" style="color: #000;">
				超轻黏土的春天~精品大合集~
			</span>
		</div>
		<h3>—— 主编推荐 ——<router-link class="jt" to="/lview">></router-link></h3>
		<div class="logo" style="box-shadow:0px 0px  10px 5px #aaa;width: 100%;">
			<img @click="wdds()" src="../assets/6.png"/>
			<span class="jpjh" style="color: #000;">
				超轻黏土的春天~精品大合集~
			</span>
		</div>
		</div>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
        value:''
    	}

  },
  components:	{
  },
  methods:{
  	 wdd(){
  	 	this.$router.push('/list-view')
  		},
  		wdds(){
  	 	this.$router.push('/list-view')
  		}
}
 }
</script>
<style scoped>
	img{
		width: 100%;
		height: 170px;
	}
	.jt{
		color: white;
		background: red;
		border-radius: 50%;
		width: 25px;
		height: 25px;
		display: block;
		float:right;
	}
	h3{
		color: #000;
	}
	.ceter{
		padding-bottom:50px;
	}
</style>

