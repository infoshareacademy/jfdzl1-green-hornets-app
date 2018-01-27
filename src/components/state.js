import {database} from '../firebase';

const FILTER_BEERS = 'FILTER_BEERS';
const POPULATE_BEERS = 'POPULATE_BEERS';

export const add = beer => dispatch => {
  database.ref('/beers').push(beer)
};

export const search = value => ({
  type: FILTER_BEERS,
  value
});

export const remove = beerId => dispatch => {
  database.ref(`/beers/${beerId}`).remove()
};

export const populate = beers => ({
  type: POPULATE_BEERS,
  beers
});

export const init = () => dispatch => {
  database.ref('/beers')
    .on('value', (snapshot) => {
      const firebaseData = Object.entries(
        snapshot.val() || {}
      );

      const data = firebaseData.map(([id, value]) => {
        value.id = id;
        return value;
      });

      dispatch(populate(data));
    });
};

const INITIAL_STATE = {
  query: '',
  beers: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILTER_BEERS:
      return {
        ...state,
        query: action.value
      }
    case POPULATE_BEERS:
      return {
        ...state,
        beers: action.beers
      }
    default:
      return state;
  }
}