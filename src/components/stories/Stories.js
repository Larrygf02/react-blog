import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startGetStories } from '../../actions/storieAction';

function Stories() {
    // Inicializar el dispatch
    const dispatch = useDispatch();
    // const [ stories, setStories] = useState([]);
    useEffect(() => {
        dispatch(startGetStories());
    }, [dispatch])
    // acceder al state
    const loading = useSelector(state => state.stories.loading)
    const stories = useSelector(state => state.stories.stories)
    return (
        <Fragment>
            {loading ? <p>Cargando</p>: null}
            {stories.map(storie => (
                <div key={storie.ID}>
                    <h3>{storie.Title}</h3>
                    <p>{storie.Content}</p>
                    <span>{storie.CreatedAt}</span>
                </div>
            ))}
        </Fragment>
    )
}

export default Stories;