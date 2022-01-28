import reduxType from '../config/reduxType';

const reducer = (state = [], action) => {
  switch (action.type) {
    case reduxType.FETCH_RANDOM_PHOTO:
      
      return [...action.payload];
      
    default:
      return state;

  }
};

export default reducer;
