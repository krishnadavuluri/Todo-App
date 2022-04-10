import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createEvent} from '../actions'
import Grid from '@mui/material/Grid'
import '../styles/styles.css';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import CheckboxList from './Event';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EventList from './EventList';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));



export class MainPage extends Component {

    render() {
        return (
            <div>
                <Grid container  className='' >
                  <Grid item xs={12} md={6}  className=''>
                     <EventList/>
                  </Grid>
                  <Grid item xs={12} md={6}  className=''>
                    <h1>Deleted Items</h1>
                  </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return state
}

export default connect(mapStateToProps,{createEvent})(MainPage);
