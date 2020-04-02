<template>
  <div class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on: '/Home'===$route.path}" @click="goTo('/Home')">
      <span class="item_icon">
        <i class="iconfont icon-all"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/BuyCar'===$route.path}" @click="goTo('/BuyCar')">
      <span class="item_icon">
        <i class="iconfont icon-auto"></i>
      </span>
      <span>买车</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/Order'===$route.path}" @click="goTo('/Order')">
      <span class="item_icon">
        <i class="iconfont icon-rejected-order"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/Profile'===$route.path}" @click="goTo('/Profile')">
      <span class="item_icon">
        <i class="iconfont icon-bussiness-man"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>

<script>
    export default {
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.footer_guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 50px
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
    &.on
      color #02a774
    span
      font-size 12px
      margin-top 2px
      margin-bottom 2px
      .iconfont
        font-size 22px
</style>
