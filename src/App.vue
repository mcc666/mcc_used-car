<template>
    <div>
      <router-view/>
      <FooterGuide v-show="$route.meta.showFooter"/>
    </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'

    export default {
      mounted(){
          this.getUserInfo()
      },
      methods:{
        ...mapActions(['getUserInfo'])
      },
      components:{
        FooterGuide
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
