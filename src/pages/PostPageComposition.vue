

<template>
  <div>
    <h1>Страница с постами</h1>
    <Input
      v-model="searchQuery"
      placeholder="Поиск...."
      v-focus
    />
    <div class="app__btns">
        <Select
        v-model="selectedSort"
        :options="sortOptions" 
        ></Select>
    </div>
    <PostList
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";
import { useSortedPosts } from "@/hooks/useSortedPosts";
import { useSortedAndSearchedPosts } from "@/hooks/useSortedAndSearchedPosts";
export default {
  components: {
    PostList, PostForm
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup(props) {
    const {posts, totalPages, isPostsLoading} = usePosts(10);
    const {sortedPosts, selectedSort} = useSortedPosts(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)
    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
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
