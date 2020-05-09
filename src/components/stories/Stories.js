import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetStories } from '../../actions/storieAction';

function Stories() {
    // Inicializar el dispatch
    const dispatch = useDispatch();
    const [ stories, setStories] = useState([]);
    useEffect(() => {
        if (stories.length === 0) {
            dispatch(startGetStories());
        }
    }, [stories.length, dispatch])
    return (
        <h2>Mis historias</h2>
    )
}

export default Stories;