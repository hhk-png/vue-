// 1.维护状态state
// 2.维护状态commit
// 3.业务逻辑控制dispatch
// 4.状态派发getter
// 5.实现state响应式
// 6.插件
// 7.混入

let Vue;

function install(_Vue) {
  Vue = _Vue;

  // 混入：把store选项指定到Vue原型上
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$s = this.$options.store;
      }
    }
  })
}

class Store {
  // options:{state:{count: 0}, mutation:{count(){}} }
  constructor(options = {}) {
    // 利用Vue数据响应式
    this.state = new Vue({
      data: options.state
    });

    // 初始化mutation
    this.mutations = options.mutations || {};
    this.actions = options.actions || {};

    options.getters && this.handleGetters(options.getters);
  }

  // 触发mutations，需要实现commit
  commit = (type, arg) => {
    // this指向Store实例
    const fn = this.mutations[type]; // 获取变更函数
    fn(this.state, arg);
  }

  dispatch = (type, arg) => {
    const fn = this.actions[type];
    fn({commit: this.commit, state: this.state}, arg)
  }

  // {getters:{score(state){return state}}}
  handleGetters(getters) {
    this.getters = {}; // store实例上的getters

    // 定义只读的属性
    Object.keys(getters).forEach(key => {
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state);
        }
      })
    })
  }
}

// Vuex
export default {Store, install}
