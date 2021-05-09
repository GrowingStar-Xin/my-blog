import axios from 'axios'
import { showMessage } from '../utils'

const ins = axios.create();
ins.interceptors.response.use((resp) => { //拦截器
    if (resp.data.code === 0) {
        //console.log(resp.data.data);
        return resp.data.data;
    }
    showMessage({
        'content': resp.data.msg,
        'type': "error"
    })
    return null
})


export default ins;