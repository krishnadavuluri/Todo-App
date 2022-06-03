import {combineReducers} from 'redux';
const EventActions=(Events=[],action)=>{
   
    if(action.type==='CREATE_EVENT')
    {
        alert("create")
        Events=[...Events,action.payload]
        return Events
    }
    if(action.type==='DELETE_EVENT')
    {
        Events=Events.filter((event)=>(event!==action.payload))
        return Events;
    }
    return Events
}



export default combineReducers({eventsReducer:EventActions});