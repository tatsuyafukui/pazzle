import axios from 'axios';
let instance : any = null;
/**
 * axiosの設定
 * APIのURLとアイムアウトだけ設定してる
 */
if(process.env.NODE_ENV == 'development') {
  instance = axios.create({
    baseURL: 'https://asia-northeast1-pazzle-86ed9.cloudfunctions.net/',
    timeout: 10000
  });
}else {
  instance = axios.create({
    baseURL: 'https://asia-northeast1-pazzle-86ed9.cloudfunctions.net/',
    timeout: 10000
  });
}




export default instance;
