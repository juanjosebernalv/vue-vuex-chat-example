import { COMMIT_UPDATE_USERNAME, COMMIT_SET_STATUS } from '@/common/mutation-types';
import { getUser } from '@/api';

const module = {
  namespaced: true,
  state() {
    return {
      id: 1,
      username: '',
      fullName: 'Juan José Profile',
    };
  },
  getters: {
    firstName(state) {
      return state.username.split('').reverse().join('');
    },
    firstNameX: (state) => (x) => {
      return state.username.split('').reverse().join(x);
    }
  },
  mutations: {
    [COMMIT_UPDATE_USERNAME](state, payload) {
      state.username = payload;
    }
  },
  actions: {
    async updateUsername({ commit, state, rootState }, username) {
      console.log('Username updated', state.username, username);
      const user = await getUser(1);
      console.log('User', user);
      commit(COMMIT_UPDATE_USERNAME, user.username);
      if (user.username) {
        commit(COMMIT_SET_STATUS, "active", { root: true });
      }
      console.log('state', rootState.status);
    }
  },
};

export default module;