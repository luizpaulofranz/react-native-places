import { createStore, combineReducers } from 'redux';

import placesReducer from './reducers/places';

// store accepts only one reducer, so we must combine them
const rootReducer = combineReducers({
    places: placesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;