<template>
  <main class="cards">
    <div class="cards__select">
      <main-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <div class="cards__body">
      <card-item v-if="filterProducts.length === 0" :cards="products" />
      <card-item v-else :cards="filterProducts" />
    </div>
  </main>
</template>

<script>
import CardItem from "@/components/CardItem";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { CardItem },
  name: "Main",
  data() {
    return {
      selectedSort: "",
      sortOptions: [
        { value: "jacket", name: "Куртки" },
        { value: "trousers", name: "Штаны" },
        { value: "boots", name: "Ботинки" },
        { value: "hat", name: "Шапки" },
      ],
    };
  },
  computed: {
    ...mapGetters({
      products: "data/products",
      filterProducts: "data/filterProducts",
    }),
  },
  methods: {
    ...mapActions({
      loadData: "data/loadData",
      sortProducts: "data/sortProducts",
    }),
  },
  mounted() {
    this.loadData();
  },
  watch: {
    selectedSort(newValue) {
      this.sortProducts(newValue);
    },
  },
};
</script>

<style lang="scss">
.cards {
  display: flex;
  margin: 2% 0;
  justify-content: space-around;
}
.cards__select {
  width: 15%;
  select {
    border-radius: 25px;
    color: black;
    font-size: 20px;
    padding: 8px 8px;
    border: 2px solid black;
  }
}
.cards__body {
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>