import getters from './getters';
const module = {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: 1,
          author: 1,
          message: 'Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 1
        },
        {
          id: 2,
          author: 2,
          message: 'CAnal 2 Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2
        },
        {
          id: 3,
          author: 2,
          message: 'CAnal 2 - CAnal 2 Hola 👀',
          timestamp: new Date().toLocaleTimeString(),
          read: false,
          channelId: 2
        },
      ]
    };
  },
  getters
};

export default module;