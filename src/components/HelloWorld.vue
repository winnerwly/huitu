<template>
  <div class="hello">
    <div class="content">
      <div class="header">慧途信息科技有限公司</div>
      <div class="photo">
        <div class="left">知识影响未来</div>
        <img src="/static/img/slg.png" alt="">
      </div>
      <div class="nav">
        <ul>
          <li>关于我们</li>
          <li>服务项目</li>
          <li>新闻中文</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang='less' scoped>
.left {
  float: left;
  color: #fff;
  font-size: 40px;
}
.hello {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  position: relative;
  background-image: url(/static/img/about.jpg);
  .content {
    .header {
      font-size: 20px;
      color: #f00;
      text-align: center;
    }
    width: 800px;
    height: 400px;
    position: relative;
    top: 50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -400px;
  }
}
</style>
