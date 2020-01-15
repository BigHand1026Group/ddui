// components_simple/cor_btn_select/cor_btn_select.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      observer(v){
        // console.log(v)
      }
    },
    ranKey:{
      type:String
    },
    autoEmit:{
      type:Array,
      observer(v){
        if(v){
          if(this.num<100){
            this.autoSelect(v)
            this.num++;
            if(this.num>98){console.warn("这里可能出现死循环的可能")}
          }
        }
      }
    }
  },
  created() {
    this.num=0
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
    selectTab(e){
      var index=e.currentTarget.dataset.index
      var config=this.data.config
      if(config.type=='simple'){
        config.values.forEach((item,index)=>{
          item.active=false
        })
      }
      config.values[index].active=!config.values[index].active
      this.setData({
        config:config
      })
      var selectArr=[]
      config.values.forEach((item,index)=>{
        if(item.active){
          selectArr.push(item)
        }
      })
      config.selectArr=selectArr
      this.triggerEvent("value",config)
    },
    autoSelect(names){
      // 根据传入的名称自定触发事件
      names.forEach((item,index)=>{
        if(item==undefined)names.splice(index,1)
      })
      if(!names||names.length<=0)return;
      // console.log(names,'this.data.config.values')
      this.data.config.values.forEach((item,index)=>{
        names.forEach((item2,index2)=>{
          if(item[this.data.ranKey]==item2||item.name==item2){
            // console.log(item.name,item2,item[this.data.ranKey],item[this.data.ranKey]==item2,item.name==item2,'item.name==item2')
            this.selectTab({
              currentTarget:{
                dataset:{index:index}
              }
            })
          }
        })
      })
    }
  }
})
