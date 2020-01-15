// components_simple/cor_selectPhotos/cor_selectPhotos.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        count:9,//默认最大的限制照片
        // bgUrl:"",// 背景图片
      },
      observer(v){
        
      }
    },
    defalut:{
      type:Object,
      observer(o){
        this.setDefalut(o);
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    nativeImage:[],//选择的图片,
    placeholderNum:0,//占位的数量
  },

  /**
   * 组件的方法列表
   */
  methods: {
    addImage: function () {
      //发布动态--增加图片事件
      var config=this.data.config
      var count=(config&&config.count)||9;
      var nativeImage=this.data.nativeImage;//选择的图片
      count=count-nativeImage.length;
      wx.chooseImage({
        count: count, // 默认9
        sizeType: (config&&config.sizeType)||['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: (config&&config.sourceType)||['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: (res) => {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var maxSize=config.maxSize||1024
          var noGetNum=0
          var images=[]
          res.tempFiles.forEach((item,index)=> {
              if(item.size/1000<maxSize){
                images.push(item.path)
              }else{
                noGetNum+=1
              }
          });
          if(noGetNum>0){
            wx.showToast({
              title:noGetNum+`张图片超过${maxSize}kb,请重新选择`,
              icon: 'none',
              duration: 2000
            })
          }
          var tempFilePaths = images
          var nativeImage=[...this.data.nativeImage,...tempFilePaths]
          this.setData({
            nativeImage:nativeImage
          })
          this.getPlaceholderNum();
          // console.log(this.data.nativeImage,'nativeImage')
          this.triggerEvent("change",{images:this.data.nativeImage})
        }
      })
    },
    delectPostImg: function (e) {
      //发布动态--删除即将要发布的图片
      var nativeImage = this.data.nativeImage;
      nativeImage.splice(e.currentTarget.dataset.index, 1)
      this.setData({
        nativeImage: nativeImage
      })
      this.getPlaceholderNum();
      this.triggerEvent("change",{images:this.data.nativeImage})
    },
    getPlaceholderNum(){
      // 补充占位元素
      var nativeImage=this.data.nativeImage
      var config=this.data.config
      var row=config.row||0
      if(row>0){
        var placeholderNum=(Math.ceil(nativeImage.length/row)*row)-nativeImage.length-1;//计算占位的数量，因为选择占了一栏，所以需要减一
        if(nativeImage.length==config.count)placeholderNum++;//如果没有选择的一项则加1
        this.setData({
          placeholderNum:placeholderNum
        })
      }
    },
    setDefalut(nativeImage){
      // 设置默认值
      if(!nativeImage instanceof Array)return;
      nativeImage.forEach((item,index)=>{
        if(!item)nativeImage.splice(index,1)
      })
      this.setData({
        nativeImage:nativeImage
      }) 
      this.getPlaceholderNum();
    }
  }
})
