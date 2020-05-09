export const START_GET_DRAFTS = 'START_GET_DRAFTS'
export const SUCCESS_GET_DRAFTS = 'SUCCESS_GET_DRAFTS'
export const FAILED_GET_DRAFTS = 'FAILED_GET_DRAFTS'

export const startGetDrafts = payload => ({
    type: 'START_GET_DRAFTS',
    ...payload
})

export const successGetDrafts = payload => ({
    type: 'SUCCESS_GET_DRAFTS',
    ...payload
})

