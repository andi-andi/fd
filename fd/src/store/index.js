import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //登陆状态判定
    isLogin:sessionStorage.getItem("isLogin") || false,
    //添加购物车状态管理
    shopping:[]
  },
  mutations: {
    //登陆状态方法z
    login_mutation(state){
      state.isLogin=true
    },
    login(state){
      state.isLogin=false
    },
    //添加商品
    products(state,payload){
      state.shopping.push(payload)
    },
    //删除商品
    del(state,index){
      state.shopping.splice(index,1);
    },
    //清空商品
    clears(state){
      state.shopping=[]
    }
  },
  actions: {

  },
  modules: {

  }
})
