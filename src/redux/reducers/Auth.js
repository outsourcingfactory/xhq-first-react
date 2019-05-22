import {
   SET_USERTOKEN,
   UPDATE_USERTOKEN
} from '../constants/AuthActionTypes'

const initialState =
    {
        usertoken: '11111111',
        id: 0
    };

export default function auth(state = initialState, action) {
    switch (action.type) {
        case SET_USERTOKEN:
            return {
                usertoken:action.usertoken,
                id:0
            }
        case UPDATE_USERTOKEN:
            return {
                usertoken:action.usertoken,
                id:1
            }
        default:
            return state
    }
}
