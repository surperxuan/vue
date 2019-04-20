<template>
<div>
    <hgroup>{{title}}</hgroup>
   
    <van-notice-bar
		  text="保持光彩肌肤，每天我都在努力， 不仅要对抗肌肤疲劳，还要对抗，蚊子叮咬。全新龙虎牌万金油含Pro-Rentinol A(维生素A）j减少疲劳，Fibre-Elastyl(活性多维紧致素)去除小包，恢复紧致，短短7天，肌肤焕发光彩，全新龙虎牌万金油，你 值得拥有！"
		  left-icon="volume-o"/>
			<component :is="home"></component>
</div>
</template>
<script>
import home from './home';
export default {
    methods: {
		},
		data() {
    	return {
				title:'玩意手工',
				home:"home"
    }
	},
	components:{
	home
	}
}
</script>
<style scoped>
    #nav{
	width: 100%;
	background: #00B7FF;
	height:50px;
	line-height: 50px;
	font-size: 22px;
	background-image: url(../assets/7.png);
}
a{
	text-decoration: none;
}
.fhui{
	float: left;
	margin-left: 15px;
	line-height: 50px;
}
</style>


