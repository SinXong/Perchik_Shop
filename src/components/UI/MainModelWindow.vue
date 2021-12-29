<template>
  <transition name="modelWindow">
    <div class="modal" v-if="show === true" @click="hideWindow">
      <div class="modal__body" @click.stop>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "main-model-window",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideWindow() {
      this.$emit("update:show", false);
    },
  },
};
</script>

<style lang="scss">
.modelWindow-enter-active,
.modelWindow-leave-active {
  transition: opacity 0.5s ease;
}
.modelWindow-enter-from,
.modelWindow-leave-to {
  opacity: 0;
}
.modal {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 3;
}
.modal__body {
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: white;
  min-height: 500px;
  border-radius: 25px;
  h1 {
    margin: 0 0;
  }
  button {
    width: 40%;
    color: rgb(24, 204, 24);
    border: 2px solid rgb(24, 204, 24);
    &:hover {
      background: rgb(24, 204, 24);
      color: white;
      border: 2px solid white;
    }
  }
}
</style>