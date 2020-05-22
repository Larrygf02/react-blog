import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startGetSavedStories } from '../../actions/readAction';
import { useEffect } from 'react';

function SavedStories() {
    const dispatch = useDispatch();
    // acceder al state
    const user = useSelector(state => state.auth.user)
    const { ID:userid } = user;
    useEffect(() => {
        console.log(userid);
        dispatch(startGetSavedStories({userid}))
    }, [dispatch, userid])

    return (
        <Fragment>
            <h3>Historias Guardadas</h3>
        </Fragment>
    )
}

export default SavedStories;