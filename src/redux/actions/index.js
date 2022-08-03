import { MOD_PAGE } from "../const/action-type";
import store from "../store/index";

export const action = {
    
    modPage : (page) => {

        store.dispatch( {
            type: MOD_PAGE,
            payload: page
        });

    },

    getPage : () => {
        return store.getState().page;
    }
}