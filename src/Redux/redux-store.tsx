import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer

})
type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>


export type StoreType = Store<AppStateType>
const store: StoreType = createStore(rootReducer);

declare var window: any;
window.store=store

export default store;