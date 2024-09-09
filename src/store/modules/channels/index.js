const module = {
  namespaced: true,
  state() {
    return {
      channel: null,
      channels: [
        {
          id: 1,
          name: 'Channel 1',
          messages: []
        },
        {
          id: 2,
          name: 'Channel 2',
          messages: []
        },
        {
          id: 3,
          name: 'Channel 3',
          messages: []
        },
        {
          id: 4,
          name: 'Channel 4',
          messages: []
        },
      ],
    };
  },
  getters: {
    getChannels: (state) => {
      return state.channels;
    },
    getChannelByName: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter(channel =>
          channel.name.toLowerCase()
            .includes(search.toLowerCase())
        ).map(
          channel => {
            console.log("rootGetters", rootGetters);

            const messages = rootGetters['messages/getUnreadMessages'](channel.id);
            console.log("messages-->", messages);

            return { ...channel, messages };
          });
    }
  },
};

export default module;