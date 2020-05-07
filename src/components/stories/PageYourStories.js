import React, { Fragment } from 'react'
import { Box } from '@material-ui/core';
import TabsItems from '../utils/Tabs';
import Drafts from './Drafts';
import Stories from './Stories';

const MyStories = () => {
    const items = [
        { label: 'Borradores', content: <Drafts/>},
        { label: 'Publicados', content: <Stories/>}
    ]
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <h1>Tus Historias</h1>
                <TabsItems items={items}></TabsItems>
            </Box>
        </Fragment>
    )
}

export default MyStories;