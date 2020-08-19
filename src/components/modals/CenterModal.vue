<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-mask__wrapper">
        <div class="modal-mask__container">
          <div class="modal-mask__header">
            <div class="modal-mask__header--pos">
              <slot name="header"></slot>
              <div class="modal-mask__button">
                <button
                  class="modal-mask__button__close"
                  @click="$emit('close-modal')"
                >
                  <img
                    src="@/assets/img/svg/close.svg"
                    alt="close_button"
                  />
                </button>
              </div>
            </div>
          </div>

          <div class="modal-mask__body">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/modals/centerModal.scss';
</style>

<script>
export default {
  name: 'CenterModal',
}
</script>
