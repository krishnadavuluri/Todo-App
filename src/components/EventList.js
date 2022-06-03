import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Event from './Event';
import '../styles/styles.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SimpleDialogDemo from './AddEventPopUp';
import AlertDialog from './AddEventPopUp';
import {connect} from "react-redux"
export class EventList extends Component {
    render() {
    
        return (
            <div>
                  <h1 className='heading'><u>Todo</u></h1>
                  <Grid container className=''>
                  <Grid item xs={12} md={12} className='border-bottom MaxHeight'>
                    {this.props.new.map((event)=>{
                        return <Event details={event}/>
                    })}
                  </Grid>
                  <Grid item xs={2} md={2} className=''>
                       {/* <AddCircleIcon  color="secondary" fontSize="large"/> */}
                       <AlertDialog/>
                  </Grid>
                  </Grid>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {new:state.eventsReducer}
}
export default connect(mapStateToProps)(EventList)
