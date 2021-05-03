import React, {useState} from 'react';
import {TextField, Button, Typography, Paper, IconButton, FormHelperText, } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import useStyles from './styles';
import {createPost} from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const [startDate, setStartDate] = useState(new Date());   
    const [endDate, setEndDate] = useState(new Date());   
    const classes = useStyles();
    

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));
    }
    const clear = () => {
    }
  
    
    return(
        <Paper variant = "outlined"  className = {classes.paper}>
            <form autoComplete = "off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
            <Typography variant = "h6">Add an Event</Typography>
            <TextField name = "creator" variant = "outlined" label = "Title" fullWidth value = {postData.creator} onChange = {(e) => setPostData({ ...postData, creator: e.target.value})}/>
            <TextField name = "title" variant = "outlined" label = "Description" fullWidth value = {postData.Description} onChange = {(e) => setPostData({ ...postData, title: e.target.value })}/>
            
            <TextField name = "message" variant = "outlined" label = "Location" fullWidth value = {postData.message} onChange = {(e) => setPostData({ ...postData, message: e.target.value })}/>
            <TextField name = "tags" variant = "outlined" label = "Friends" fullWidth value = {postData.tags} onChange = {(e) => setPostData({ ...postData, tags: e.target.value })}/>
            <div className = {classes.fileInput}>
                {/* <FileBase type = "file" multiple = {false} onDone = {({base64}) => setPostData({...postData, selectedFile: base64})}/> */}
                <DatePicker 
                    closeOnScroll = {true}
                    selected = {startDate}
                    onChange = {date => setStartDate(date)}
                    // value = {postData.startDate}
                    timeInputLabel = "Time:"
                    dateFormat = "MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText = "Start date"
                    />
              
                <DatePicker 
                    closeOnScroll = {true} 
                    selected = {endDate} 
                    onChange = {date => setEndDate(date)} 
                    timeInputLabel = "Time:"
                    dateFormat = "MM/dd/yyyy h:mm aa"
                    showTimeInput
                    placeholderText = "End date" 
                />
           
                <Button className = {classes.buttonSubmit} variant = "contained" color  = "primary" size = "small" type = "submit" fullWidth>Submit</Button>
                <Button variant = "contained" color  = "secondary" size = "small" onClick = {clear} fullWidth>Clear</Button>
             
            </div>
            </form>
        </Paper>
    );
}

export default Form;