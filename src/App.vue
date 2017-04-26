<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <router-link to="/job" class="help">help</router-link>
      </nav>
    </header>
    <aside>
        <div class="">
            <i class="iconfont">&#xe600;</i>
          <router-link to="/system">system</router-link>
        </div>
        <div class="">
            <i class="iconfont">&#xe62c;</i>
            <router-link to="/windmill">windmill</router-link>
        </div>
        <div class="">
            <i class="iconfont">&#xe631;</i>
          <router-link to="/alarm">alarm</router-link>
        </div>
        <div class="nav">
            <i class="iconfont">&#xe64a;</i>
          <router-link to="/log">log</router-link>
        </div>
    </aside>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
    import $ from 'jquery'

    console.log($);
//    let domain = 'http://10.3.29.9/';
//
//    $.ajax({
//        url:domain+'WaWebService/JSON/NodeList/WPMSServer',
//        type:'get',
//        beforeSend: function(request) {
//            request.setRequestHeader("Authorization", "Basic YWRtaW46YWRtaW4=");
//        },
////            data:{}
//        success:function(data){
//            console.log(data);
//        }
//    });
</script>

<style lang="stylus" rel="stylesheet/stylus">

@font-face {
        font-family: 'iconfont';  /* project id 287825 */
        src: url('//at.alicdn.com/t/font_vbcme0myccot7qfr.eot');
        src: url('//at.alicdn.com/t/font_vbcme0myccot7qfr.eot?#iefix') format('embedded-opentype'),
                url('//at.alicdn.com/t/font_vbcme0myccot7qfr.woff') format('woff'),
                url('//at.alicdn.com/t/font_vbcme0myccot7qfr.ttf') format('truetype'),
                url('//at.alicdn.com/t/font_vbcme0myccot7qfr.svg#iconfont') format('svg');
}
    .iconfont{
        color:#fff;
        font-family:"iconfont" !important;
        font-size:16px;font-style:normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
    }
body
  font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  font-size 15px
  background-color lighten(#eceef1, 30%)
  margin 0
  padding-top 80px
  padding-left 80px
  color #34495e
  overflow-y scroll
a
  color #34495e
  text-decoration none
aside
  width 80px
  position fixed
  left 0
  top 80px
  bottom 0
  overflow-y scroll
  background #000
  div{
      height 70px
      i.iconfont{
          font-size: 32px;
          color: #eee;
          margin: 0 auto 5px;
          display block
          text-align center
      }

    }
  a
    color #fff
    display block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    text-align center
    &:hover
      background #3969a5
    &.router-link-active
      background #3969a5
      font-weight 400
    &:nth-child(6)
      margin-right 0
.header
  background-color #ff6600
  position fixed
  z-index 999
  height 80px
  top 0
  left 0
  right 0
  .inner
    max-width 800px
    box-sizing border-box
    margin 0px auto
    padding 15px 5px
  .help
    float right
    margin-right 20px

  a
    color rgba(255, 255, 255, .8)
    line-height 24px
    transition color .15s ease
    display inline-block
    vertical-align middle
    font-weight 300
    letter-spacing .075em
    margin-right 1.8em
    &:hover
      color #fff
    &.router-link-active
      color #fff
      font-weight 400
    &:nth-child(6)
      margin-right 0
  .github
    color #fff
    font-size .9em
    margin 0
    float right

.logo
  width 24px
  margin-right 10px
  display inline-block
  vertical-align middle

.view
  max-width 1000px
  margin 0 auto
  position relative

/*.fade-enter-active, .fade-leave-active*/
  /*transition all .2s ease*/

/*.fade-enter, .fade-leave-active*/
  /*opacity 0*/

/*@media (max-width 860px)*/
  /*.header .inner*/
    /*padding 15px 30px*/

/*@media (max-width 600px)*/
  /*body*/
    /*font-size 14px*/
  /*.header*/
    /*.inner*/
      /*padding 15px*/
    /*a*/
      /*margin-right 1em*/
    /*.github*/
      /*display none*/
</style>
