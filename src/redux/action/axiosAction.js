import axios from '../../common/utils/Axios';
import api from '../../common/api/api'
export function getUserData(){
    return dispatch=>{
        dispatch(Loading);
        return axios.post(api.QUERY_ADVANCE_ORDER,{ payToken: 'b9932193f6a44c96a67a502ddc5f4f1e'},{
            success:(oData)=>{
                dispatch(userData(oData));

            },
            error:(msg)=>{
                console.log('xhq==>msg',msg);
                dispatch(errorData);
            }
        })

    }
}
export const Loading=()=>({type:'LODING'});
export const userData=data=>({ type: 'USER_DATA', payload:data});
export const errorData=()=>({type:'ERROR_USER_DATA'});
