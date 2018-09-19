import Util from '~/plugins/libs/util'

function constructUrl (params = '') {
  if (typeof(params) !== 'object') {
    return ''
  }
  let url = '?'
  for (let key in params) {
    let value = params[key]
    if (typeof(value) === 'object') {
      url += constructUrl(value).replace('?', '')
    } else if (value || value === 0) {
      url = `${url}${key}=${encodeURI(value)}&`
    }
  }
  return url.slice(0, url.length - 1)
}

function deconstructUrl (url = '') {
  if (!url.includes('?')) {
    return
  }
  let params = {}
  let arr = url.split('?')[1].split('&')
  arr.forEach(function (item) {
    let entries = item.split('=')
    params[entries[0]] = decodeURI(entries[1])
  })
  return params
}

export default {
  get (url, params) {
    // http get
    return Util.ajax.get(`${url}${constructUrl(params)}`)
  },
  post (url, data = {}) {
    // http post
    return Util.ajax.post(url, data)
  },
  getLocationSearch () {
    if (!window.location.search) {
      return {}
    }
    return deconstructUrl(window.location.search)
  },
  updateLocationHref (filter) {
    window.history.pushState({}, '', window.location.href.split('?')[0] +
      constructUrl(filter))
  },
  getBaseUrl () {
    return Util.ajax.defaults
  }
}
