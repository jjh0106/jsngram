import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { routerMiddleware } from 'react-router-redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { i18nState } from 'redux-i18n';
import user from 'redux/modules/user';
import photos from 'redux/modules/photos';

const history = createBrowserHistory();

const middlewares = [thunk, routerMiddleware(history)];

const env = process.env.NODE_ENV;

if( env === 'development' ){
    const { logger } = require('redux-logger');
    middlewares.push(logger);
}

const reducer = combineReducers({
    user,
    photos,
    router: connectRouter(history),
    i18nState
})

let store;

if( env === 'development' ){
    store = initialState => createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));    
} else {
    store = initialState => createStore(reducer, applyMiddleware(...middlewares));
}

export { history };

export default store();