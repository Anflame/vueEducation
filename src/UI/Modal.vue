<template>
  <div class="modal" v-show="show" @click="hideModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from '@/mixins/toggleMixin';

export default {
  name: 'Modal',
  mixins: [toggleMixin]
}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.3);
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
}

.modal__content {
  margin: auto;
  background-color: white;
  border-radius: 12px;
  min-height: 50px;
  min-width: 300px;
  padding: 15px;
}
</style>