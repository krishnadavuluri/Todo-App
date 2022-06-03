import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';
import {connect} from 'react-redux';

import {deleteEvent} from '../actions'
function Event(props) {

  const [status,setStatus]=useState(false)
  const handleCheck=()=>{
    setStatus(!status)
  }
  const handleDelete=()=>{
      
      props.deleteEvent(props.details)
  }

  return (
    <List sx={{ width: '100%', maxWidth: 500, bgcolor: 'background.paper' }}>
          <ListItem
            key={1}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                <DeleteIcon onClick={handleDelete}/>
              </IconButton>
            }
            disablePadding
           >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={status}
                  onClick={handleCheck}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': 1 }}
                />
              </ListItemIcon>
              <ListItemText id={1} primary={props.details} secondary={'Time'}/>
            </ListItemButton>
          </ListItem>
          <Divider/>
    </List>
  );
}

const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{deleteEvent})(Event)
