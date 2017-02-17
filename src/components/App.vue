<template>
  <div id="app">
    <h1 @click="change">{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:()=>{
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    change:function(){
      this.msg = 'ya';
    }
  }
}
</script>
<!--<style{{#sass}} lang="scss"{{/sass}}>
#app {
  background-color: #000;
}
</style>-->