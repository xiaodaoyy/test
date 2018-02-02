/**
 * Created by rm on 2017/10/26.
 */
exports.install = function (Vue, options) {
//脱敏函数
//手机号
  Vue.prototype.transforTelFun=function (phoneNo) {
    if (phoneNo) {
      return phoneNo.replace(/(.{3}).*(.{4})/, "$1****$2");
    }
  }
//身份证号
  Vue.prototype.transforCid=function (cid) {
    if (cid) {
      return cid.replace(/(.{1}).*(.{1})/, "$1****************$2");
    }
  }
//姓名
  Vue.prototype.transforCname=function (name) {
    if (name) {
      return "*" + name.substr(1);
    }
  }


  Vue.prototype.isEmpty=function (str) {
    if (!str || str==null || str=='' || str=='null' || str=='undefined') {
      return true;
    }
  }

  Vue.prototype.transforShip=function (ship) {
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
  Vue.prototype.transforGender=function (gender) {
    if (gender) {
      return gender == "female" ? "女" : "男";
    } else {
      return gender;
    }
  }
};

