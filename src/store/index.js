//store
import { createStore } from "vuex";
import user from "./user";

export const store = new createStore({
  modules: {
    user,
  },
});