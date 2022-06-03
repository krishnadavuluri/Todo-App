import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {connect} from 'react-redux';
import TextField from '@mui/material/TextField';
import {createEvent} from '../actions'
function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [eventName,setEventName]=React.useState("");
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleSubmit=()=>{
       props.createEvent(eventName)
       setEventName("")
       handleClose()
  }

  const handleClose = () => {
    setOpen(false);
    setEventName("");
  };

  const handleChange=(e)=>{
        setEventName(e.target.value)
  };

  return (
    <div>
      <AddCircleIcon color="secondary" fontSize="large"  onClick={handleClickOpen}/>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add New Event"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField id="standard-basic" value={eventName} onChange={handleChange} label="Event Name" variant="standard" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmit}>Submit</Button>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps=(state)=>{
  
   return state;
}

export default connect(mapStateToProps,{createEvent})(AlertDialog)

