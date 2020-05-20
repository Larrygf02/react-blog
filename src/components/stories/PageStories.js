import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetAllStories } from '../../actions/storieAction';
import { Box } from '@material-ui/core';

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
                <h1>Bienvenido Usuario</h1>
            </Box>
        </Fragment>
    )
}

export default PageStories;