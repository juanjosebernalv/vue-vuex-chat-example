const getters = {
  getMessages: (state) => {
    return state.messages;
  },
  getUnreadMessages: (state, getters) => (channelId) => {
    return getters.getMessagesByChannel(channelId).filter(message => !message.read).length;
    // return state.messages.filter(message => !message.read);
  },
  getMessagesById: (state) => (id) => {
    return state.messages.find(message => message.id === id);
  },
  getMessagesByChannel: (state) => (channelId) => {
    return state.messages.filter(message => message.channelId === parseInt(channelId));
  }
};

export default getters;