<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <Input v-model="searchQuery" placeholder="Поиск..."/>
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
      :posts="sortedAndSeachedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
      />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <Pages :totalPages="totalPages" :page="page" @changePage="changePage"/> -->
  </div>
</template>

<script>

import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import Modal from '@/UI/Modal.vue';
import axios from 'axios';
import Pages from '@/components/Pages.vue';

export default {
  components: {
    PostList,
    PostForm,
    Modal,
    Pages
},
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: true,
      selectedSort: '',
      searchQuery: '',
      page: 1, 
      limit: 10,
      totalPages: 0,
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
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка', e)
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
        this.posts = [...this.posts, ...response.data]
      } catch (e) {
        alert('Ошибка', e)
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    }
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]));
    },
    sortedAndSeachedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery));
    }
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}

</script>

<style>

  .app__btns {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }
</style>
