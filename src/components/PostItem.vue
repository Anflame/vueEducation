<template>
  <div class="post">
    <div>
      <div><strong>Название: </strong>{{ post.title }}</div>
      <div><strong>Описание: </strong>{{ post.body }}</div>
    </div>
    <div class="post__btns">
      <Button @click="$router.push(`/posts/${post.id}`)">Открыть</Button>
      <Button class="btn" style="align-self: flex-end" @click="$emit('remove', post)">Удалить</Button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
        type: Object,
        required: true,
    }
  }
}
</script>

<style lang="scss" scoped>
.post {
  border: 2px solid green;
  padding: 10px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
  grid-gap: 5px;
  margin-left: 5px;
}
</style>