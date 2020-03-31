import {compose,applyMiddleware,createStore,combineReducers} from 'redux';

import thunk from 'redux-thunk';
import AuthReducer from './reducer/authReducer';
import DonorReducer from './reducer/donorReducer';
import AuthMiddleware from './middleware/authMiddleware';
import DonorMiddleware from './middleware/donorMiddleware';

const middleware =applyMiddleware(thunk)
export {
    AuthMiddleware,
    DonorMiddleware
}

export const rootReducer = combineReducers({
 AuthReducer,
 DonorReducer
})




export let store=createStore(
    rootReducer,
    
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f)
    
)