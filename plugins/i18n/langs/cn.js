import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import exModule from './ex-module/cn'

const cn = {
  message: {
    'loginTip': '请先登录',
    'SystermError': '系统出错了，请稍后再试',
    'User': '用户名',
    // 按钮类
    'NextStep': '下一步',
    'Login': '登录',
    'Ensure': '确定',
    'Regain': '重新获取',
    'Cancel': '取消',
    // table
    'tableNoData': '暂无数据',
    'tableLoadingData': '加载中…',
    'loadMore': '加载更多…',
  },
  ...zhLocale,
  ...exModule
}
export default cn
