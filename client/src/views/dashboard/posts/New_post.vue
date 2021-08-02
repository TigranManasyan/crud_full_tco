<template>
  <div>
    <b-container class="mt-2">
      <b-form @submit.prevent="sendPost"  v-if="show">
        <b-row>
          <b-col cols="6">
            <b-form-group
              id="title-label"
              label="Post title:"
              label-for="title"
            >
              <b-form-input
                id="title"
                v-model="form.title"
                type="text"
                placeholder="Post title"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="author-label"
              label="Post author:"
              label-for="author"
              class="mt-3"
            >
              <b-form-input
                id="author"
                v-model="form.author"
                type="text"
                placeholder="Post author"
                required
              ></b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              id="content"
              label="Content:"
              label-for="textarea-small"
              class="mt-3"
            >
            <b-form-textarea
              id="textarea-small"
              size="sm"
              placeholder="Content"
              v-model="form.content"
              style="height:100px"
            ></b-form-textarea>
            </b-form-group>
          </b-col>
        </b-row>
        <b-button class="mt-3" variant="primary" type="submit">
          Add
        </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:'NewPost',
  data() {
    return {
      form:{
        title:'',
        author:'',
        content:''
      },
      show:true
    }
  },
  methods:{
    sendPost() {
      axios.post('posts', this.form).then( response => {
        alert(response.data.message);
      })
    }
  }
}
</script>

<style scoped>

</style>
