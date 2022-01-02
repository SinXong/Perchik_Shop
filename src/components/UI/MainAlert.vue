<template>
  <div class="alert">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "main-alert",
};
</script>

<style lang="scss">
.alert {
  position: fixed;
  bottom: -100%;
  right: 2%;
  width: 30%;
  height: 50px;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  border: 2px solid green;
  background: none;
  transition: bottom 1s ease;
  p {
    color: green;
  }
}
.active_alert {
    bottom: 3%;
}
</style>