
export const createEvent=(event={tittle:'Planting'})=>{
    return {
        type:'CREATE_EVENT',
        payload:event
    }
}