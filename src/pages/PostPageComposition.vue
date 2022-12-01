<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <!-- <Input v-model="searchQuery" placeholder="Поиск..." v-focus/>
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
    <Pages :totalPages="totalPages" :page="page" @changePage="changePage"/> -->
  </div>
</template>

<script>

import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import Modal from '@/UI/Modal.vue';
import axios from 'axios';
import Pages from '@/components/Pages.vue';
import { ref } from 'vue';

export default {
  components: {
    PostList,
    PostForm,
    Modal,
    Pages
},
  data() {
    return {
      modalVisible: false,
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
  setup(props) {

    return {
    }
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
