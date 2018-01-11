var PESDK = {
  present: function(options) {
    console.log("Present:");
    console.log(options);
    return new Promise((resolve, reject) => {
      cordova.exec(resolve, reject, "PESDK", "present", [options]);
    })
  }
};
module.exports = PESDK;
