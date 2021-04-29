import React, {Component} from 'react'
import {Typography, Paper, requirePropFactory} from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

import googleCalendarPlugin from '@fullcalendar/google-calendar';
export default class EventCalendar extends Component {

    
    
    render() {
       
        return(
            <Paper variant = "outlined" elevation = {3}>
            <FullCalendar           
            aspectRatio = '2.0' 
            headerToolbar={{
               right: "prev,next today",
               center: "title",
               left: "dayGridMonth dayGridWeek dayGridDay",
            }}
              

            windowResizeDelay = "200"
            eventBackgroundColor  = "purple"
            eventBorderColor = "black"
            defaultView = "dayGridMonth"
            weekends = {true}
            plugins={[ dayGridPlugin, googleCalendarPlugin]}
            googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
            events={ {
                googleCalendarId: 'giovanniarevalo246@gmail.com'
            }}
            />
            </Paper>
        )
    }
}
