(function (app) {
    var mod = app.addModule('mainMenu'),
        isTouch = ('ontouchstart' in window),
        menus = "#join,#careers,#benefits,#members,#life,#about",
        mainMenu,
        activeMenu = null,
        activePanel = null;


    /* mainMenu private variables and functions */
    var example = 'private to this module';
    var handleOffTap = (function() {
        var startTime = null,
            endTime;

        return function(event) {
            var type = event.type;
            
            switch (type) {
            case 'touchstart':
                startTime = Date.now();
                break;
            case 'touchend':
                endTime = Date.now();
                if ( (endTime - startTime) <= 300)
                    handleClose();

                startTime = endTime = 0;
                break;
            }
        };
    })();

    function setup() {
        var header = jQuery('header');
        header.load('header.html');
        //header.load('header.html', touchSetup);
    }

    function touchSetup () {
         if (isTouch) {
            mainMenu = jQuery('#mainNav');
            var topev = 'touchstart touchend';
            var ev = 'click';

            mainMenu.bind(ev, handleTap);
            jQuery(document).bind(topev, handleOffTap);

            /*
            mainNav.find('li > a').bind('click', function(e) {
                    //alert(this.nodeName + ": " + activeMenu[0]);
                if (!/active/.test(this.className) ) {
                    e.preventDefault();
                }
            });
            */
        }
    }
    function handleClose() {
            activeMenu.removeClass('active');
            activeMenu = null;
            activePanel.css({display: ''});
            activePanel = null;
    }
    
    function handleTap(event) {
        var targ = event.target,
            height,
            newMenu = $(targ), 
            menuId = newMenu.parent().attr('menu');

        if (!menuId) return;

        event.stopPropagation();
        event.preventDefault();

        //if (activeMenu[0] == targ)
        //    menuId = null;

        if (activeMenu)
            handleClose();

        if (menuId) {
            activeMenu = newMenu;
            activePanel = jQuery("#" + menuId );
            activeMenu.addClass('active');
            activePanel.css({display: 'block'});
        }
    } 

    function setHeight(idx, elem) {
        var returnValue;
        elem = jQuery(elem);

        elem.css({'visibility':'hidden','height':'auto'});
        returnValue = elem.css('height');
        elem.data('height', returnValue).css({'height':'','visibility':''});
        
        return returnValue;
    }
    /* mainMenu public properties and methods */
    mod.publicProperty = 'access as app.mainMenu.publicProperty';

    mod.publicMethod = function() {
        return 'access as app.mainMenu.publicMethod()';
    }

    mod.publicMethod2 = function() {
        return isTouch && 'Is touch device' || 'Not a touch device';
    }

    mod.publicMethod3 = function(val) {
        example = val;
    }

    setup();
})(ang || app);
