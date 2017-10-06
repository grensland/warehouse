const initialState = {};

const PuppetShowReducer = (state, action) => {
  switch (action.type) {
    case 'PUPPETSHOW_LIST':
      return state || initialState;
    default:
      return state || initialState;
  }
};

export default PuppetShowReducer;
