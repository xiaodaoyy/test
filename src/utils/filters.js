function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function parseTime(time, cFormat) {
  if (arguments.length === 0) {
    return null;
  }

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time == 'object') {
    date = time;
  } else {
    date = new Date(parseInt(time));
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}

export function formatTime(time, option) {
  time = +time * 1000;
  const d = new Date(time);
  const now = Date.now();

  const diff = (now - d) / 1000;

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/* 数字 格式化*/
export function nFormatter(num, digits) {
  const si = [
    {value: 1E18, symbol: 'E'},
    {value: 1E15, symbol: 'P'},
    {value: 1E12, symbol: 'T'},
    {value: 1E9, symbol: 'G'},
    {value: 1E6, symbol: 'M'},
    {value: 1E3, symbol: 'k'}
  ];
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol;
    }
  }
  return num.toString();
}

export function html2Text(val) {
  const div = document.createElement('div');
  div.innerHTML = val;
  return div.textContent || div.innerText;
}

export function toThousandslsFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','));
}

//手机号码
let transforTel = phoneNo =>{
    if(phoneNo) {
    return phoneNo.replace(/(.{3}).*(.{4})/, "$1****$2");
  }else{
    return phoneNo;
  }
}

//身份证
let transforCid = cid =>{
  if(cid) {
    return cid.replace(/(.{1}).*(.{1})/, "$1****************$2");
  }else{
    return cid;
  }
}
//社保卡号
/*let transforCard = num =>{
  if(Base64.decode(num)) {
    return Base64.decode(num).replace(/(.{2}).*(.{2})/, "$1****$2");
  }else{
    return Base64.decode(num);
  }
}*/


//社保卡号
let transforCard = num =>{
  if(num) {
    return num.replace(/(.{2}).*(.{2})/, "$1****$2");
  }else{
    return num;
  }
}

//姓名
let transforCname = cname =>{
  if(cname) {
    return "*" + cname.substr(1);
  }else{
    return cname;
  }
}

//社保卡状态
let transforCardState = card =>{
  if(card) {
    var ret = card;
    switch (card) {
      case '0':
        ret = '未申领';
        break;
      case '1':
        ret = '正常';
        break;
      case '2':
        ret = '挂失';
        break;
      case '3':
        ret = '注销';
        break;
    }
    return ret
  }else{
    return card;
  }
}

//人员关系
let transforShip = ship =>{
  if(ship) {
    var ret = ship;
    switch (ship) {
      case '1':
        ret = '父母';
        break;
      case '2':
        ret = '配偶';
        break;
      case '3':
        ret = '子女';
        break;
      case '9':
        ret = '其他';
        break;
    }
    return ret
  }else{
    return ship;
  }
}

//判断性别
let transforGender = gender =>{
  if (gender) {
    return gender == "female" ? "女" : "男";
  } else {
    return gender;
  }
}

//判断
let transforStatus = status =>{
  if (status) {
    return status == "0" ? "未到账" : "已实缴";
  } else {
    return status;
  }
}

//判断
let transforPensionStatus = status =>{
  if (status) {
    return status == "0" ? "未到账" : "已实发";
  } else {
    return status;
  }
}

let transforFamilyStatus = status =>{
  //社保卡状态
    if(status) {
      var ret = status;
      switch (status) {
        case '0':
          ret = '授权待审核';
          break;
        case '1':
          ret = '已授权';
          break;
        case '2':
          ret = '解绑待审核';
          break;
        case '3':
          ret = '授权审核未通过';
          break;
        case '3':
          ret = '解绑审核未通过';
          break;
      }
      return ret
    }else{
      return status;
    }

}
export {transforTel,transforCid,transforCname,transforCardState,transforShip,transforGender,transforCard,transforStatus,transforPensionStatus,transforFamilyStatus}
