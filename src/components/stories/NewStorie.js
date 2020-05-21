import React, { Fragment, useState } from 'react';
import { Box, Grid, TextField, Button, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { startNewStorie } from '../../actions/storieAction';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    }
}))
function NewStorie() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    // acceder al store
    const user = useSelector(state => state.auth.user);
    // state
    const [title, saveTitle ] = useState('')
    const [content, saveContent ] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log(user);
        const { ID:userid } = user; 
        const storie = {
            userid,
            title,
            content
        }
        const action = {
            payload: storie,
            history
        }
        dispatch(startNewStorie(action))
        console.log(storie);
    }

    const saveDraft = e => {
        e.preventDefault();
        console.log('Entrando a draft');
    }
    return (
        <Fragment>
            <Box pl={8} pr={8} pt={4}>
                <h2>New Storie</h2>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="title"
                            label="Title"
                            name="title"
                            value={title}
                            onChange={e => saveTitle(e.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                            variant="outlined"
                            margin="normal"
                            multiline
                            fullWidth
                            id="content"
                            label="Content"
                            name="content"
                            value={content}
                            onChange={e => saveContent(e.target.value)}
                            >
                            </TextField>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={saveDraft}>
                        Guardar
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className={classes.button}>
                        Publicar
                    </Button>
                </form>
            </Box>
        </Fragment>
    )
}

export default NewStorie;