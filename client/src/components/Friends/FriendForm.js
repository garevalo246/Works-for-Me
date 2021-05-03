import React, {useState, Component} from 'react';
import {TextField, Button, Typography, Paper, Icon, FormHelperText, createMuiTheme, IconButton} from '@material-ui/core'
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp'
import{useDispatch} from 'react-redux'

import useStyles from './styles'

const FriendForm = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();
    const theme = createMuiTheme({
        spacing: 5,
    })
    theme.spacing(3)
    // const [friendData, setFriendData] = useState({})

//     const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatchEvent(addFriend(friendData));
// }

        return (
        <Paper variant = "outlined" className = {classes.paper}>
            <form>
                
                    (FriendForm.js)
                    <Typography variant = "h6">Add a Friend 
                      <IconButton aria-label ="friend" size = "medium">
                        <PeopleAltSharpIcon />
                      </IconButton>
                    </Typography>
                    
                    <TextField name = "username" variant = "outlined" label = "Friend's username:" fullWidth></TextField>
                    <TextField name = "Friend Code" variant = "outlined" label = "Friend code:" fullWidth></TextField>
                    <div className = {classes.buttonSubmit}>
                    <Button className = "btn btn-success" variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth>Send Friend Request</Button>
                    </div>
                     
            </form>
           
        </Paper>
        );
    
}

export default FriendForm;
    
    
