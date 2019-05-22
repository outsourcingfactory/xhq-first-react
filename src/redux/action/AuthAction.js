import * as types from '../constants/AuthActionTypes'

export const setUsertoken = usertoken => ({ type: types.SET_USERTOKEN, usertoken});
export const updateUsertoken = usertoken => ({ type: types.UPDATE_USERTOKEN, usertoken});
