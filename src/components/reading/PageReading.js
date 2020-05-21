import React from 'react'
import { Fragment } from 'react'
import { Box } from '@material-ui/core'
import TabsItems from '../utils/Tabs'

const MyReadingList = () => {
    const items = []
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <h2>Tu lista de lectura</h2>
                <TabsItems items={items}></TabsItems>
            </Box>
        </Fragment>
    )
}