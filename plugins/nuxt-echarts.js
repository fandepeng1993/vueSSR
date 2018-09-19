
import Vue from 'vue'
import echarts from 'echarts' // 引入echarts
import echartTheme from '~/plugins/echart-theme'
import global from '~/plugins/global/index'
echartTheme.registerTheme(echarts);
Vue.use(global,{echarts:echarts});

Vue.config.productionTip = true;

// 取消Vue所以的日志与警告
Vue.config.silent = true;
// Vue.prototype.$echarts = echarts // 引入组件（将echarts注册为全局）
