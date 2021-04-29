import React, { useEffect } from 'react';
import {  AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container'

import {getPosts} from './actions/posts'
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/calendar.png';
import useStyles from './styles';
import EventCalendar from './components/Calendar/EventCalendar';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {dispatch(getPosts())}, [dispatch])

    return(
        <Container fluid = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography classname = {classes.heading} variant = "h3" align = "center" > Works for Me</Typography>
                <img className = {classes.image} src = {memories} alt = "memories" height = "60" />
            </AppBar>
            {/* <Grow in> */}
                <Container> 
                    <Grid container justify = "space-evenly" alignItems = "strech" spacing = {4}>
                        <Grid item xs = {12} sm = {9}>
                            <EventCalendar /> 
                        </Grid>
                        <Grid item xs = {12} sm = {3}>
                            <Form />
                        </Grid>
                        <Grid item xs = {12} sm = {12}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            {/* </Grow> */}
        </Container>
    );

}

export default App;