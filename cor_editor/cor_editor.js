// components_simple/cor_editor/cor_editor.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    config:{
      type:Object
    },
    value:{
      type:String
    },
    styles:{
      type:String
    }
  },
  created() {
    this.editorCtx=null;
    this.inputObj=null
  },
  /**
   * 组件的初始数据
   */
  data: {
    id:"id"+parseInt(Math.random()*10000000000),
    editorCtx:null,
    readOnly:true
  },
  options: {
    addGlobalClass: true,
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onEditorReady() {
      this.createSelectorQuery().select('#'+this.data.id).context((res)=>{
        this.editorCtx = res.context
        this.editorCtx.blur();
        this.editorCtx.setContents({
          html: this.data.value||'',
          delta:this.data.value||'',
        })
        this.setData({
          readOnly:false
        })
      }).exec()
    },
    input(e){
      this.inputObj=e.detail
      this.triggerEvent('input',e.detail)
    },
    blur(e){
      if(this.inputObj){
        this.triggerEvent('blur',this.inputObj)
      }
    }
  }
})
