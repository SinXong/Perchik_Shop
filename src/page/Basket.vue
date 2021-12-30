<template>
  <div class="items">
    <div class="items__card" v-if="cards.length > 0">
      <transition-group name="fade">
        <card-basket
          v-for="(card, index) in cards"
          :key="card.article"
          :item="card"
          @deleteItem="deleteCard(index)"
          @priceCard="sumCard"
        />
      </transition-group>
    </div>
    <div class="items__pay" v-if="cards.length > 0">
      <h1>Итого : {{ count }} &#8381;</h1>
      <main-button @click="openWindow">Оформить заказ</main-button>
    </div>
    <h1 v-else>Добавьте товар в корзину</h1>
    <main-model-window v-model:show="isOpen">
      <h1>Введите данные вашей карты</h1>
      <div class="payment_card">
        <div class="payment_card_one">
          <input type="number" placeholder="Номер карты" />
          <div class="payment_card__data">
            <input type="number" placeholder="мм" />
            <input type="number" placeholder="гггг" />
          </div>
          <input type="text" placeholder="Имя на карте" />
        </div>
        <div class="payment_card_two">
          <div class="payment_card_line"></div>
          <input type="number" placeholder="CVC" />
        </div>
      </div>
      <main-button @click="deleteBasket">Оплатить</main-button>
    </main-model-window>
    <main-alert 
      :class="{ active_alert: isTarget }"
    >
      Ваш заказ сформирован =)
    </main-alert>
  </div>
</template>

<script>
import CardBasket from "@/components/CardBasket";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { CardBasket },
  name: "Basket",
  data() {
    return {
      isOpen: false,
      isTarget: false,
    };
  },
  computed: {
    ...mapGetters({
      cards: "basket/cards",
      count: "basket/count",
    }),
  },
  methods: {
    ...mapActions({
      deleteFromCard: "basket/deleteFromCard",
      sumPrice: "basket/sumPrice",
      emptyBasket: "basket/emptyBasket",
    }),
    deleteCard(index) {
      this.deleteFromCard(index);
    },
    sumCard(price, object) {
      let order = {
        priceOrder: price,
        dataOrder: object,
      };
      this.sumPrice(order);
    },
    openWindow() {
      this.isOpen = true;
    },
    deleteBasket() {
      this.isOpen = false;
      this.emptyBasket();
      this.isTarget = true;
    },
  },
  watch: {
    isOpen(newValue) {
      const body = document.querySelector("body");
      newValue ? (body.style.cssText = `overflow : hidden`) : (body.style.cssText = `overflow : auto`);
    },
    isTarget(newValue){
      if(newValue === true) {
        setTimeout(() => {this.isTarget = false}, 3500);
      }
    }
  },
};
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.items {
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.items__card {
  width: 60%;
}
.basket__img {
  height: inherit;
  display: flex;
  align-items: center;
}
.basket__body {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    width: 30%;
  }
}
.card__quantity {
  .card__btn {
    width: 25%;
    button {
      width: 100%;
    }
  }
}
.items__pay {
  margin: 1.7% 0;
  width: 30%;
  box-shadow: 0 0 8px 0 #969696;
  border-radius: 50px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 4% 3%;
  button {
    color: rgb(24, 204, 24);
    border: 2px solid rgb(24, 204, 24);
    &:hover {
      background: rgb(24, 204, 24);
      color: white;
      border: 2px solid white;
    }
  }
}
h1 {
  margin: 2% 0;
}
.payment_card {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
}
.payment_card_one {
  margin-right: 15%;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1% 2%;
  width: 50%;
  height: 200px;
  background: rgb(67, 67, 255);
  border: 1px solid black;
  border-radius: 20px;
  input {
    border: none;
    height: 50px;
    padding: 0 3.5%;
    border-radius: 15px;
    font-size: 20px;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
.payment_card__data {
  display: flex;
  justify-content: space-between;
  width: 55%;
  input {
    width: 45%;
  }
}
.payment_card_two {
  margin-top: 5%;
  margin-left: 15%;
  padding-top: 5%;
  width: 50%;
  height: 200px;
  background: rgb(57, 57, 216);
  border: 1px solid black;
  border-radius: 20px;
  input {
    margin-top: 5%;
    margin-left: 70%;
    border: none;
    height: 50px;
    width: 15%;
    padding: 0 3.5%;
    border-radius: 15px;
    font-size: 14px;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}

.payment_card_line {
  width: 100%;
  background: black;
  height: 40px;
}
</style>