import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/hr'
    },
    {
      path: '/hr',
      component: () => import('../page/Main/Main.vue'),
      children: [
        {
          path: 'hrList',
          // 路由懒加载
          component: () => import("../page/Main/MainList/MainList.vue")
        },
        {
          path: 'timeList',
          // 路由懒加载
          component: () => import("../page/Main/TimeList/MainList.vue")
        },
        {
          path: 'wagesList',
          // 路由懒加载
          component: () => import("../page/Main/WagesList/MainList.vue")
        },
        {
          path: 'enterList',
          // 路由懒加载
          component: () => import("../page/Main/EnterList/MainList.vue")
        },
        {
          path: 'regularList',
          // 路由懒加载
          component: () => import("../page/Main/RegularList/MainList.vue")
        },
        {
          path: 'leaveList',
          // 路由懒加载
          component: () => import("../page/Main/LeaveList/MainList.vue")
        },
        {
          path: 'TrainingList',
          // 路由懒加载
          component: () => import("../page/Main/TrainingList/MainList.vue")
        },
        {
          path: 'anaCharts',
          // 路由懒加载
          component: () => import("../page/Main/AnaCharts/MainList.vue")
        },
        {
          path: '',
          redirect: 'hrList'
        }
      ]
    }
  ]
})