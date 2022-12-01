<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'Button',
  }
</script>

<style lang="scss" scoped>
  .btn {
    padding: 10px 15px;
    border: 1px solid green;
    background: none;
    color: green;
    cursor: pointer;
  }
</style>