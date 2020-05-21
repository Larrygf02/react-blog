import React, { Fragment, useState } from 'react';
import { Box, Grid, TextField, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1)
    }
}))
function NewStorie() {
    const classes = useStyles();
    // state
    
    const [title, saveTitle ] = useState('')
    const [content, saveContent ] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const storie = {
            title,
            content
        }
        console.log(storie);
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
                        color="primary">
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