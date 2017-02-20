var imgName = '1px';
require('../images/'+imgName+'.jpg');
require('../images/'+imgName+'.png');
require('../index.pug');
var App = require('../components/App.vue');

$(()=>{
	new Vue({
		el: '#app',
		render: h => h(App)
	})
});