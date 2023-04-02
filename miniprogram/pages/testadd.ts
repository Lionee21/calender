var util = require('../utils/util.js');
Page({      
      data: {
        arr:[]
      },
 /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    var str = options.data;
    this.setData({
      date:options.data,
      arr:str
    })
  }
})