import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

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
        <Container maxidth = "lg">
            <AppBar className = {classes.appBar} position = "static" color = "inherit">
                <Typography classname = {classes.heading} variant = "h3" align = "center"> Works for Me</Typography>
                <img className = {classes.image} src = {memories} alt = "memories" height = "60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify = "space-evenly" alignItems = "strech" spacing = {3}>
                        <Grid item xs = {12} sm = {8}>
                            <EventCalendar/>
                        </Grid>
                        <Grid item xs = {12} sm = {4}>
                            <Form />
                        </Grid>
                       
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );

}

export default App;