export const START_GET_STORIES = 'START_GET_STORIES'
export const SUCCESS_GET_STORIES = 'SUCCESS_GET_STORIES'
export const START_GET_ALL_STORIES = 'START_GET_ALL_STORIES'
export const SUCCESS_GET_ALL_STORIES = 'SUCCESS_GET_ALL_STORIES'
export const FAILED_GET_ALL_STORIES = 'FAILED_GET_ALL_STORIES'

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

