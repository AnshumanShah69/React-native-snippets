///this is for combining all the reducers
import {combineReducers} from 'redux';
import {reducer} from './reducer';

///give all the name of the reducers inside it using the comma to make a single reducer file
export default combineReducers({
  reducer,
});
 