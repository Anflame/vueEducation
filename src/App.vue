<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <Button @click="showModal">Создать пост</Button>
      <Select v-model="selectedSort" :options="sortOptions"></Select>
    </div>
    <Modal v-model:show="modalVisible">
      <PostForm 
        @create="createPost"
      />
    </Modal>
    <PostList 
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
      />
    <div v-else>Loading...</div>
  </div>
</template>

<script>

import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import Modal from './UI/Modal.vue';
import axios from 'axios';

export default {
  components: {
    PostList,
    PostForm,
    Modal
},
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: true,
      selectedSort: '',
      sortOptions: [
        {
          value: 'title', name: 'Сортировка по назаванию',
        },
        {

          value: 'body', name: 'Сортировка по описанию'
        }
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(currentPost => currentPost.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка', e)
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    }
  }
}

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .app {
    padding: 20px;
  }

  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
</style>
