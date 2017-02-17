var Stage = require('./modules/Stage.js');
var Header = require('./modules/Header.js');
require('../index.pug');
import app from '../components/App.vue';


class Index extends Stage {
    constructor() {
        super();
        this.Header = new Header();
        $(window).load(()=>{
            this.windowResize();
            this.window_load();
        });
        $(window).on('resize',()=>{
            this.windowResize();
        });
        new Vue({
            el: '#app',
            render:h=>h(app),
        });
    }
    window_load(){
        super.window_load();
    }
    windowResize(){
        
    }
}

module.exports = Index;