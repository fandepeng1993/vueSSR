

export const state = () => ({
  locales: ['cn','en'],
  locale: 'cn',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  }
}
