import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoing from "./todo";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["todoing"],
};

const rootReducer = combineReducers({ todoing });

export default persistReducer(persistConfig, rootReducer);
export type RootState = ReturnType<typeof rootReducer>;
