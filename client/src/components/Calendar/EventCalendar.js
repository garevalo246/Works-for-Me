import React, {Component} from 'react'
import {Typography, Paper, requirePropFactory} from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import './Calendar.css';

import googleCalendarPlugin from '@fullcalendar/google-calendar';
export default class EventCalendar extends Component {

    
    render() {
       
        return(
            <Paper variant = "outlined" elevation = {3}>
            <FullCalendar           
            aspectRatio = '1.55' 
            headerToolbar={{
               right: "prev,next today",
               center: "title",
               left: "dayGridMonth dayGridWeek dayGridDay",
            }}
            windowResizeDelay = "200"
            eventBackgroundColor  = "purple"
            eventBorderColor = "purple"
            defaultView = "dayGridMonth"
            selectable = {true}
            editable = {true}
            unselectAuto = {true}
            weekends = {true}
            
            // eventClick = {eventClickInfo}              
        
            themeSystem = 'bootstrap'
        
            plugins={[ dayGridPlugin, interactionPlugin, googleCalendarPlugin]}

            googleCalendarApiKey= 'AIzaSyA7ILoMzctHVI16y1LWaTPUKlMp1sWcT_Q'
            
            events={ {
                googleCalendarId: 'giovanniarevalo246@gmail.com',
               
            }}
            />
            </Paper>
        )
    }
}
