import React, {Component} from 'react'
import {Typography, Paper} from '@material-ui/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

export default class EventCalendar extends Component {
    
    render() {
        return(
            <Paper>
            <FullCalendar
            
            
            windowResizeDelay = "200"
            eventBackgroundColor  = "purple"
            eventBorderColor = "black"
            defaultView = "dayGridMonth"
            plugins={[ dayGridPlugin ]}
            weekends = {true}
            events={[
              { title: 'event 1', date: '2021-04-01' },
              { title: 'event 2', date: '2021-04-02' }

              
            ]}
            />
            </Paper>
        )
    }
}
