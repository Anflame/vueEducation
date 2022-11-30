<template>
  <select :model="modelValue" @change="changeValue">
    <option disabled value="" selected>Выберите из списка</option>
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

</style>