import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import Page from '@/components/pages/page'
import child1 from '@/components/pages/about1'
import child2 from '@/components/pages/about2'
import child3 from '@/components/pages/about3'
import Menu from '@/components/pages/menu'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/index',
      name: '首頁',
      component: Home
    },
    {
      path: '/page',
      // name: '分頁',
      // component: Page,
      components:{
        default: Page,
        menu: Menu
      },
      children: [
        {
          path: '',
          name: '關於1',
          component: child1
        },
        {
          path: 'child2',
          name: '關於2',
          component: child2
        },
        {
          path: 'child3',
          name: '關於3',
          component: child3
        }
        // {
        //   path: 'child/:id',
        //   name: '關於3',
        //   component: child3
        // }
      ],
    }
    // {
    //   path: '/about',
    //   name: '關於',
    //   component: About
    // }
  ]
})
