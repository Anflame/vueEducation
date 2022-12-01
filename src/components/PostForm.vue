<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <Input
      v-model="post.title"
      class="input" 
      placeholder="Название поста" />
    <Input
      v-model="post.body"
      class="input"
      placeholder="Описание поста" />
    <Button class="btn" style="align-self: flex-end" @click="createPost">Создать</Button>
  </form>
</template>

<script>
export default {
  data() {
      return {
          post: {
              title: "",
              body: ""
          }
      };
  },
  methods: {
    createPost() {
        this.post.id = Date.now();
        this.$emit("create", this.post);
        this.post = {
            title: "",
            body: ""
        };
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    display: flex;
    flex-direction: column;
  }
</style>