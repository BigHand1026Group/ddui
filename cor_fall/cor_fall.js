// components_simple/cor_fall/cor_fall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    config:[]
  },
  attached(){
    this.initImage();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initImage(){
      // 初始化掉落图片
      var arr=[]
      var ww=wx.getSystemInfoSync().windowWidth
      var fastNum=50;
      for(var i=0;i<200;i++){
        arr.push({
          style:`
          width:${this.rnd(20,30)}px;
          top:-100rpx;
          left:${this.rnd(1,ww-30)}px;
          animation-delay:${i < fastNum ? this.rnd(0, 20):this.rnd(0,30)}s;
          animation-name: fall${i<fastNum?'1fast':this.rnd(1,12)};`,
          class:`${i<fastNum?'fast':''}`,
          imgUrl:`./image/fallImage${this.rnd(1,5)}.png`
        })
      }
      this.setData({
        config:arr
      })
    },
    rnd(n, m){
      // 随机区间函数
      var random = Math.floor(Math.random()*(m-n+1)+n);
      return random;
    }
  }
})
