<template>
    <div>
        <span @click="$router.go(-1)"><van-icon name="arrow-left" /></span>
        <ul>
        <li><img :src='lost.picurl'/></li>
        <li>{{lost.name}}</li>
        <li>产地：{{lost.info}}</li>
        <li>推荐价：{{lost.price}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
            return{
               lost:'',
               pages:''
            }
        },
        created(){
        this.pages=this.$route.params.id
        this.$ajax.get('http://47.104.244.134:8080/goodsbyid.do',{params:{id:this.pages}})
        .then((response)=>{this.lost=response.data})
        .catch((error)=>{console.log(error)})
    }
}
</script>
<style lang="sass" scoped>

</style>
