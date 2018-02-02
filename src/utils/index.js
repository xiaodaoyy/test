/**
 * 移动对象中的空对象，包括空字条串
 * @param obj
 * @returns {*}
 */
function removeEmpty(obj) {
  Object.keys(obj).forEach(function (key) {
    (obj[key] && typeof obj[key] === 'object') && removeEmpty(obj[key]) ||
    (obj[key] === undefined || obj[key] === null || obj[key] === "") && delete obj[key]
  });
  return obj;
}

/**
 * 获取请求参数
 */
function param(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURIComponent(r[2]);
  return null;
};

/**
 * 获取token
 * @returns {string}
 */
function getToken() {
  return localStorage.getItem("token");
}

/**
 * 获取token
 * @returns {string}
 */
function getUser() {
  let user = localStorage.getItem("userInfo");
  if (!user) {
    return null;
  }
  return JSON.parse(BASE64.decoder(user));
}

function isCid(cid){
  var xishu = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
  var sum = 0;
  for(var i=0; i<xishu.length; i++){
    sum += parseInt(cid.charAt(i)) * xishu[i];
  }

  var yushu = sum%11;

  var ch = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
  var code = ch[yushu];
  var last = cid.charAt(17);
  last = last=='x' ? 'X': last;
  return  last == code;
}

export default {
  removeEmpty, getToken, getUser, param,isCid
}
