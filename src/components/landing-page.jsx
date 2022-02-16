import React from 'react';
import { 
    Button, 
    Grid, 
    Typography 
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}))

const LandingPage = () => {

    const classes = useStyles();

    return (
            <Grid className={classes.titleContainer} direction="column">
                <Typography variant='h1' align='center' color={'white'}>
                    Ourflix
                </Typography>
                <Grid>
                    <Button variant="contained" color="error" component={Link} to="/card">Hello</Button>
                    <Button variant="contained" color="error">Goodbye</Button>
                </Grid>
            </Grid>
    )
}

export default LandingPage;