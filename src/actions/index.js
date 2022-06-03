
export const createEvent=(event={tittle:'Planting'})=>{
    return {
        type:'CREATE_EVENT',
        payload:event
    }
}

export const deleteEvent=(eventName)=>{
    alert("In action")
    return {
        type:'DELETE_EVENT',
        payload:eventName
    };
}