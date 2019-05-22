import axios from 'axios'
const baseURL='';
class Axios {
    constructor (props) {
        this.instance = axios.create({
            baseURL,
            timeout: 8000,
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                ...props
            }
        })

    }

    resetLoginInfo (data) {
    }
    updateProps (props) {
    }
    post (path, params, {success, error}) {
        this.instance.post(path,{...params},{headers:{}})
            .then(function (response) {
                if (response && response.data && Number(response.data.status) === 0) {
                    success && success(response.data.data)
                } else {
                    error && error(response.data.msg)
                }
            })
            .catch(function (e) {
                error && error(e)
            })
    }
    get (path, {success, error}) {
        this.instance.get(path)
            .then(function (response) {
                if (response && response.data && (Number(response.data.status) === 0 || response.data.code === 200)) {
                    success && success(response.data.data)
                } else {
                    error && error(response.data.msg)
                }
            })
            .catch(function (e) {
                error && error(e)
            })
    }
    //这里只是用来写测试掉接口用的
    testPost (path,params, {success, error}) {
        success && success()
    }

}
let axiosIns = new Axios({})
export default axiosIns
