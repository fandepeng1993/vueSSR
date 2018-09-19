
import dark from './dark'
import infographic from './infographic'
import macarons from './macarons'
import roma from './roma'
import shine from './shine'
import vintage from './vintage'

const themeMap = new Map()

themeMap.set('dark', dark)
themeMap.set('infographic', infographic)
themeMap.set('macarons', macarons)
themeMap.set('roma', roma)
themeMap.set('shine', shine)
themeMap.set('vintage', vintage)

class EchartTheme {
  constructor (themeList) {
    this.themeList = themeList
  }

  registerTheme (echarts) {
    for (let [key, value] of this.themeList) {
      echarts.registerTheme(key, value)
    }
  }
}

export default new EchartTheme(themeMap)
