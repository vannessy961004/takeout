import axios from "axios"
export default function ajax(url, data={}, type="GET") {
  return new Promise(function (resolve, reject) {
    
    let promise
    
    if(type === 'GET') {
      // 准备 url query 参数数据
      let dataStr =''
      Object.keys(data).forEach(key => {
        dataStr = dataStr + key + "=" + data[key] + "&"
      })
      
      if(dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"))
        url = url + '?' +dataStr
      }
      promise = axios.get(url)
    }else {
      promise = axios.post(url, data)
    }
    
    promise.then(response => {
      resolve(response.data)
    }).catch(error => {
      reject(error)
    })
  })
}