export const START_LOGIN = 'START_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'
export const START_NEW_USER = 'START_NEW_USER'
export const SUCCESS_NEW_USER = 'SUCCESS_NEW_USER'
export const FAILED_NEW_USER = 'FAILED_NEW_USER'

export const startLogin = payload => ({
    type: 'START_LOGIN',
    ...payload
})

export const successLogin = payload => ({
    type: 'SUCCESS_LOGIN',
    ...payload
})

export const failedLogin = payload => ({
    type: 'FAILED_LOGIN',
    ...payload
})

export const startNewUser = payload => ({
    type: 'START_NEW_USER',
    ...payload
})

export const successNewUser = payload => ({
    type: 'SUCCESS_NEW_USER',
    ...payload
})

export const failedNewUser = payload => ({
    type: 'FAILED_NEW_USER',
    ...payload
})