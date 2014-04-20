/*
**  Class.js
**
**  Dependencies: none
*/
;var Class = (function(){
		;'use strict';
		function extend(o) {
			o = o || function(){};
			o.prototype = Object.create(this.prototype);
			o.extend = extend.bind(o);
			return o;
		}
		function Class(){};
		Class.extend = extend.bind(Class);
		return Class;
	})();