<template>
  <div class="hello">
    <div class="container">
      <div class="page-header">
        <button class="btn btn-info">这是一个很简单的页面</button>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.hello {
  div {
    text-align: center;
  }
}
</style>
