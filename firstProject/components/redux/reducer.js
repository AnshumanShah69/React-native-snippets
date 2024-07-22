import {ADD_TO_CART, REMOVE_FROM_CART, SET_USER_DATA} from './constants';
///so basically this stores the array of items when clicked gets inside it

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.data]; ///the spread op is used to get the values that has been stored previousely adn what is gonna store next
    case REMOVE_FROM_CART:
      //here we are checking the data is present or not inside the state if same data exist inside then dont add else return the
      let result = state.filter(item => {
        return item.name != action.data;
      });
      return [...result];
    case SET_USER_DATA:
      return [...state, action.data];
    default:
      return state;
  }
};
