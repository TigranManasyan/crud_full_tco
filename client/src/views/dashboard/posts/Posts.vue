<template>
  <div>
    <b-container>
      <h2>All posts</h2>
      <b-table
        :items="posts"
        :fields="fields"
      >
        <template v-slot:cell(action)="data">
          <router-link :to="{name:'OnePost', params:{id:data.item.id}}">
              More
          </router-link>
        </template>
      </b-table>
    </b-container>

  </div>
</template>

<script>
export default {
  name:'Posts',
  data() {
    return {
      fields:[
        {key:'id'},
        {key:'title'},
        {key:'author'},
        {key:'action'}
      ]
    }
  },
  mounted() {
    this.$store.dispatch('StorePosts/allPosts');
  },
  computed:{
    posts() {
      return this.$store.getters['StorePosts/posts']
    }
  }
}
</script>

<style scoped>

</style>
