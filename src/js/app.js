require('../css/common.scss');
// var imgName = '1px';
// require('../images/'+imgName+'.jpg');
// require('../images/'+imgName+'.png');
// import Vue from 'vue'

class Apps {
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
    var appjs = new Apps();
});