export const addBasket = {
    state: () => ({
        card: [],
        count: [],
    }),
    getters: {
        cards(state) {
            return state.card;
        },
        count(state) {
            let sum = 0;
            state.count.forEach(el => {
                sum += el
            });
            return sum;
        }
    },
    mutations: {
        deleteBasket(state){
            state.card = [];
        },
        sumCard(state, order){
            state.count[state.card.indexOf(order.dataOrder)] = order.priceOrder;
        },
        setCard(state, product) {
            if (state.card.length) {
                let isProductExitsts = false;
                state.card.map(item => {
                    if(item.article === product.article) {
                        isProductExitsts = true;
                        item.quantity += 1;
                    }
                });
                if(!isProductExitsts){
                    product.quantity = 1;
                    state.card.push(product);
                }

            } else {
                product.quantity = 1;
                state.card.push(product);
            }
        },
        removeCard(state, index) {
            state.card.splice(index, 1);
            state.count.splice(index, 1);
        }
    },
    actions: {
        addToCard({commit}, product) {
            commit('setCard', product);
        },
        sumPrice({commit}, order) {
            commit('sumCard', order);
        },
        deleteFromCard({commit}, index) {
            commit('removeCard', index);
        },
        emptyBasket({commit}) {
            commit('deleteBasket');
        }
    },
    namespaced: true
}