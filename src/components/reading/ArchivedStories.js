import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@material-ui/core';
import useStylesGlobal from '../utils/StylesGlobal';
import { startGetArchivedStories } from '../../actions/readAction';

function ArchivedStories() {
    const classes = useStylesGlobal();
    const dispatch = useDispatch();
    // acceder al state
    const user = useSelector(state => state.auth.user)
    const { ID:userid } = user;
    useEffect(() => {
        console.log(userid);
        dispatch(startGetArchivedStories({userid}))
    }, [dispatch, userid])

    const loading = useSelector(state => state.reading.loading)
    const archived_stories = useSelector(state => state.reading.archived_stories)
    return (
        <Fragment>
            { loading ? 'Cargando...': null}
            { archived_stories.length === 0 ? 'No hay datos': null }
            { archived_stories.map(storie => (
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

export default ArchivedStories;