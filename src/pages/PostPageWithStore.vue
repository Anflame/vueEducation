<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <Input :model-value="searchQuery" @update:model-value="setSearchQuery" placeholder="Поиск..." v-focus/>
    <div class="app__btns">
      <Button @click="showModal">Создать пост</Button>
      <Select :model-value="selectedSort" @update:model-value="setSelectedSort" :options="sortOptions"></Select>
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
  </div>
</template>

<script>

import PostList from '@/components/PostList'
import PostForm from '@/components/PostForm'
import Modal from '@/UI/Modal.vue';
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';

export default {
  components: {
    PostList,
    PostForm,
    Modal
},
  data() {
    return {
      modalVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedSort: 'post/setSelectedSort'
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(currentPost => currentPost.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    }
  },
  mounted() {
    this.fetchPosts()
  },
  computed: {
    ...mapState({
      posts: state => state.post.posts,
      isPostLoading: state => state.post.isPostLoading,
      selectedSort: state => state.post.selectedSort,
      searchQuery: state => state.post.searchQuery,
      page: state => state.post.page,
      limit: state => state.post.limit,
      totalPages: state => state.post.totalPages,
      sortOptions: state => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSeachedPosts: 'post/sortedAndSeachedPosts'
    })
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
