import {combineReducers} from 'redux';
const createEventReducer=(Events=[],action)=>{

    if(action.type==='CREATE_EVENT')
    {
        Events=[...Events,action.payload]
        return Events
    }
    return Events
}

export default combineReducers({eventsReducer:createEventReducer});