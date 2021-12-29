import { createStore } from 'vuex';
import { dataJson } from '@/store/dataJson';
import { addBasket } from '@/store/addBasket';

export default createStore ({
    modules: {
        data: dataJson,
        basket: addBasket,
    }
})