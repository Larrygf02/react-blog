import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAllStories } from '../../actions/storieAction';
import { Box, Grid } from '@material-ui/core';
import CardStorie from './CardStorie';

function PageStories() {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log('Entro al dispatch')
        dispatch(startGetAllStories())
    }, [dispatch])
    // acceder al state
    const stories = useSelector(state => state.stories.stories_to_you)
    console.log(stories);
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <Grid container spacing={4}>
                    {stories.map(storie => (
                        <CardStorie storie={storie} key={storie.ID}></CardStorie>
                    ))}
                </Grid>
            </Box>
        </Fragment>
    )
}

export default PageStories;