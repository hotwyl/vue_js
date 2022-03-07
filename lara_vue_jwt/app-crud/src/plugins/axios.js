import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://dev.3wonline.com/prod/vue/lara_vue_jwt/api/public/api/login'
axios.defaults.headers.common['Autorization'] = 'bearer ${localStorage.getItem('
_myapp_token ')}'

Vue.useAttrs({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})