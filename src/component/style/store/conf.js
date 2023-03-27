import { configureStore } from "@reduxjs/toolkit";
import sliceone from "./slice";

let store = configureStore({ reducer: { one: sliceone.reducer } });
export default store