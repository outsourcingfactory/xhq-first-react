let LOADING='LOADING';
let USER_DATA='USER_DATA';
let ERROR_USER_DATA='ERROR_USER_DATA';

const initialState =
    {
      userLid:'32131231231'
    };

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOADING:
            return {

            };
        case USER_DATA:
            return {
               ...action.payload
            };
        case ERROR_USER_DATA:
            return {

            };
        default:
            return state
    }
}
