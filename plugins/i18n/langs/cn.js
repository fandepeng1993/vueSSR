import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import exModule from './ex-module/cn'

const cn = {
  message: {
    SystermError: '系统出错了，请稍后再试',
  },
  ...zhLocale,
  ...exModule
}
export default cn
