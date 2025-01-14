import {ADD_TO_CART} from './constants';
import {REMOVE_FROM_CART} from './constants';
import {USER_LIST} from './constants';
export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}
export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function getUserList() {
  return {
    type: USER_LIST,
  };
}
