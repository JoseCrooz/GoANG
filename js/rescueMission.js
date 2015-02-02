(function (app){
    var module = app.addModule('rescueMission'),        
        container,
        activeLink,
        activeJob,
        activeDot,
        isChopperMenuActive = false,
        mapSpot,
        hurricanePath,
        mapHotspotTitle,
        mapDetails,
        tabbedContent,
        mapHeadline,
        activeIndex = -1,
        isMapInitialized = false,
        pages,
        thisLoaded = false,
        activePage = 0;
    
    module.init = function(){
        //container = jQuery('#mission');
        //container.load('rescue-mission.html',function(){elements()});
    }
    
    module.elements = function(){
        pages = $('.page');
        mapSpot = $(".mapSpot");
        hurricanePath = $(".hurricanePath");
        mapHotspotTitle = $(".mapHotspotTitle");
        mapDetails = $(".mapDetails");
        tabbedContent = $(".tabbedContent");
        mapHeadline = $("#page-1").find('.headline');
        thisLoaded = true;
        module.initMap();
    }
    
    module.gotoPage = function(pageNum){
        //this.pages = $('.page');
        
        pages.eq(this.activePage).css({"zIndex":2});
        pages.eq(pageNum).css({"zIndex":3});
        pages.eq(this.activePage).children().removeClass("animated");
        pages.eq(pageNum).children().addClass("animated");
        this.activePage = pageNum;
    }
    
    module.initChopperMenu = function(){
        isChopperMenuActive = true;
        $(".chopper-job-intro").fadeOut(25, function(){});
        $(".headline").fadeOut(25, function(){});
        $(".chopper-jobs").fadeTo('slow', 1);
        
        this.activeLink = jQuery("#job1");
        this.activeJob = jQuery("#chopper-job1");
        this.activeDot = jQuery("#dots-job1");
        this.activeLink.addClass("active-job");
    }
    
    module.resetChopperMenu = function(){
        if(isChopperMenuActive)
        {
            $(".chopper-jobs").fadeOut(25, function(){});
            $(".chopper-job-intro").fadeTo('slow', 1);
            $(".headline").fadeTo('slow', 1);
            isChopperMenuActive = false;
        }
    }
    
    module.chopperMenuClick = function(obj){
        this.activeLink.removeClass("active-job");
        this.activeJob.fadeOut(25, function(){});
        this.activeDot.fadeOut(25, function(){});
        this.activeLink = $("#"+obj.id);
        this.activeJob = $("#chopper-"+obj.id);
        this.activeDot = $("#dots-"+obj.id);
        this.activeLink.addClass("active-job");
        this.activeJob.fadeTo('slow', 1);
        this.activeDot.fadeTo('slow', 1);
    }
    
    module.setToDefault = function(){
        if(thisLoaded){
            //this.initMap();
           // use this function to set the page to it's default when navigating to other pages.
            $("#page-1").children(".headline").fadeIn(25);
            this.fadeDownMapBGs();
            mapHotspotTitle.fadeTo(25, 1);
            mapDetails.fadeTo(25, 1);
            mapSpot.removeClass("activeMapSpot");
            this.activeIndex = -1;
        }
    }
    
    module.initMap = function(){
        if(thisLoaded){
            $("#page-1").children(".headline").fadeIn(25);
            this.isMapInitialized = true;
            this.fadeDownMapBGs();
        }
    }
    
    module.handleMapSpotClick = function(obj){
        var $obj = $(obj),
            currentIndex = $obj.index();

        mapSpot.removeClass("activeMapSpot");

        mapHotspotTitle.fadeTo(25, .5);
        mapDetails.fadeTo(25, .5);
        tabbedContent.css({left: 0});

        // use relAttr to pass related details about the tabbed content.
        var relAttr = $obj.attr("rel");
        this.fadeDownMapBG();
        this.fadeUpMapBG(relAttr + "Content");

        if(this.activeIndex !== currentIndex){
            // A new hotspot has been clicked.
            $obj.addClass("activeMapSpot");
            $obj.children(".mapHotspotTitle").fadeOut(25, function(){});
            $obj.children(".mapDetails").fadeOut(25, function(){});

            $("#page-1").children(".headline").fadeOut(25, function(){});
            this.activeIndex = $(obj).index();
        } else {
            // an active hotspot was re-clicked. Set page back to it's default state
            this.activeIndex = -1;
            this.setToDefault();
        }
    }
    
    module.fadeDownMapBGs = function(){
        tabbedContent.children().fadeOut();
    }
    
    module.fadeUpMapBG = function(tabbedChild){
        //console.log("should fade up" + tabbedChild);
        $("#"+tabbedChild).fadeTo("slow", 1, function(){});
    }
    
    module.fadeDownMapBG = function(downIndex){
        // fade down all map content.
        tabbedContent.children().fadeOut();
    }
    
    module.run();
})(ang);
