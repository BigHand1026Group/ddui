// 增加减少 商品 控件
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    maxNum:{
      type:null,
      value:9999,//默认最大值
    },
    defaultNum:{
      // 默认值
      type:Number,
      observer(v){
        if(v>this.data.maxNum){
          v=this.data.maxNum
          console.error('设置的数量超过设置的最大值')
          this.triggerEvent('maxError')
        }
        this.setData({pruNum:v})
      }
    },
    udData:{
      // 自定义数据，用于返回
      type:null,
    },
    icons:{
      // 自定义加减图标
      type:Array,
    },
    stype:{
      // 类型
      type:String
    }
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的初始数据
   */
  data: {
    pruNum:1,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    addPru: function () {
      //增加
      var nowPru = this.data.pruNum;
      var maxNum = this.data.maxNum;
      if (nowPru >= maxNum) {
        nowPru=maxNum
      } else {
        nowPru=nowPru + 1
      }
      this.setData({
        pruNum: nowPru
      })
      this.putNum()
    },
    lessPru: function () {
      //减少
      var nowPru = this.data.pruNum;
      if (nowPru <= 0) {
        nowPru=0;
      } else {
        nowPru=nowPru - 1
      }
      this.setData({
        pruNum: nowPru
      })
      this.putNum()

    },
    userInput: function (e) {
      //离开输入框
      var nowPru = e.detail.value;
      var maxNum = this.data.maxNum
      if (nowPru <= 0) nowPru=0
      if (nowPru >= maxNum)nowPru=maxNum
      this.setData({
        pruNum: parseInt(nowPru)
      })
      this.putNum()
    },
    putNum(){
      //传递最终数字
      // setTimeout(()=>{
        var obj={
          num: this.data.pruNum,
          data:this.data.udData||false
        }
        this.triggerEvent('getnum',obj)
      // },50)
    }
  }
})
