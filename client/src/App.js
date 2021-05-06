import React, { useEffect } from 'react';
import {  AppBar,Paper, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'

import {getPosts} from './actions/posts'
import Form from './components/Form/Form';
import FriendForm from './components/Friends/FriendForm'
import FriendList from './components/Friends/FriendList'
import memories from './images/calendar.png';
import useStyles from './styles';
import EventCalendar from './components/Calendar/EventCalendar';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const function (eventClickInfo) {
    //  eventClickInfo.jsEvent   
    // }
  
    useEffect(()=> {dispatch(getPosts())}, [dispatch])

    return(
        <Container fluid = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography classname = {classes.heading} variant = "h3" align = "center" > Works for Me</Typography>
                <img className = {classes.image} src = {memories} alt = "memories" height = "60"  />
            </AppBar>
                <Container> 
                    <Grid container justify = "space-evenly" alignItems = "strech" spacing = {3}>
                        <Grid item xs = {12} sm = {2}>
                            <FriendForm />
                            <br></br>
                            <FriendList />
                        </Grid>
                        <Grid item xs = {12} sm = {7}>
                            <EventCalendar /> 
                        </Grid>
                        <Grid item xs = {12} sm = {2}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
        </Container>
    );

}

export default App;