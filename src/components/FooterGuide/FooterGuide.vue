<template>
  <div class="footer_guide">
    <div class="guide_item" :class="{on: '/home'===$route.path}" @click="goTo('/home')">
      <span class="item_icon">
        <i class="iconfont icon-tuanduicankaoxian-11"></i>
      </span>
      <span>外卖</span>
    </div>
    <div class="guide_item" :class="{on: '/search'===$route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-tuanduicankaoxian-7"></i>
      </span>
      <span>搜索</span>
    </div>
    <div class="guide_item" :class="{on: '/order'===$route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-tuanduicankaoxian-8"></i>
      </span>
      <span>订单</span>
    </div>
    <div class="guide_item" :class="{on: '/profile'===$route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-tuanduicankaoxian-6"></i>
      </span>
      <span>我的</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FooterGuide",
    methods:{
      goTo(path){
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../common/sass/mixins.scss";

  .footer_guide{
    @include top-border-1px(#e4e4e4)
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    .guide_item{
      display: flex;
      flex: 1;
      text-align: center;
      flex-direction: column;
      align-items: center;
      margin: 5px;
      color: #999999;
      &.on{
        color: #02a774;
      }
    }
    span{
      font-size: 12px;
      margin-top: 2px;
      margin-bottom: 2px;
      .iconfont{
        font-size: 22px;
      }
    }
  }
</style>
