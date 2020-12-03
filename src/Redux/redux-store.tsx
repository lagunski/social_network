import {combineReducers, createStore, Store} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

})
type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>


export type StoreType = Store<AppStateType>
const store: StoreType = createStore(rootReducer);

export default store;