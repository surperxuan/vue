// 存储token，
export function LoginIn(token){
    sessionStorage.setItem("token",token)
}
//，读取token
export function IsLogin(){
    if(sessionStorage.getItem("token")){
        return true
    }else{
        return false
    }
}
//删除token；
export function LoginOut(){
    sessionStorage.removeItem("token")
} 