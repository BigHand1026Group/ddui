// components_simple/cor_start/cor_start.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // grade:1.5,//分数
        // starsUrls:{},//自定义显示图标
      },
      observer(value){
        if(value&&value.starsUrls){
          this.setData({
            starsUrls:value.starsUrls
          })
        }
      }
    }
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    max:5,
    startArr:[],
    starsUrls:{
      full:'./images/full.png',
      half:'./images/half.png',
      null:'./images/null.png',
    }
  },
  attached(){
    this.init();
  },
  /**
   * 组件的方法列表
   */
  methods: {
    init(){
      var max=this.data.max;
      var config=this.data.config;
      var fullNum=Math.floor(config.grade);
      var decimals=config.grade.toString().split('.')[1];//获取小数
      var startArr=[]
      for(var i=0;i<max;i++){
        if(i<fullNum){
          startArr.push('full')          
        }else{
          startArr.push('null')          
        }
      }
      if(decimals&&fullNum<max){
        // 如果小数存在
        startArr.splice(fullNum,1,'half')
      }
      this.setData({
        startArr:startArr
      })
    },
    setNum(e){
      var num=e.currentTarget.dataset.index
      var config=this.data.config;
      config.grade=num+1
      this.setData({
        config:config
      })
      this.init();
      this.triggerEvent("value",num+1)
    }
  }

})
