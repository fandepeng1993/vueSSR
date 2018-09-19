import enLocale from 'element-ui/lib/locale/lang/en'
import exModule from './ex-module/en'

const en = {
  message: {
    'User': 'username',
    'SystermError': 'system error',
    'TooMorePhone': 'TooMorePhone',
    'ChoicePhone': 'ChoicePhone',
    'loginTip': 'Please log in',
    // Buttons
    'NextStep': 'Next',
    'Login': 'Log in',
    'Ensure': 'Yes',
    'Regain': 'Regain',
    'Cancel': 'Cancel',
    'tableNoData': 'No data',
    'tableLoadingData': 'Loading…',
    'loadMore': 'See more…'
  },
  ...enLocale,
  ...exModule
}

export default en
