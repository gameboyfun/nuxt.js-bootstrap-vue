import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.KEY_GG_MAP,
    libraries: 'places',
    region: 'TH',
    language: 'th',
  },
})