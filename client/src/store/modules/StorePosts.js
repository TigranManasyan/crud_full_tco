import axios from 'axios';
export default {
  namespaced:true,
  state:{
    posts:[],
    post:[]
  },
  mutations:{
    storePosts(state, data) {
      state.posts = data;
    },
    storePost(state, data) {
      state.post = data;
    }
  },
  getters:{
    posts: state => state.posts,
    post: state => state.post,
  },
  actions:{
    allPosts(context) {
      axios.get('posts').then( response => {
        context.commit('storePosts', response.data.data);
      })
    },
    onePost(context, id) {
      axios.get(`posts/${id}`).then( response => {
        context.commit('storePost', response.data);
      })
    }
  }
}
