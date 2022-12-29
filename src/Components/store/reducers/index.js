import { combineReducers } from "redux";
import reducerMovies from "./reducerMovies";

const rootReducer = combineReducers({
  infoMovies: reducerMovies
})
export default rootReducer;