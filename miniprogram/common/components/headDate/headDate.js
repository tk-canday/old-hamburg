// common/components/headDate/headDate.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: Number,
    }
  },
  observers: {
    index() {
      const index = this.data.index;
      this.setData({preNum: index > 9 ? index : `0${index}`});
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    preNum: '0',
    date: new Date().toDateString(),
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  lifetimes: {
    created() {
      console.log('created');
    },
    attached() {
      console.log('attached');
    },
    ready() {
      console.log('ready');
    },
    moved() {
      console.log('moved');
    },
    detached() {
      console.log('detached');
    }
  },

})
