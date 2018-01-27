import { database } from '../../firebase';

const POPULATE_BEER = 'POPULATE_BEER';

export const getBeer = (id) => dispatch => {
  database.ref(`/beers/${id}`).on('value', snapshot => {
    dispatch(populateBeer(snapshot.val()));
  })
};

const populateBeer = (data) => ({
  type: POPULATE_BEER,
  data
});

const INITIAL_STATE = {
  data: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE_BEER:
      return {
        data: action.data
      }
    default:
      return state;
  }
}