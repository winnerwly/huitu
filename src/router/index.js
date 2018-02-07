import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: _ => require.ensure([], () => _(require('@/components/HelloWorld')), 'HelloWorld')
    }
  ]
})
