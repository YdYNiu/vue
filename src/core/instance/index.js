import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/* 
  创建构造函数Vue, 及其上所有将被使用的「全局方法 + 实例方法」
  Vue.xxx  +  Vue.propotype.xx
*/
initMixin(Vue) // 「实例化启动入口」【会调用下面预挂载的各种属性和方法】：主要添加了 _.init()【fn】
stateMixin(Vue) // 主要添加了$data【ud】, $props【ud】;   数据状态方法：$watch【fn】, $set【fn】, $delete【fn】  
eventsMixin(Vue) // 
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
