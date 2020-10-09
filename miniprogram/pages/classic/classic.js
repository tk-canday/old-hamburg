import { getData, postData } from '../../common/services/fetchData';
import { Api } from '../../common/api';
Page({
  data: {
    userInfo: {
      nickName: '未登录用户',
    },
    latestClassic: {},
  },

  onLoad: function (options) {
    getData(Api.latestClassic).then((res) => {
      this.setData({latestClassic: res.data});
      console.log(this.data.latestClassic);
    });
  },

  onReady: function () {
    const that = this;
    wx.getUserInfo({
      lang: 'zh_CN',
      withCredentials: true,
      success: (result) => {
        that.setData({
          userInfo: result.userInfo,
        });
        console.log({...that.data});
      }});
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('page onShow');
  },

  onPullDownRefresh: function () {
    console.log('page onPullDownRefresh');
  },

  onReachBottom: function () {
    console.log('page onReachBottom');
  },
  onShareAppMessage: function () {
  },

  onLike(e) {
    console.log(e);
    const isLike = e.detail.behavior === 1;
    const param = {
      art_id: this.data.latestClassic.id,
      type: this.data.latestClassic.type,
    };
    postData(isLike ? Api.like : Api.unLike, param).then((res) => {
      const oldData = this.data.latestClassic;
      if (!res.error_code) {
        const newClassic = Object.assign(
          {},
          this.data.latestClassic,
          {
            like_status: isLike ? 1 : 0,
            fav_nums: isLike ? oldData.fav_nums + 1 : oldData.fav_nums - 1,
          }
        );
        this.setData({latestClassic: newClassic});
      }
    });
  }
})