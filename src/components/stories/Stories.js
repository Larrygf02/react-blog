import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetStories } from '../../actions/storieAction';
import Divider from '@material-ui/core/Divider';
import useStylesGlobal from '../utils/StylesGlobal';

function Stories() {
    // Inicializar el dispatch
    const classes = useStylesGlobal();
    const dispatch = useDispatch();
    // acceder al state
    const user = useSelector(state => state.auth.user)
    const { ID:userid } = user;
    useEffect(() => {
        dispatch(startGetStories({userid}));
    }, [dispatch, userid])
    // acceder al state
    const loading = useSelector(state => state.stories.loading)
    const stories = useSelector(state => state.stories.stories)
    return (
        <Fragment>
            {loading ? <p>Cargando</p>: null}
            {stories.map(storie => (
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

export default Stories;