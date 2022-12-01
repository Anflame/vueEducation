<template>
  <select :value="modelValue" @change="changeValue" class="select">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options" :value="option.value" :key="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    changeValue(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.select {
  cursor: pointer;
}
</style>