export const START_GET_STORIES = 'START_GET_STORIES'
export const SUCCESS_GET_STORIES = 'SUCCESS_GET_STORIES'
export const START_GET_ALL_STORIES = 'START_GET_ALL_STORIES'
export const SUCCESS_GET_ALL_STORIES = 'SUCCESS_GET_ALL_STORIES'
export const FAILED_GET_ALL_STORIES = 'FAILED_GET_ALL_STORIES'
// NEW STORIE
export const START_NEW_STORIE = 'START_NEW_STORIE'
export const SUCCESS_NEW_STORIE = 'SUCCESS_NEW_STORIE'
export const FAILED_NEW_STORIE = 'FAILED_NEW_STORIE'

export const startGetStories = payload => ({
    type: 'START_GET_STORIES',
    ...payload
});

export const successGetStories = payload => ({
    type: 'SUCCESS_GET_STORIES',
    ...payload
})

export const startGetAllStories = payload => ({
    type: 'START_GET_ALL_STORIES',
    ...payload
})

export const successGetAllStories = payload => ({
    type: 'SUCCESS_GET_ALL_STORIES',
    ...payload
})

export const failedGetAllStories = payload => ({
    type: 'FAILED_GET_ALL_STORIES',
    ...payload
})

export const startNewStorie = payload => ({
    type: 'START_NEW_STORIE',
    ...payload
})

export const successNewStorie = payload => ({
    type: 'SUCCESS_NEW_STORIE',
    ...payload
})

export const failedNewStorie = payload => ({
    type: 'FAILED_NEW_STORIE',
    ...payload
})



