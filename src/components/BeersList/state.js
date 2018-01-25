import { database } from '../../firebase';

const POPULATE = 'POPULATE';

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

export const addBeer = newBeer => dispatch => {
  database.ref('/beers').push(newBeer);
}

const populate = (data) => ({
  type: POPULATE,
  data
});

const INITIAL_STATE = {
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POPULATE:
      return {
        list: action.data
      }
    default:
      return state;
  }
}
