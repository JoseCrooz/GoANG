(function (app){
    var module = app.addModule('secondaryNav'),
        container,
        nav,
        isNavActive = false,
        activePos = '140px',
        inactivePos = '-200px';
        
    module.init = function(){
        container = jQuery('#secondary-nav');
        //container.load('secondary-nav.html',function(){elements()});
    }

    module.elements = function() {
         //nav = $();
    }
    
    module.lowerNav = function(){
        container.css("top",activePos);
    }
    
    module.raiseNav = function(){
        container.css("top",inactivePos);
    }
    
    module.run();
})(ang);
