import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./contacts/contact.reducer";
import userReducer from "./users/user.reducer";

let rootReducer = combineReducers({
    userReducer:userReducer,
    contactReducer:contactReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))