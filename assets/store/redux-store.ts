import { createStore, combineReducers, applyMiddleware, Action } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReduces from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';
import chatReducer from './chat-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReduces,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    chat: chatReducer,
    form: formReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type InferActionsTypes<T> = T extends {
    [key: string]: (...args: any[]) => infer U;
}
    ? U
    : never;

export type BaseThunkType<
    A extends Action = Action,
    R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
