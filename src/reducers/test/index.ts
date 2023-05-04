
const initialState = {
};

const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_CASE':
      return {};
    default:
      return state;
  }
};

export default testReducer;