import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import profileReducer from "./profile-reducer";

const reducers = combineReducers({
  profilePage: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
