<template>
  <button class="button" :disabled="disabled">{{ name }}</button>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/buttons/buttonPrimary.scss';
</style>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
}
</script>
