// 过滤器
class VFilter {
  constructor () {
    this.vfliter = new Map()
    this.vfliter.set('dateTime', function (value, filter = {}) {
      // filter 参数说明
      /*
        onlyD:只包含日期
        notS:不包含秒数显示
        ...
       */
      if (!value) {
        return ''
      }
      if (typeof filter !== 'object') {
        return value
      }
      let d = value
      let year = d.getFullYear()
      let month = '0' + (d.getMonth() + 1)
      let day = '0' + d.getDate()
      let dateArr = [year, '年', month.substr(-2, 2), '月', day.substr(-2, 2),'日']
      if (filter.onlyD) {
        return dateArr.join('')
      }
      let hour = '0' + d.getHours() + ''
      let minutes = '0' + d.getMinutes() + ''
      let seconds = '0' + d.getSeconds() + ''
      dateArr = [...dateArr, ' ', hour.substr(-2, 2), ':', minutes.substr(-2, 2), ':', seconds.substr(-2, 2)]
      if (filter.notS) {
        dateArr.splice(dateArr.length - 2)
      }
      return dateArr.join('')
    })
    this.vfliter.set('fdpupcase', (value) => {
      return typeof value == 'string' ? value.toLocaleUpperCase() : value
    })
  }

  use (vue) {
    for (let [key, value] of this.vfliter) {
      vue.filter(key, value)
    }
  }
}

let vfilter = new VFilter()
export default vfilter
