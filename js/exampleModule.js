(function(app) {
    /* Private variables */
    var module = app.addModule('moduleName');


    /* Override of init method */
        module.init = function() {
            this.elements();
            this.setupEvents();
            //etc.
            
            /* Or using private methods private */
            elements();
            //etc
        };


    /* Methods that are public or benefit from being able to be called with 'this' */

    /* Element references as public */
    var container,
    activityForm,
    activitySelec;

    module.elements = function() { //Public method option
        module.container = jQuery('#container');
        module.activityForm 	= jQuery("#insertActivity");
	module.activitySelect	= jQuery("#activitySelect");
	
        // or call as public by references as private with variable declared outside of function
        container = jQuery('#container');
        activityForm 	= jQuery("#insertActivity");
	activitySelect	= jQuery("#activitySelect");

    };
    module.setupEvents = function() {
	elements.container.bind('click', handleClick);

        //or when element reference is private
        container.bind('click', handleClick); 
    }

    /* Private Methods */
    function elements() { //Pri
        container = jQuery('#container');
    }; 

    function handleClick(event) {
        //<code>
    }

    module.run(); //handles making call to init when DOM is loaded.
})(ang);

