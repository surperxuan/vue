<template>
<div>
    <span @click="$router.go(-1)"><van-icon name="arrow-left" /></span>
    <router-link v-for='(item,index) in lost' :key='index' :to="{name:'lview',params:{id:item.id}}">
    <dl>
        <dt><img :src='item.picurl'/></dt>
        <dd>{{item.name}}</dd>
    </dl>
    </router-link>
</div>
</template>
<script>
    export default{
        data(){
            return{
               lost:'',
               pages:''
            }
        },
        created(){
        this.pages=this.$route.params.id
        this.$ajax.get('http://47.104.244.134:8080/goodsbytid.do',{params:{tid:13,page:this.pages,limit:10}})
        .then((response)=>{this.lost=response.data.data})
        .catch((error)=>{console.log(error)})
    }
    }

</script>
<style scoped>
</style>
