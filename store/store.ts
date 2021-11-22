import {configureStore} from '@reduxjs/toolkit'
import {counterSlice} from "./counterSlice";
import {useDispatch} from "react-redux";
import {postsApi} from "../api/postsApi";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        postsApi: postsApi.reducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
