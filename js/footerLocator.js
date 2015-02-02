(function (app){
    var module = app.addModule('footerLocator'),
        container,
        isLocatorRaised = false,
        locatorActivePos = "0px",
        locatorInactivePos = "-500px",
        locator,
        overlay;
        
    module.init = function(){
        //container = jQuery('#footer-locator');
        //container.load('footer-locator.html',function(){elements()});
        //elements();
    }

    module.elements = function() {
         locator =  $("#locator").css("bottom",locatorInactivePos);
         overlay =  $("#locatorOverlay");
    }
    
    module.moveLocator = function(){
        if(!isLocatorRaised){
            locator.css("bottom",locatorActivePos);
            overlay.fadeIn();
            isLocatorRaised = true;
        }
        else{
            locator.css("bottom",locatorInactivePos);
            overlay.fadeOut();
            isLocatorRaised = false;
        }
    }
    
    module.run();
})(ang);
