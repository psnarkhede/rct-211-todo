import  {compose, legacy_createStore} from "redux";
import { todoreducer } from "./Todo/todoreducer";
import { applyMiddleware } from "redux";
import  thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;

/*const customMiddleware = ({dispatch}) => (next) => (action) => {
    if(typeof action === "function"){
        return action(dispatch);
    }else if(typeof action === "object"){
        return
    }
}*/

export const store = legacy_createStore(todoreducer, composeEnhancers(applyMiddleware(thunk)));