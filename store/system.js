export const state = () => ({
  list: ['123','345'],
  testresult:'12312312312'
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text: text,
      done: false
    })
  }
}

export const actions = {
   testadd({ commit },text){
      commit('add',text)
   }
}

export const getters = {
  list: state => state.list,
  testresult: state => state.testresult,
}
