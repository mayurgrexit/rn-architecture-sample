import { combineReducers } from 'redux';
import NewsReducer from './home/reducers';

export default combineReducers({
    newsReducer: NewsReducer
})
