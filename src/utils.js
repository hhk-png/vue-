import Vue from 'vue'

export default function create(Component, props) {
  // 1.先创建Vue实例
  const vm = new Vue({
    render(h) {
      // render方法提供给我们一个h函数，它可以渲染VNODE
      return h(Component, {props})
    }
  }).$mount();

  console.log(vm)
  // console.log(vm)
  // 2.上面vm帮我们创建组件实例
  // 3.通过$children获取该组件实例
  const comp = vm.$children[0];
  // vm.$root获取的是本vue实例的引用，
  // vm.$children[0]获取的是组成vue实例的组件的实例


  // console.log(comp)
  // 4.追加至body
  document.body.appendChild(vm.$el);

  // 5.清理函数
  comp.remove = () => {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  }

  return comp;

}