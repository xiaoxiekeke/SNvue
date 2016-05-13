import Vue from 'vue';
import Router from 'vue-router'
import vueResource from 'vue-resource'

// import "font-awesome-webpack"
// require("font-awesome-webpack!./path/to/font-awesome.config.js")
import App from "./pages/App.vue"
import Search from "./pages/Search.vue"
import Detial from "./pages/Detial.vue"
import Infoedit from "./pages/Infoedit.vue"
import Optlists from "./pages/Optlists.vue"

Vue.use(Router)
Vue.use(vueResource)
var router=new Router()
router.map({
	'/':{
		component:App
	},
	'/Search/':{
		component:Search
	},
	'/Detial/:id':{
		component:Detial
	},
	'/Infoedit/:id':{
		component:Infoedit
	},
	'/Optlists/:id':{
		component:Optlists
	}
})
router.redirect({
  '*': '/'
})
let app = Vue.extend({})
router.start(app, '#app')

