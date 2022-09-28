import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {rootReducer} from './rootReducer';
import { getTodoListReducer } from './todoapp/reducers/operations';

const reducers = combineReducers({
    todoList: getTodoListReducer,
})

const middleware = [thunk];

export const store = createStore(
    reducers,
)
// Infer the `RootState` and `AppDispatch` types from the store itself
//export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
//export type AppDispatch = typeof store.dispatch;
