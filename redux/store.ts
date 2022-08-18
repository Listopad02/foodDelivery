import { configureStore } from "@reduxjs/toolkit";
import order from "./orderSlice";
import dishes from "./dishesSlice";
import categories from "./categoriesSlice";
import mapSlice from "./mapSlice";
import click from "./clickSlice";
export const store = configureStore({
  reducer: {
    order,
    dishes,
    categories,
    mapSlice,
    click
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
