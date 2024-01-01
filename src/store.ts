import appSlice from "@/redux/app/appSlice";
import counterSlice from "@/redux/counter/counterSlice";
import {
  type Dispatch,
  type Middleware,
  type UnknownAction,
  configureStore,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import postEngagemenSlice from "./redux/post-engagement/postEngagemenSlice";

// Global middleware
const middleware: Middleware[] = [];
// Development middleware
if (import.meta.env.DEV) {
  middleware.push(
    logger as Middleware<Record<string, unknown>, any, Dispatch<UnknownAction>>,
  );
}

// Create the global store
const store = configureStore({
  reducer: {
    app: appSlice,
    counter: counterSlice,
    postEngagement: postEngagemenSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred types
export type AppDispatch = typeof store.dispatch;

export default store;
