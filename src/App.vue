<template>
  <div id="app">
    <login></login>
    <div class="main-wrapper">
      <v-header></v-header>
      <v-line></v-line>
      <div class="content">
        <div class="left">
          <div class="userInfo">
            <div class="avator">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg" width="159" height="159">
            </div>
            <ul>
              <li class="info" v-for="item in userInfo">
                {{item.type}}:{{item.text}}
              </li>
            </ul>
          </div>
          <v-line></v-line>
          <div class="articleType-wrapper">
            <h1 class="title">文章分类</h1>
            <ul>
              <li class="articleType" v-for="item in articleType">
                {{item.text}}
              </li>
            </ul>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import login from './components/login/login';
  import header from './components/header/header';
  import line from './components/line/line';

  export default {
    components: {
      login,
      'v-header': header,
      'v-line': line
    },
    data() {
      return {
        userInfo: [
          {
            type: '手机',
            text: 13616550171
          },
          {
            type: 'Github',
            text: 'ZhuQiQiForG'
          },
          {
            type: '邮箱',
            text: 'zhuqiqiforg@gmial.com'
          }
        ],
        articleType: [
          {text: 'HTML'},
          {text: 'CSS'},
          {text: 'JS,ES2015,ES2016'}
        ]
      };
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    background: #dedede
    .main-wrapper
      margin: 0 auto
      width: 990px
      min-height: 560px
      background: #fff
      .content
        display: flex
        margin: 0 auto
        padding-top: 15px
        width: 950px
        .left
          flex: 0 0 288px
          width: 288px
          border-right: 1px solid #333
          .userInfo
            width: 100%
            .avator
              margin: 0 auto
              width: 159px
              height: 159px
              border-radius: 50%
              overflow: hidden
            .info
              margin: 10px 0
              text-align: center
          .articleType-wrapper
            width: 100%
            text-align: center
            .title
              margin-top: 20px
              font-size: 16px
              font-weight: 700
            .articleType
              margin: 10px 0
              text-align: center
              text-decoration: underline
        .right
          flex: 1
</style>
