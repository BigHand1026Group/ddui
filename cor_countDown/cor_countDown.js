// components/countDown/countDown.js
// var timeIn; // 定时器是全局对象，不能定义在顶端，
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      time:{
        type:Object,
        value:{},
        observer(r, oldVal){
          if(JSON.stringify(r)=='{}'||!r)return;
          if(r.endTime<=r.startTimeServer||r.endTime<=r.startTime){
            // console.log("结束时间小于开始时间")
            this.setData({
              timeIsShow:false
            })
            return;
          }
          this.setData({
            sTime: r.startTime,//当前时间
            eTime: r.endTime,//结束时间
            startTimeServer: r.startTimeServer,//开始时间
            showZeroHourMinute: !!r.showZeroHourMinute //显示0时0分
          })
          this.setEndTime()
        }
      },
      mode:{
        type:String
      },
      daySymbol:{
        type:String
      },
      hoursSymbol:{
        type:String
      },
      minutesSymbol:{
        type:String
      },

      
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  created() {
    this.timeIn=0;//需要在created 生命周期定义定时器的载体（ready内定义并不能生效）
  },
  ready(){
    // this.initTime();
  },
  data: {
    sTime:'',
    eTime:'',
    timeIsShow: true,
    day:'0',//天数
    hours: '00',//倒计时
    minutes: '00',//倒计分
    seconds: '',//倒计秒
    timeIn:0
  },

  /**
   * 组件的方法列表
   */
  detached(){
    clearInterval(this.timeIn)
  },
  methods: {
    initTime() {
      //初始化 并执行 倒计时
      var startTime = this.data.sTime;
      var endDate = this.data.eTime;
      if (!startTime || !endDate) return;
      // var EndTimeMsg = (new Date(endDate).getTime() - new Date(startTime).getTime()) / 1000;
      var EndTimeMsg = (endDate - startTime) / 1000;
      clearInterval(this.timeIn)
      this.timeIn = setInterval(() => {
        EndTimeMsg = EndTimeMsg - 1;
        if (EndTimeMsg <= 0) {
          clearInterval(this.timeIn)
          this.triggerEvent("over")
          this.setData({
            timeIsShow: false
          })
        }
        this.setHMS(EndTimeMsg)
      }, 1000)
      this.setHMS(EndTimeMsg) // 191017 补充第一次显示
    },
    setHMS(EndTimeMsg) {
      //设置倒计时
      if(this.data.mode=='hms'){
        // 如果是时分秒模式
        var hours = Math.floor(EndTimeMsg / 60 / 60).toString();
        var minutes = Math.floor((EndTimeMsg - hours * 60 * 60) / 60).toString();
        var seconds = Math.floor((EndTimeMsg - hours * 60 * 60 - minutes * 60)).toString();
        // console.log(hours, minutes, seconds)
        this.setData({
          hours: hours.length == 1 ? "0" + hours : hours,
          minutes: minutes.length == 1 ? "0" + minutes : minutes,
          seconds: seconds.length == 1 ? "0" + seconds : seconds,
        })
      }else{
        // 否则是天 时分秒
        var day=Math.floor(EndTimeMsg / 60 / 60 / 24).toString();//获取天数
        var hours = Math.floor((EndTimeMsg - day*60*60*24) / 60 / 60).toString();//减去天数剩余的小时
        var minutes = Math.floor(((EndTimeMsg - day*60*60*24) - hours * 60 * 60) / 60).toString();// 减去天数 、时 的剩余描述
        var seconds = Math.floor(((EndTimeMsg - day*60*60*24) - hours * 60 * 60 - minutes * 60)).toString();
        this.setData({
          day: day,
          hours: hours.length == 1 ? "0" + hours : hours,
          minutes: minutes.length == 1 ? "0" + minutes : minutes,
          seconds: seconds.length == 1 ? "0" + seconds : seconds,
        })
      }
    },
    format(){

    },
    setEndTime(){
      //设置结束时间，防止开始时间大于服务器当前时间（即秒杀时间还未开始）
      var startTimeServer=this.data.startTimeServer;
      var startTime=this.data.startTime
      if (this.data.startTimeServer > this.data.sTime) {//开始事件大于当前时间
        this.setData({
          eTime: this.data.startTimeServer
        })
      }
      
      this.initTime();
    }
  }
})
