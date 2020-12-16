
/**
 * httpApi模块接口列表
 */
 
import http from './http'; // 导入http中创建的axios实例
import qs from 'qs'; // 导入qs模块
let apiUrl = '127.0.0.1/';//接口地址

const api = { 
     // 演示get
    // articleDetail (params) {        
    //      注意get请求params参数外要加{}
    //     return http.get(`${apiUrl}Car/submit_price`,{params});     
    // },
    //示例 post 上传文件 上传无需QS转化数据
    slpost(params) {
        return http.post(`${apiUrl}Home/Index/upload`,params.formData,params.header)
    },
    //示例 post 传参
    sl1post(params) {
        return http.post(`${apiUrl}Home/Index/upload`,qs.stringify(params))
    },
}

export default api;