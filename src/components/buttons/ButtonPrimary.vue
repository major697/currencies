<template>
  <button
    class="button"
    :class="{ 'button--black': dark }"
    :disabled="disabled"
  >
    <img
      v-if="getIcon"
      :src="getIcon"
      alt="icon-button"
      class="button__icon"
    />
    <span v-if="name">{{ name }}</span>
  </button>
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
      default: null,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    icon: {
      type: String,
      default: null,
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getIcon() {
      return this.icon
        ? require(`@/assets/img/svg/${this.icon}`)
        : false
    },
  },
}
</script>
