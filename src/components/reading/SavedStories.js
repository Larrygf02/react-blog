import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetSavedStories } from '../../actions/readAction';
import { useEffect } from 'react';
import { Divider } from '@material-ui/core';
import useStylesGlobal from '../utils/StylesGlobal';

function SavedStories() {
    const classes = useStylesGlobal();
    const dispatch = useDispatch();
    // acceder al state
    const user = useSelector(state => state.auth.user)
    const { ID:userid } = user;
    useEffect(() => {
        console.log(userid);
        dispatch(startGetSavedStories({userid}))
    }, [dispatch, userid])

    const loading = useSelector(state => state.reading.loading)
    const saved_stories = useSelector(state => state.reading.saved_stories)
    
    return (
        <Fragment>
            { loading ? 'Cargando ...': null}
            { saved_stories.length === 0 ? 'No hay datos': null }
            { saved_stories.map(storie => (
                <div key={storie.ID}>
                    <h2>{storie.Title}</h2>
                    <p className={classes.grey}>{storie.Content}</p>
                    <span className={classes.grey}>{storie.CreatedAt}</span>
                    <Divider/>
                </div>
            ))}
        </Fragment>
    )
}

export default SavedStories;