import React, { Fragment } from 'react'
import { Box } from '@material-ui/core';
import TabsItems from '../utils/tabs';

const MyStories = () => {
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <h3>Mis Historias</h3>
                <TabsItems></TabsItems>
            </Box>
        </Fragment>
    )
}

export default MyStories;