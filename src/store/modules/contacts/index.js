const module = {
  namespaced: true,
  state() {
    return {
      contacts: [
        { id: 2, name: 'Jason', avatar: '/avatars/avatar-02.jpg' },
        { id: 3, name: 'Janet', avatar: '/avatars/avatar-03.jpg' }
      ],
    };
  },
  getters: {
    getContacts: (state) => {
      return state.contacts;
    },
    getContactsById: (state, getters, rootState) => (contactId) => {
      const profileId = rootState.profile.id;
      return state.contacts.find(contact => {
        if (contactId === profileId) {
          return rootState.profile;
        }
        return contact.id === contactId;
      }
      );
    },
  },

};

export default module;