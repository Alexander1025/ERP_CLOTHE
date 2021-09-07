<template>
    <div class="wrap">
        <div class="wrapMain">
            <div>
                这是头部
            </div>
            <div>
                <router-view></router-view>
            </div>
        </div>
        <div class="menu">
            这是侧边栏
        </div>
    </div>
</template>
<script>

   export default {
    name: '',
    data () {
      return {

      };
    },
    components:{

    },
    computed: {

    },
    created () {

    },
    mounted(){

    },
    methods: {

    }
  };
</script>
<style lang="less" scoped>
.wrap{
    width: 100vw;
    height: 100vh;
}
.menu{
    position: fixed;
    top: 0;
    left: 0;
    display: none;
}
</style>
