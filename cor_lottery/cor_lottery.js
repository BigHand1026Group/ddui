// components_simple/cor_lottery/cor_lottery.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      observer(config){
        if(config.list&&config.list.length>0){
          config.list.splice(4,0,'btn')
        }
        this.setData({
          list:config.list||[],
          serverSelectId:config.serverSelectId||''
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[],//数据
    selectId:'',//循环动画所用id
    serverSelectId:'',//服务器抽中结果
    showLotteryPanel:false,//显示抽奖结果
    showGetLotteryPanel:true,//显示抽奖界面
    lotteryIndex:null,//抽奖结果对应列表的索引
    clickLotteryBtn:0,//点击抽奖按钮状态
    
  },
  created() {
    this.initLottery();
  },
  /**
   * 组件的方法列表
   */
  
  methods: {
    initLottery(){
      this.sequence=[0,1,2,5,8,7,6,3]
      var index=this.sequence.indexOf(this.data.lotteryIndex)
      this.time=null;//定时器
      this.loopIndex=index>-1?index:0;//循环开始的索引如果有上一次的索引就从上一次开始
      this.loopNum=0;//循环次数
      this.speed=100;//循环速度
      this.canLottery=true;//是否能够点击抽奖
      
    },
    lotteryBtn(e){
      var index=e.currentTarget.dataset.index
      if(index==4){
        if(!this.canLottery)return;//防止多次抽奖
        this.setData({
          clickLotteryBtn:this.data.clickLotteryBtn+1
        })
        this.initLottery();//重置配置
        this.loop()    
        this.triggerEvent("lottery");//触发关闭事件
      }

      // setTimeout(() => {
      //   console.log('设置id')
      //   this.setData({
      //     serverSelectId:'2c9272c06c8a5b4f016c8a7c0f170b41'
      //   })
      // }, 3000);
    },
    loop(){
      // 循环旋转
      var sequence=this.sequence
      var list=this.data.list
      var lotteryMinSpeed=500
      var minLoopNum=1;//最小循环圈数
      this.canLottery=false
      this.time=setTimeout(() => {
        // clearTimeout(this.time)
        console.log(this.loopNum,'this.loopNum')
        if(this.loopNum>=minLoopNum&&this.data.serverSelectId){
          // 如果存在服务器返回的id且循环次数大于2
          if(list[sequence[this.loopIndex]].id==this.data.serverSelectId&&this.speed>lotteryMinSpeed){
            // 如果id相等且大于最小抽奖速度
            this.setData({
              selectId:this.data.serverSelectId
            })
            clearInterval(this.time)
            setTimeout(() => {
              this.getLotteryIndex(this.data.serverSelectId)
              this.canLottery=true;//可以抽奖
            }, 1000);
            return;
          }
          this.speed+=100
        }
        if(this.loopNum>=100){
          wx.showToast({
            title: '抽奖异常,请重试',
            icon: 'none',
            duration: 2000
          })
          clearInterval(this.time)
          return;
        }
        
        this.setData({
          selectId:list[sequence[this.loopIndex]].id
        })
        this.loopIndex=this.loopIndex+1
        if(this.loopIndex>sequence.length-1){
          this.loopNum+=1
          this.loopIndex=0
        }
        this.loop();
      }, this.speed);
    },
    getLotteryIndex(id){
      // 设置id和显示抽奖结果
      this.data.list.forEach((item,index)=>{
        if(item.id==id){
          this.setData({
            // showGetLotteryPanel:false,//关闭抽奖窗口
            showLotteryPanel:true,//显示抽奖结果
            lotteryIndex:index,//抽奖结果对应列表的索引
          })
        }
      })
    },
    closeLotteryPanel(){
      // 关闭页面
      // this.setData({
      //   showLotteryPanel:false,//关闭抽奖结果
      // })
    },
    goPage(){
      // 
      this.triggerEvent("goPage");//触发关闭事件
      // console.log("goPage")
    }
  }
})
