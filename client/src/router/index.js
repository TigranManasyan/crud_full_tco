import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Posts from "../views/dashboard/posts/Posts";
import One_post from "../views/dashboard/posts/One_post";
import New_post from "../views/dashboard/posts/New_post";
import Edit_post from "../views/dashboard/posts/Edit_post";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/posts/all', name: 'Posts', component: Posts },
    { path: '/posts/all/:id', name: 'OnePost', component: One_post },
    { path: '/posts/new', name: 'NewPost', component: New_post },
    { path: '/posts/:id/edit', name: 'EditPost', component: Edit_post },

  ]
})
