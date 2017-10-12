import * as CONSTANTS from '../common/PuppetShowConstants';

const initialState = {
  nav: {
    page: 'home',
  },
};

const PuppetShowReducer = (state = initialState, action) => {
  console.log(`ACTION: ${action.type}`, state);
  switch (action.type) {
    case CONSTANTS.GET_ALL_PUPPET_SHOWS:
      return Object.assign({}, state, {
        puppetShows: [
          {
            id: 0,
            title: 'Roodkapje',
            puppets: [
              {
                id: 0,
                name: 'Roodkapje',
              },
              {
                id: 1,
                name: 'Boze wolf',
              },
              {
                id: 2,
                name: 'oma',
              },
            ],
          },
          {
            id: 1,
            title: 'Sneeuwwitje',
            puppets: [
              {
                id: 3,
                name: 'Prins',
              },
            ],
          },
        ],
      });
    default:
      return state;
  }
};

export default PuppetShowReducer;
