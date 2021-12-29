<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MainButton",
};
</script>

<style lang="scss">
.btn {
  background: rgba(255, 255, 255, 0);
  border: 2px solid black;
  color: black;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 15px;
  transition: all 0.5s ease;
  &:hover {
    color: $main-color;  
    border: 2px solid $main-color;
    background: black;
  }
}
</style>