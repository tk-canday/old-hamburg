// common/components/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLiked: {
      type: Number,
      value: 0,
    },
    likeNum: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e){
      const behavior = this.properties.isLiked ? 0 : 1;
      this.triggerEvent('LIKE', {behavior});
    },
  }
})
