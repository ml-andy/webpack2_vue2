require('../css/common.scss');
var imgName = '1px';
require('../images/'+imgName+'.jpg');
require('../images/'+imgName+'.png');

class App {
	constructor() {
		this.wrp = $('.wrapper');
		switch (this.wrp.attr('data-page')) {
			case 'index':
				var Index = require('./Index.js');
				this.index = new Index();
			break;
		}
	}
}

$(()=>{
    var app = new App();
});