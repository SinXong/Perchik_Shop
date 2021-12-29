import axios from 'axios';

export const dataJson = {
    state: () => ({
        products: [],
        filter: []
    }),
    getters: {
        products(state) {
            return state.products;
        },
        filterProducts(state) {
            return state.filter;
        }
    },
    mutations: {
        addProductArr(state, products) {
            state.products = products;
        },
        changeProduct(state, newValue) {
            state.filter = state.products.filter(el => {
                return el.season === newValue;
            })
        }
    },
    actions: {
        async loadData({commit}) {
            await axios.get('http://localhost:3000/products')
            .then( products => { commit('addProductArr', products.data) });
        },
        sortProducts({commit}, newValue) {
            commit('changeProduct', newValue);
        }
    },
    namespaced: true
}