import React, {useState, Component} from 'react';
import {TextField, Button, Typography, Paper, Icon, FormHelperText, createMuiTheme, IconButton} from '@material-ui/core'
import PeopleAltSharpIcon from '@material-ui/icons/PeopleAltSharp'
import{useDispatch} from 'react-redux'

import useStyles from './styles'

const FriendList = () => {
    const [count, setCount] = useState(0);
    const classes = useStyles();
    // const theme = createMuiTheme({
    //     spacing: 5,
    // })
    // theme.spacing(3)
    // const [friendData, setFriendData] = useState({})

//     const handleSubmit = (e) => {
//     e.preventDefault();

//     dispatchEvent(addFriend(friendData));
// }

        return (
        <Paper variant = "outlined" className = {classes.paper}>
            <form>
                
                    (FriendForm.js)
                    <Typography variant = "h6">Friends List
                    <IconButton aria-label ="friend" size = "medium">
                      <PeopleAltSharpIcon />
                    </IconButton>
                    </Typography>
                   
                    <div >
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 1</Button>
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 2</Button>
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 3</Button>
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 4</Button>
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 5</Button>
                    <Button className =  {classes.buttonSubmit} variant = "contained" color = "primary" size = "small" type="submit" onClick={() => setCount(count + 1)} fullWidth> Friend 6</Button>
                    </div>
                    
            </form>
        
        </Paper>
        );
    
}

export default FriendList;
    
    
