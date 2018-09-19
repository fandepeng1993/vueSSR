import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import locale from 'element-ui/lib/locale'
import messages from './langs'
Vue.use(VueI18n)


export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.locale,
    // 配置基础语言默认指向
    fallbackLocale: 'cn',
    messages,
  })
  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `${link}`
    }
    return `${app.i18n.locale}${link}`
  }
}
