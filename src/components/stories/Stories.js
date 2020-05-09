import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { startGetStories } from '../../actions/storieAction';
import axios from 'axios';

function Stories() {
    // Inicializar el dispatch
    const dispatch = useDispatch();
    const [ stories, setStories] = useState([]);
    useEffect(() => {
        if (stories.length === 0) {
            dispatch(startGetStories());
            //setStories([{}])
            axios.get('http://localhost:5000/tasks')
                .then(response => console.log(response))
        }
    }, [stories.length, dispatch])
    return (
        <h2>Mis historias</h2>
    )
}

export default Stories;