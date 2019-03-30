<template>
    <div class="bob">
    <section>
    <router-view></router-view>
    </section>
    <footer v-if="!$route.meta.isHideTopAndBottom">
    <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'List'}">分类</router-link>
    <router-link :to="{name:'our'}">个人</router-link>
    </footer>
    </div>
</template>
<script>
export default{
    data(){
        return{
            title:'首页',
        }
    },
    methods:{
    }
}
</script>
<style>
  body,html{height:100%;font-size:0.4rem;}
  .bob{height:100%;display:flex;flex-direction: column;}
  hgroup{height:10%;background:orangered;}
  section{min-height:90%;width:100%;overflow:auto;}
  footer{min-height:10%;width:100%;background:red;}
</style>

