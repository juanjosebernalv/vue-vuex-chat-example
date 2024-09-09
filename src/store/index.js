import { createStore } from 'vuex';
import { getUser } from '../api';
import { COMMIT_UPDATE_USERNAME } from '../common/mutation-types';
import profile from './modules/profile';
import channels from './modules/channels';
import messages from './modules/messages';
import contacts from './modules/contacts';


const store = createStore({
  state() {
    return {
      status: null
    };
  },
  getters: {},
  mutations: {
    setStatus(state, payload) {
      state.status = payload;
    }
  },
  actions: {},
  modules: {
    profile,
    channels,
    messages,
    contacts
  }
});

export default store;