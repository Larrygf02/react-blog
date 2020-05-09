import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useStylesGlobal from '../utils/StylesGlobal';
import { startGetDrafts } from '../../actions/draftAction';
import Divider from '@material-ui/core/Divider';

function Drafts() {
    const classes = useStylesGlobal();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startGetDrafts())
    }, [dispatch])

    // acceder al state
    const loading = useSelector(state => state.drafts.loading)
    const drafts = useSelector(state => state.drafts.drafts)
    return (
        <Fragment>
            { loading ? <p>Cargando</p>: null}
            { drafts.map(draft => (
                <div key={draft.ID}>
                    <h2>{draft.Title}</h2>
                    <p className={classes.grey}>{draft.Content}</p>
                    <span className={classes.grey}>{draft.CreatedAt}</span>
                    <Divider/>
                </div>
            ))}
        </Fragment>
    )
}

export default Drafts;