<template>
  <div v-if="(posts.length > 0)">
    <h3>Список постов</h3>
    <PostItem
      v-for="post in posts"
      :post="post"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else style="color: red; text-align: center;">Список пуст</h2>
</template>

<script>
import PostItem from '@/components/PostItem';
export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>