<template>
  <div class="navbar" :class="{ margine_nav: isActive }">
    <div class="navbar__constainer">
      <div class="logo">
        <a href="#" @click="$router.push('/')">Perchik@Shop</a>
      </div>
      <div
        class="navbar__burger"
        :class="{ active_menu: isActive }"
        @click="activeMenu"
      >
        <span></span>
      </div>
    </div>
    <div class="navbar__menu" :class="{ show_menu: isActive }">
      <main-button @click="$router.push('/')">Товары</main-button>
      <main-button @click="$router.push('/basket')">Корзина</main-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    activeMenu() {
      this.isActive ? (this.isActive = false) : (this.isActive = true);
    },
  },
};
</script>

<style lang="scss">
.navbar__constainer {
  width: 25%;
  display: flex;
  justify-content: center;
}
.logo {
  width: 30%;
  a {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 34px;
    color: black;
    &:hover {
      text-decoration-line: underline;
    }
  }
}
.navbar__menu {
  width: 64%;
  display: flex;
  justify-content: space-around;
}
.navbar {
  background-color: $main-color;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1% 15px;
  border-radius: 0 0 50px 50px;
}
</style>