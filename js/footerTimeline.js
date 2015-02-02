(function (app){
    var module = app.addModule('footerTimeline'),
        container,
        isTimelineRaised = false,
        footerNavBg,
        footerNavA,
        footerTimeline;
        
    module.init = function(){
        //container = jQuery('#footer-timeline');
        //container.load('footer-timeline.html',function(){elements()});
        //elements();
    }
    
    module.elements = function() {
        footerNavBg = $("#footer-nav-bg");
        footerNavA = $("#footer-nav a");
        footerTimeline = $(".footer-timeline");
    
    }
    var pageCoords = [["0", "0 0 0 -1280px",  "-650px 0 0 -2560px", "0 0 0 -3840px", "-650px 0 0 -1280px", "-1300px 0 0 -1280px", "-1300px 0 0 0", "-650px 0 0 0"],["-800px 0", "-730px 0", "-675px 0", "-610px 0", "-530px 0", "-410px 0", "-330px 0", "0 0"]];
    
    module.moveTimeline = function(){
        
        if(!isTimelineRaised){
            footerTimeline.addClass("footer-open");
            isTimelineRaised = true;
        }
        else{
            footerTimeline.removeClass("footer-open");
            isTimelineRaised = false;
        }
    }
    
    module.gotoPage = function(pageNum){
        
        var timelineBgString = pageCoords[1][pageNum];
        
        footerNavBg.css({"backgroundPosition": timelineBgString});
        footerNavA.removeClass("active complete");

        for (var i=0;i<pageNum;i++) {
            footerNavA.eq(i).addClass("complete");
        }
        footerNavA.eq(pageNum).addClass("active");
    }
    
    module.getIsRaised = function(){
        return isTimelineRaised;
    }
    
    module.run();
})(ang);
