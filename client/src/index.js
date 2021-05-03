import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';
import './index.css';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

// const {google} = require('googleapis')

// const {OAuth2} = google.auth

// const oAuth2Client = new OAuth2('480582175832-b9o2cngltmb7nc9s8af96804rocehgl0.apps.googleusercontent.com','8XD6Mko7KVr-rf92EVbfudB3')

// oAuth2Client.setCredentials({
//     refresh_token: '1//04gzWkIs_aPbbCgYIARAAGAQSNwF-L9Ir1KKFQ-w2jI_luBQIXmYVEDtuP2bwblIWL5tNwP6qJqt375JEFLR8uJtnBoNjL9cfx8U'
// })

// const calendar = google.calendar({version: 'v3', auth: oAuth2Client})

// const eventStartTime = new Date()
// eventStartTime.setDate(eventStartTime.getDay() + 2)

// const eventEndTime = new Date()
// eventEndTime.setDate(eventEndTime.getDay() + 3)

// const event = {
//     summary: 'meet with da boy',
//     location: '1194 E 54th St',
//     description: 'talk business',
//     start: {
//         dateTime: eventStartTime,
//         TimeZone: 'America/Los Angeles'
//     },
//     end: {
//         dateTime: eventEndTime,
//         TimeZone: 'America/Los Angeles'
//     }

// }

// calendar.freebusy.query({
//     resource: {
//         timeMin: eventStartTime,
//         timeMax: eventEndTime,
//         TimeZone: 'America/Los Angeles',
//         items: [{id: 'primary'}]
//     },
// },
// (err,res)=>{
//     if(err) return console.error('Free Busy Query Error: ', err)
//     const eventsArr = res.data.calendars.primary.busy
    
//     if (eventsArr.lenth = 0)
//         return calendar.events.insert(
//             {calendarId: 'primary', resource: event},
//             err => {
//                 if(err) return console.error('Calendar Event Creation Error: ', err)
//                 return console.log('Calendar Event Created')
//             }
//         )
//         return console.log(`Sorry I'm Busys`)
// }
// )

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

   