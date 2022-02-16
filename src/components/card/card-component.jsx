import React, { useEffect, useState } from 'react';
import {
    Button,
    Card,
    CardMedia,
    Grid,
    Image,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    cardContainer: {
        height: '80vh',
        width: '25vw',
        padding: theme.spacing(3)
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh'
    }
}))

const CardComponent = () => {
    const [media, setMedia] = useState({})

    const classes = useStyles();

    useEffect(() => {
        setMedia({
            "download": "0",
            "image": "https://occ-0-2851-38.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYDAY7Malaj4klMEjUvy1YC7O6JXaUodaDIW2xyYs_huUch4quAuREHvGe6VlIj6o1K3THeI7eKXlBDuS6a-JZH7sw.jpg?r=d87",
            "imdbid": "tt1375666",
            "largeimage": "https://occ-0-2773-2774.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABWd2lSb1KtWR4cvxeBR4L0vn5l_wcDJzGIEE-CQVWLxEyhChbypsF6DpuBSXPAM2VmtHaM05OYt1c1EZwCGuGGyy3PzV.jpg?r=d87",
            "netflixid": "70131314",
            "rating": "8.8",
            "released": "2010",
            "runtime": "2h 28m",
            "synopsis": "In this mindbending sci-fi thriller, a man runs an espionage business built around entering the subconscious of his targets to steal their thoughts.",
            "title": "Inception",
            "type": "movie",
            "unogsdate": "2015-04-14"
        })
    }, [])

    return (
        <Grid container className={classes.titleContainer} direction="column">
            <Card className={classes.cardContainer}>
                <CardMedia
                    component="img"
                    // sx={{ width: 151 }}
                    image={media.largeimage}
                    alt="Live from space album cover"
                />
                <Grid container alignItems="space-between">
                    <Grid>
                        <Typography variant='h4' align='center'>{_.get(media, "title", "A Walk To Remember")}</Typography>
                        <Typography variant='h6'>{_.get(media, "released", "June 1992")}</Typography>
                        <Typography variant='h6'>
                            {/* <BiStar /> */}
                            {_.get(media, "rating", "0")}/10
                        </Typography>
                        <Typography variant='h6'>{_.get(media, "runtime", "Too Long")}</Typography>
                        <Typography variant='h6'>{_.get(media, "synopsis", "A good movie with that girl that's so 2003")}</Typography>
                    </Grid>
                    <Grid>
                        {/* <Button id="white-fill-button" onClick={Unlike(media.fbid)}>Unlike</Button> */}
                        <Button variant="contained" color="error" href={"https://www.netflix.com/title/" + _.get(media, 'netflixid', '81001550')} target="_blank">
                            {/* <FaPlay size="0.8em" />  */}
                            Watch Now
                        </Button>
                        <Button variant="contained" color="error" component={Link} to="/card">Hello</Button>
                        <Button variant="contained" color="error">Goodbye</Button>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export default CardComponent;