import  {compose, legacy_createStore, applyMiddleware} from "redux";
import { todoreducer } from "./Todo/todoreducer";
import  thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/*const customMiddleware = ({dispatch}) => (next) => (action) => {
    if(typeof action === "function"){
        return action(dispatch);
    }else if(typeof action === "object"){
        return
    }
}*/

export const store = legacy_createStore(todoreducer, composeEnhancers(applyMiddleware(thunk)));