export const START_GET_SAVED_STORIES = 'START_GET_SAVED_STORIES';
export const SUCCESS_GET_SAVED_STORIES = 'SUCCESS_GET_SAVED_STORIES'
export const FAILED_GET_SAVED_STORIES = 'FAILED_GET_SAVED_STORIES'

export const startGetSavedStories = payload => ({
    type: 'START_GET_SAVED_STORIES',
    ...payload
})

export const successGetSavedStories = payload => ({
    type: 'SUCCESS_GET_SAVED_STORIES',
    ...payload
})

export const failedGetSavedStories = payload => ({
    type: 'FAILED_GET_SAVED_STORIES',
    ...payload
})