<template>
  <div class="page__wrapper">
    <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
      'current-page': page === pageNumber
    }" @click="changePage(pageNumber)">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    totalPages: Number,
    page: Number,
  },
  methods: {
    changePage(pageNumber) {
      this.$emit('changePage', pageNumber)
    }
  }
};
</script>

<style lang="scss" scoped>
.page__wrapper {
  display: flex;
  margin: 15px auto;
}

.page {
  border: 1px solid black;
  padding: 10px;
}

.current-page {
  border: 2px solid green;
}
</style>
