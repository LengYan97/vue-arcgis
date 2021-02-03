import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * map: new Map()
   * view: new MapView() or new SceneView()
   * 如果有必要，可以分别定义两种view
   */
  state: {
    map: null,
    view: null,
  },
  mutations: {
    initMap(state, Map) {
      state.map = Map
    },
    initView(state, View) {
      state.view = View
    }
  },
  actions: {
  },
  modules: {
  }
})
