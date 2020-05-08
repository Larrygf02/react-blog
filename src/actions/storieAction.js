export const START_GET_STORIES = 'START_GET_STORIES'
export const SUCCESS_GET_STORIES = 'SUCCESS_GET_STORIES'

const startGetStories = payload => ({
    type: 'START_GET_STORIES',
    ...payload
});

const successGetStories = payload => ({
    type: 'SUCCESS_GET_STORIES',
    ...payload
})