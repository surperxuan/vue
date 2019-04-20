<template>
<div class = "Reg">
     <div class ="header">
        <van-icon @click = "goBack()" class ="close" name="close" />
        <p>登录后可查看主页</p>
    </div>
    <div class ="txt">
         <van-cell-group>
        <van-field v-model="userName" placeholder="请输入用户名" />
        </van-cell-group>
         <van-cell-group>
        <van-field v-model="password" placeholder="请输入密码" />
        </van-cell-group>
    </div>
   <van-button class='btn' @click = "btn" round type="danger">登录</van-button>
     <van-button class='oLin' @click = "oLin" round>注册</van-button>
</div>
   
       
</template>
<script>
import axios from 'axios'
import {LoginIn} from '../utils/auth.js'
export default {
    data(){
       return{
           userName:'',
           password:''
       }
    },
    methods:{
        btn(){
           this.loadData()
        },
        oLin(){
           this.$router.push({
               name:'Reg'
           })
        },
        loadData(){
             var _this = this
            axios({
                method:"post",
                url:'http://api.cat-shop.penkuoer.com/api/v1/auth/login',
                data:{userName:_this.userName,password:_this.password}
            }) 
            .then(res=>{
                
                if(res.data.code == "success"){
                    LoginIn(res.data.token),
                    _this.$router.push('/')
                }
            })    
        },
        goBack(){
            this.$router.back()
        }
    }

}
</script>
<style scoped>
    .Reg{
        width:100%;
        display: flex;
        justify-content: center;
        align-content: center
    }
    .header{
        height:80px;
        width:100%;

    }
    .close{
        position:absolute;
        left:20px;
        top:20px;
    }
    .header p {
        position:absolute;
        top:40px;
        left:120px;
    }
    .txt{
        position:absolute;
        top:130px;
       
        width:300px
    }
    .btn{
        width:260px;
        background:#ccc;
        position:absolute;
        top:300px;
       
    }
    .oLin{
        width:260px;
        background:red;
        position:absolute;
        top:400px;
       
    }
</style>
