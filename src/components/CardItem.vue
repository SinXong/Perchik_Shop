<template>
  <div class="card__item" v-for="card in cards" :key="card.article">
    <div class="wrapper__img">
      <img :src="require('../assets/images/' + card.image)" alt="img" />
    </div>
    <p>{{ card.name }}</p>
    <p>{{ card.price }} &#8381;</p>
    <main-button @click="addCard(card)">Купить</main-button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CardItem",
  props: {
    cards: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      addToCard: "basket/addToCard",
    }),
    addCard(card) {
      this.addToCard(card);
    },
  },
};
</script>

<style lang="scss">
.card__item {
  width: 25%;
  box-shadow: 0 0 8px 0 #969696;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 2%;
  padding: 1.5% 1%;
  transition: box-shadow 1s ease;
  &:hover{
    box-shadow: 0 0 12px 0 $main-color;
  }
  p {
    margin: 5% 0;
  }
  button:hover {
    color: white;
    border: 2px solid white;
  }
}
.wrapper__img {
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
    height: 90%;
  }
}
</style>