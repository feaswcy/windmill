<template>
  <div id="app">
    <header class="header">
      <nav class="inner">
        <router-link to="/" exact>
          <img class="logo" src="~public/logo-48.png" alt="logo">
        </router-link>
        <a href="https://github.com/feaswcy/windmill" target="_blank" class="help">源代码</a>
      </nav>
    </header>
    <aside>
          <router-link to="/system">
              <i class="iconfont">&#xe600;</i>系统信息</router-link>
            <router-link to="/windmill">
                <i class="iconfont">&#xe62c;</i>
                风场信息</router-link>

            <router-link to="/project">
                <i class="iconfont">&#xe83d;</i>
                风机数据</router-link>

            <router-link to="/graph">
                <i class="iconfont">&#xe66c;</i>
                实时图表</router-link>

          <router-link to="/alarm"><i class="iconfont">&#xe631;</i>
              报警信息</router-link>
        <router-link to="/log">  <i class="iconfont">&#xe64a;</i>操作记录</router-link>
    </aside>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style lang="stylus" rel="stylesheet/stylus">
    @font-face {
        font-family: 'iconfont';  /* project id 287825 */
        src: url('//at.alicdn.com/t/font_0jbu448l31eb3xr.eot');
        src: url('//at.alicdn.com/t/font_0jbu448l31eb3xr.eot?#iefix') format('embedded-opentype'),
                url('//at.alicdn.com/t/font_0jbu448l31eb3xr.woff') format('woff'),
                url('//at.alicdn.com/t/font_0jbu448l31eb3xr.ttf') format('truetype'),
                url('//at.alicdn.com/t/font_0jbu448l31eb3xr.svg#iconfont') format('svg');
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
  z-index 999
  overflow-y scroll
  background #000
  a
    i.iconfont{
      font-size: 32px;
      color: #eee;
      margin: 0 auto 5px;
      display block
      text-align center
    }
    height 80px
    padding-top 8px
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
  .logo{
      font-size:50px;
  }
  .inner
    max-width 800px
    box-sizing border-box
    margin 0 auto
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
  margin 100px 0 0 100px
  position relative
/*! minireset.css v0.0.2 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: normal;
}

ul {
    list-style: none;
}

button,
input,
select,
textarea {
    margin: 0;
}

html {
    box-sizing: border-box;
}

* {
    box-sizing: inherit;
}
*:before, *:after {
    box-sizing: inherit;
}

img,
embed,
object,
audio,
video {
    height: auto;
    max-width: 100%;
}

iframe {
    border: 0;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

td,
th {
    padding: 0;
    text-align: left;
}
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
