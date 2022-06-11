import { combineReducers } from "redux";
import filterreducer from "./filterreducer";
import orderreducer from "./orderreducer";
const reducer=combineReducers({
    filterreducer:filterreducer,
    orderreducer:orderreducer
})
export default reducer;