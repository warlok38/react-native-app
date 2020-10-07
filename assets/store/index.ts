import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import appReducer from './app-reducer';
// import authReducer from './auth-reducer';
import profileReducer from './profile-reducer';
// import usersReducer from './users-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    // usersPage: usersReducer,
    // auth: authReducer,
    // app: appReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
