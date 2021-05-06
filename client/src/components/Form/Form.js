import React, {useState} from 'react';
import {TextField, Button, Typography, Paper, IconButton, FormHelperText, } from '@material-ui/core';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

import useStyles from './styles';
import {createPost} from '../../actions/posts';

const Form = () => {
    //backend data
    const [postData, setPostData] = useState({creator: '', title: '', message: '', tags: '', selectedFile: '' });    
    //google event data
    const [eventData, setEventData] = useState({summary: '', location: '', description: ''});
    //start date data
    const [startDate, setStartDate] = useState(new Date());   
    //end date data
    const [endDate, setEndDate] = useState(new Date());   

    const classes = useStyles();

    const event = {
            summary: '',
            location: '',
            description: '',
            start: {
                dateTime: new Date(),
                TimeZone: 'America/Los Angeles'
            },
            end: {
                dateTime: new Date(),
                TimeZone: 'America/Los Angeles'
            }
        
        }        

    // const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        event.summary = eventData.summary
        event.location = eventData.location
        event.description = eventData.description
        event.start.dateTime = startDate
        event.end.dateTime = endDate
        console.log(event)
        
        //add to full calendar
        
    }
    const clear = () => {
    }
  
    
    return(
        <Paper variant = "outlined"  className = {classes.paper}>
            <form autoComplete = "off" noValidate className = {classes.form} onSubmit = {handleSubmit}>
            <Typography variant = "h6">Add an Event</Typography>
            <TextField name = "summary" variant = "outlined" label = "Summary" fullWidth value = {eventData.summary} onChange = {(e) => setEventData({ ...eventData, summary: e.target.value})}/>
            <TextField name = "location" variant = "outlined" label = "Location" fullWidth value = {eventData.location} onChange = {(e) => setEventData({ ...eventData, location: e.target.value })}/>
            <TextField name = "description" variant = "outlined" label = "Description" fullWidth value = {eventData.description} onChange = {(e) => setEventData({ ...eventData, description: e.target.value })}/>
          
           
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
                <Button className = {classes.buttonSubmit} variant = "contained" color  = "secondary" size = "small" onClick = {clear} fullWidth>Clear</Button>
                <Button classeName = {classes.buttonSubmit} variant = "contained" color  = "primary" size = "small" fullWidth>Find Time</Button>
                
             
            </div>
            </form>
        </Paper>
    );
}

export default Form;