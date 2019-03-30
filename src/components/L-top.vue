<template>
  <div>
    <router-link v-for='(item,index) in lost' :key='index' :to="{name:'lview',params:{id:item.id}}">
    <dl>
        <dt><img :src='item.picurl'/></dt>
        <dd>{{item.name}}</dd>
    </dl>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      lost:''
    }
  },
  created() {
    this.$ajax
      .get("http://47.104.244.134:8080/goodsbytid.do", {
        params: { tid: 13, page: 3, limit: 5 }
      })
      .then(response => {
        this.lost = response.data.data;
      })
      .catch(error => {
        console.log(error);
      }); //list
}
}
</script>




