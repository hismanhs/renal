
import {createStore, applyMiddleware} from 'redux';
import { patient,staff, user} from '../reducers';
import { combineReducers } from 'redux';
import { composeWithDevTools} from 'redux-devtools-extension'

export const allReducer = combineReducers({
    patient: patient,
    staff:staff,
    user: user
});

export default function configureStore(initialState) {
  return createStore(allReducer, composeWithDevTools(
    applyMiddleware(),
    // other store enhancers if any
  ));
}
