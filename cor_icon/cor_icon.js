// components_simple/cor_icon/cor_icon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src:{
      type:String
    },
    previews:{
      type:Array|String
    },
    previewIndex:{
      type:Number
    },
    size:{
      type:Number
    },
    wh:{
      type:String,
      observer(v){
        if(v){
          var wh=v.split("|")
          this.setData({
            width:wh[0],
            height:wh[1],  
          })
        }
      }
    },
    br:{
      type:String,
    },
    typeIcon:{
      type:String,
      observer(v){
        if(v){
          var whs={
            2:{
              width:8,
              height:14
            }
          }
          this.setData({
            src:`./image/type${v}.png`,
            width:whs[v].width,
            height:whs[v].height,  
          })
        }
      }
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
    width:0,
    height:0,  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tap(){
      if(!this.data.previews)return;
      if(this.data.previews instanceof Array){
        wx.previewImage({
          current: this.data.previewIndex||0, // 当前显示图片的http链接
          urls: this.data.previews // 需要预览的图片http链接列表
        })
      }else{
        wx.previewImage({
          current:0, // 当前显示图片的http链接
          urls: [this.data.previews] // 需要预览的图片http链接列表
        })
      }
    }
  }
})
