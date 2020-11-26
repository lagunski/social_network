import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

})
type RootReducersType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducersType>

const store = createStore(rootReducer);

export default store;