<template>
  <div>
      <b-container class="mt-3">
        <h2>{{ post.title}}</h2>
        <p>Author` {{post.author}}</p>
        <p>Published {{ post.created_at}}</p>
        <p>{{post.content}}</p>

        <b-button variant="danger" @click="deletePost">Delete</b-button>
        <b-button variant="success">
          <router-link :to="{name:'EditPost', params:{id:post.id}}">Edit</router-link>
        </b-button>
      </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:'OnePost',
  data() {
    return {
      id:null
    }
  },
  mounted() {
    let id = this.$route.params.id;
    this.$store.dispatch('StorePosts/onePost', id)
  },
  computed:{
    post() {
      return this.$store.getters['StorePosts/post']
    },

  },
  methods:{
    deletePost() {
      axios.delete(`posts/${this.$route.params.id}`).then( response => {
        this.$router.push({name:'Posts'});
      })
    }
  }

}
</script>

<style scoped>

</style>
