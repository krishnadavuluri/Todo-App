import React, { Component } from 'react'
import Grid from '@mui/material/Grid'
import Event from './Event';
import '../styles/styles.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
export class EventList extends Component {
    render() {
        return (
            <div>
                  <h1 className='heading'><u>Todo</u></h1>
                  <Grid container className=''>
                  <Grid item xs={12} md={12} className='border-bottom MaxHeight'>
                    {[0,1,2].map(()=>{
                        return <Event/>
                    })}
                  </Grid>
                  <Grid item xs={2} md={2} className=''>
                       <AddCircleIcon  color="secondary" fontSize="large"/>
                  </Grid>
                  </Grid>
            </div>
        )
    }
}

export default EventList
