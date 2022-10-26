import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

import state from "@/store/states";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

import { GlobalState } from "@/store/types";

export const Key: InjectionKey<Store<GlobalState>> = Symbol();

const store = createStore<GlobalState>({
  state,
  mutations,
  getters,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
