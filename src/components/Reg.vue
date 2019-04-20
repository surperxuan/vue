<template>
    <div class = "Login">
        <div class ="header">
            <van-icon class ="arrow-left" name="arrow-left" @click="goBack()"/>
            <p>注册</p>
        </div>
        <div class ="txt">
            <van-cell-group>
                <van-field v-model="userName" placeholder="请输入用户名" />
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="password" placeholder="请设置密码" />
            </van-cell-group>
            <van-cell-group>
                <van-field v-model="password1" placeholder="请再次输入密码" />
            </van-cell-group>
        </div>
        
            
        <div @click = "reg" class ="box">同意协议并注册</div>
        <span>注册即视为同意<a href="#">《好用物分享平台服务协议》</a></span>
    </div>
</template>
<script>

import axios from 'axios'
import {LoginIn} from '../utils/auth.js'
export default {
    data(){
        return{
            userName:"",
            password:"",
            password1:""
        }
    },
   mounted(){
   },
     methods:{
        reg(){
            this.loadData() 
             if(this.userName == ''){
             alert('手机号码不能为空')
       }else if(this.password == ''){
           alert('密码不能为空')
       }else if(this.password1 != this.password){
           alert('请重新确认密码')
       }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        },
        loadData(){
            var _this = this
            axios({
                method:"post",
                url:'http://api.cat-shop.penkuoer.com/api/v1/auth/reg',
                data:{userName:_this.userName,password:_this.password}
            })      
            .then(res=>{
                console.log(res)
                if(res.data.code == "success"){
                    if(_this.password1 === _this.password ){
                    LoginIn(res.data.token),
                    _this.$router.push('/login')
                    }
                }else{
                    // console.log(33)
                  alert('该用户名已存在')
                   }
                }
            )
        },
        goBack(){
            this.$router.back()
        }
    }, 
   
    
}
</script>
<style scoped>
    .Login{
    width:100%;
    display: flex;
    justify-content: center;
    align-content: center

    }
    .header{
         height:80px;
         width:100%;
        border-bottom:1px solid #ccc;
       
    }
    .arrow-left{
        position: absolute;
        left:20px;
        top:35px;
       
    }
    .header p{
        width:100%;
        line-height:50px;
        text-align: center;
        display: block
    }
    .box{
        height:50px;
        width:300px;
        position: absolute;
        top:340px;
        
        background:chocolate;
        border-radius: 15px;
        font-size:14px;
        line-height:50px;
        text-align: center;
        color:#fff

    }
    span{
        position:absolute;
        top:400px;
        
        font-size:14px;
    }
    .txt{
        position:absolute;
        top:160px;
        width:300px;
    }
</style>
