<template>
  <div class="card__basket">
    <div class="basket__img">
      <img :src="require('../assets/images/' + item.image)" alt="img" />
    </div>
    <p>{{ item.name }}</p>
    <div class="basket__body">
      <div class="card__quantity">
        <span>{{ item.quantity }} шт</span>
        <div class="card__btn">
          <button @click="upPrice">&#9650;</button>
          <button @click="downPrice">&#9660;</button>
        </div>
      </div>
      <p>{{ item.price }} &#8381;</p>
      <button @click="deleteItem" class="btn__delet">Удалить</button>
    </div>
  </div>
</template>

<script>
import { watchEffect } from "vue";

export default {
  name: "CardBasket",
  props: {
    item: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const upPrice = () => {
      if (props.item.quantity < 99) {
        props.item.quantity += 1;
      }
    };

    const downPrice = () => {
      if (props.item.quantity > 1) {
        props.item.quantity -= 1;
      }
    };

    const deleteItem = () => {
      emit("deleteItem");
    };

    const priceCard = () => {
      emit("priceCard", props.item.quantity * props.item.price, props.item);
    };

    watchEffect(priceCard);

    return {
      upPrice,
      downPrice,
      deleteItem,
    };
  },
};
</script>

<style lang="scss">
.card__basket {
  margin: 3% 0;
  width: 100%;
  display: flex;
  height: 250px;
  box-shadow: 0 0 8px 0 #969696;
  border-radius: 50px;
  justify-content: space-around;
  align-items: center;
  button {
    font-size: 15px;
    background: none;
    border: 1px solid $main-color;
    cursor: pointer;
  }
  p {
    width: 15%;
  }
  img {
    height: 90%;
  }
}
.btn__delet {
  width: 10%;
  margin-right: 2%;
  background: rgba(255, 255, 255, 0);
  border: 2px solid $main-color;
  color: $main-color;
  font-size: 20px;
  padding: 10px 15px;
  border-radius: 15px;
  transition: all 0.5s ease;
  &:hover {
    color: white;
    border: 2px solid white;
    background: $main-color;
  }
}
.card__quantity {
  width: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__btn {
  display: flex;
  flex-direction: column;
}
</style>