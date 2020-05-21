import React from 'react'
import { Fragment } from 'react'
import { Box } from '@material-ui/core'
import TabsItems from '../utils/Tabs'
import ArchivedStories from './ArchivedStories'
import SavedStories from './SavedStories'
import ViewsStories from './ViewsStories'

const MyReadingList = () => {
    const items = [
        { label: 'Guardados', content: <SavedStories/> },
        { label: 'Archivados', content: <ArchivedStories/> },
        { label: 'Recientemente Vistos', content: <ViewsStories/> }
    ]
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <h2>Tu lista de lectura</h2>
                <TabsItems items={items}></TabsItems>
            </Box>
        </Fragment>
    )
}

export default MyReadingList;