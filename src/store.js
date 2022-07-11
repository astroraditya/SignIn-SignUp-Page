import { createStore } from "redux";

import rootReducer from "./state/redux";

const store = createStore(rootReducer);

export default store;