// components_simple/cor_search/cor_search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    noBtn:{
      type:String
    },
    searchStyle:{
      type:String
    },
    placeholder:{
      type:String
    },
    placeholderStyle:{
      type:String
    }
  },
  created() {
    this.searchValue=''
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
    input(e){
      this.searchValue=e.detail
      this.triggerEvent('input',e.detail)
    },
    blur(e){
      this.searchValue=e.detail
      this.triggerEvent('blur',e.detail)
    },
    searchBtn(){
      this.triggerEvent('search',this.searchValue)
    }
  }
})
