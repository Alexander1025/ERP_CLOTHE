import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);


export const HttpServer = {
  get: function get(url, data={}, showTips = false) {
    let promise = new Promise(function (resolve, reject) {
      let headers = setHeader();
      axios.get(url, {params: data, 'headers': headers}, showTips).then((res) => {
        if (res.data.status == 0) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
        showMessage(res.data, showTips);
      }).catch((err) => {
        reject(err);
        showMessage({'status': -1, 'message': '网络错误'}, showTips);
      });
    });
    return promise;
  },
};
function setHeader() {
  let headers = {
    'Content-Type': 'application/json'
  };
  return headers;
}
function showMessage(res, showTips) {
  if (!res) {
    return;
  }
  let type = '';
  switch (Number(res.status)) {
    case 0:
      type = 'success';
      break;
    case 1:
      type = 'error';
      break;
    case -1:
      type = 'error';
      break;
    case 3:
      type = 'error';
      showTips = true;
      break;
    case 1001:
      type = 'error';
      showTips = true;
      break;
    default:
      type = 'error';
      break;
  }
  if (showTips) {
    console.log(type);
    alert(res.message);
  }
}

