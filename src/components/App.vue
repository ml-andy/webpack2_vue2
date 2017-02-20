<style lang="scss">
@import "../css/base.scss";
@import "../css/reset.scss";
$color:#ccc;
.loading{
    @include flt;
    z-index: 9999;
    background-color: #012d92;
    span{
        @include am(320px,34px);
        @include font(15px,34px,#fff);
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 3px;
    }
}
.wrapper{
    @include r;
}

</style>

<template lang="pug">
#app
  transition(name="fade",mode="out-in")
    .loading(v-if="loadingShow")
      span Loading...
  .wrapper(data-page="index")
    h1(@click="change") {{ msg }}
    h2 Essential Links
</template>

<!-- compiler es2015 use this -->
<script lang="es6"></script>

<!-- ez for Developer reading -->
<script>
export default {
    name: 'app',
    data(){
        return {
            msg: 'Welcome to Your Vue.js App',
            loadingShow:true
        }
    },
    methods:{
        change(){
            this.msg = 'ya';
        }
    },
    computed: {
    },
    mounted(){
        $(window).load(()=>{
          this.loadingShow = false;
        });
    },
    components:{
        // 'loading':require('Loading'),
    }
}
</script>