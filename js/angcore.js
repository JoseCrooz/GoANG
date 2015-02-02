function makeApp(name) {

    function AppModule(name) {
        this.data = {};
        this.name = name;
    };

    AppModule.prototype = {
        setData: function(key, value) {
            var keyType = (typeof key);

            if (!key) {
                throw new SyntaxError('setData(key, value): key is undefined');
            }

            if (keyType == "string" && typeof value == 'undefined' ) {
                throw new SyntaxError('setData(key, value): value is undefined');
            }

            if (keyType == 'string') {
                this.data[key] = value;

            } else if (keyType == 'object') {

                for(var property in key) {
                    this.data[property] = key[property];
                }
            }

            return this;
        },
        run: function() {
            var module = this;
            jQuery(document).ready(function() {module.execute();});
        },
        listener: function(type, args) {
            if (typeof this[type] == 'function') {
                this[type](args);
            }
        },
        execute: function() {
            this.init();
        },
        init: function() {}
    };

    window[name] = {
        addModule: function(name) {
	        if ( !name ) {
		        throw new SyntaxError("add_module(name): name is undefined");
                return false;
            }

	        if ( name in this ) {
    		    throw new SyntaxError("add_module(name): '" + name + "' already declared");
                return false;
            }

	        if ( this.name == name ) {
		        throw new SyntaxError("add_module(name): a module cannot have the same name as the application");
                return false;
            }

	        return this[name] = new AppModule(name);
        }
    };

    return window[name];
}
makeApp('ang');
