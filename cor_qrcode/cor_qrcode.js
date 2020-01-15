// components_simple/cor_qrcode/cor_qrcode.js
const QRCode=require('./lib/qrcode');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      size:{
        type:String
      },
      text:{
        type:String,
        observer(v){
          if(v){
            var time=setTimeout(()=>{
              clearTimeout(time)
              this.init();
            },100)
          }
        }
      },
      colorDark:{
        type:String
      },
      colorLight:{
        type:String
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  attached(){

  },
  ready(){
  },
  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      this.getWXMLInfo("#ShareCode").then((r) => {
        this.initCode({
          id: 'canvas',
          text:this.data.text,
          w: r[0].width,
          h: r[0].height,
        })
      })
    },
    initCode(o){
      //初始化二维码
      var r = new QRCode(o.id, {
        text:o.text,
        width: o.w,
        height: o.h,
        colorDark: this.data.colorDark||"#1CA4FC",
        colorLight: this.data.colorLight||"white",
        correctLevel: QRCode.CorrectLevel.H,
      }, this);
      console.log(r,'rrrrrrrrr')
    },
    getWXMLInfo(dom){
      //获取wxml信息
      return new Promise((resolve,reject)=>{
        var query = wx.createSelectorQuery().in(this)
        query.select(dom).boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec(function (res) {
          resolve(res)
        })
      })
    },
  }
})
