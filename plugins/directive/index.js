class Deirective {
  constructor () {
    this.vDeirective = new Map()
    this.vDeirective.set('test-directive1', function (el, binding, vnode, oldVnode) {
      // el, binding, vnode, oldVnode
   //   console.log(el, binding, vnode, oldVnode)
    })
    this.vDeirective.set('test-directive2', {
      bind: function (el) {
        // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
       //  console.log('bind start')
      },
      inserted: function (el, binding, vnode, oldVnode) {
        // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
       // console.log('inserted start', el, binding, vnode, oldVnode)
      },
      update: function () {
        // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
       // console.log('update')
      },
      componentUpdated: function () {
        // 指令所在组件的 VNode 及其子 VNode 全部更新后调用。
      //  console.log('componentUpdated')
      },
      unbind: function () {
        // 只调用一次，指令与元素解绑时调用
       // console.log('unbind')
      }
    })
  }
  use (vue) {
    for (let [key, value] of this.vDeirective) {
      vue.directive(key, value)
    }
  }
}
let vdeirective = new Deirective()
export default vdeirective
