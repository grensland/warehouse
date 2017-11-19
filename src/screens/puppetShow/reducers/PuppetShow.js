import * as CONSTANTS from '../common/PuppetShowConstants';
import { PUPPET_SHOW_ACTIONS } from '../common/PuppetShowConstants';

const initialState = {
  nav: {
    page: 'home',
  },
};

const PuppetShowReducer = (state = initialState, action) => {
  console.log(`ACTION: ${action.type}`, state);
  switch (action.type) {
    case PUPPET_SHOW_ACTIONS.FETCH_PUPPET_SHOWS_REQUEST:
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
            scenes: [
              {
                id: 0,
                name: 'Troonzaal',
              },
              {
                id: 1,
                name: 'Bos',
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
            scenes: [
              {
                id: 0,
                name: 'Troonzaal',
              },
              {
                id: 1,
                name: 'Bos',
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
