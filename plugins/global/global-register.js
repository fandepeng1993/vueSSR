import Vue from 'vue';

import vdirective from '~/plugins/directive/index'
import vfilter from '~/plugins/filter/index'

vdirective.use(Vue);
vfilter.use(Vue);
