export const START_LOGIN = 'START_LOGIN'
export const SUCCESS_LOGIN = 'SUCCESS_LOGIN'
export const FAILED_LOGIN = 'FAILED_LOGIN'

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