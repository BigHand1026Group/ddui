// components_simple/cor_ tooltip/cor_tooltip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object,
      value:{
        // text:'' string 内容
        // position:'' 显示的方向 left right top bottom 默认是top
        // baseThickness: 距离加值，在显示的基础上加上该值
      },
      observer(){
        this.init();
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
    style:""
  },
  attached(){
    this.init();
  },
  /**
   * 组件的方法列表
   */
  methods: {
      async init(){
        this.setData({
          style:await this.getPosition()//提示框的宽度减去显示内容的宽度等于多出的内容宽度，除2等于应该偏移的距离
        })
      },
      clickText(){
        // 触发点击事件
        this.triggerEvent("click",res)
      },
      getDOMInfo(o){
        // o.DOMName 选择的DOM 名称
        // 
        return new Promise((resolve,reject)=>{
          this.createSelectorQuery().select(o.DOMName).fields({
            dataset: true,
            size: true,
            scrollOffset: true,
            properties: ['scrollX', 'scrollY'],
            computedStyle: ['margin', 'backgroundColor'],
            context: true,
          },(res)=>{
            resolve(res)
          }).exec()
        })
      },
      async getPosition(){
        var config=this.data.config;//获取传入配置
        var position=config.position;//获取传入位置
        var tooltipDom=await this.getDOMInfo({DOMName:'.cor_tooltip'});//显示的内容
        var tooltipTipDom=await this.getDOMInfo({DOMName:'.cor_tooltip_tip'});//提示框
        var baseThickness=config.baseThickness;
        if(baseThickness===undefined)baseThickness=0
        if(tooltipDom&&tooltipDom.width&&tooltipTipDom&&tooltipTipDom.width){
          var tooltipDomWidth= parseInt(tooltipDom.width)
          var tooltipTipDomWidth= parseInt(tooltipTipDom.width)
          var positions={
            top:{
              style:`left:${-(tooltipTipDomWidth-tooltipDomWidth)/2}px;`,
            },
            left:{
              style:`right:${tooltipDomWidth+10+baseThickness}px;top:${(tooltipDom.height-tooltipTipDom.height)/2}px;`,
            },
            right:{
              style:`left:${tooltipDomWidth+10+baseThickness}px;top:${(tooltipDom.height-tooltipTipDom.height)/2}px;`,
            },
            bottom:{
              style:`left:${-(tooltipTipDomWidth-tooltipDomWidth)/2}px;`,
            },
          }
          var orientation=positions[position]
          if(!orientation)orientation=positions["top"]
          return orientation.style
        }else{
          return `left:0px`
        }
          
      }
  }
})
