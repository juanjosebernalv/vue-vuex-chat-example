const store = {
  profile: {
    username: ''
  },
  contacts: [
    {
      id: 1,
      username: 'Juan',
      status: 'active'
    },
    {
      id: 2,
      username: 'Jose',
      status: 'active'
    }
  ],
  channels: [
    {
      id: 1,
      name: 'Channel 1',
      messages: [1, 2]
    },
    {
      id: 2,
      name: 'Channel 2',
      messages: [3, 4]
    }
  ],
  messages: [
    {
      id: 1,
      msg: 'Hello world :D 1',
      author: 1
    },
    {
      id: 2,
      msg: 'Bye world :D 2',
      author: 2
    },
    {
      id: 3,
      msg: 'Hello world :D 3',
      author: 1
    },
    {
      id: 4,
      msg: 'Bye world :D 4',
      author: 2
    }
  ]
};