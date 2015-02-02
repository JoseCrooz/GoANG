
//Deep linking route table and functionality
var deepLinks = Backbone.Router.extend({
    routes: {
        "*hash": "hashHandler"
    },
    hashHandler: function(hash) {
	var pg;
        if(ang.footerTimeline.getIsRaised())ang.footerTimeline.moveTimeline();
        switch (hash){
            case "first":
		pg = 0;
                break;
            case "second":
		pg = 1;
		//ang.rescueMission.initMap();
                break;
            case "third":
		pg = 2;
                break;
            case "fourth":
		pg = 3;
                break;
            case "fifth":
		pg = 4;
                break;
            case "sixth":
		pg = 5;
                break;
            case "seventh":
		pg = 6;
                break;
            case "eighth":
		pg = 7;
                break;
            default : pg = 0;
        }
	if(ang.bgTiles)ang.bgTiles.moveToPath(pg);
	ang.rescueMission.gotoPage(pg);
	ang.footerTimeline.gotoPage(pg);
	ang.rescueMission.setToDefault();
        ang.rescueMission.resetChopperMenu();
	
	/*if(pg>0)$('.secondary-nav').addClass("secondary-nav-active");
        else if(pg==0)$('.secondary-nav').removeClass("secondary-nav-active");*/
	if(pg>0)ang.secondaryNav.lowerNav();
        else if(pg==0)ang.secondaryNav.raiseNav();
    }
});

new deepLinks();
try {
    Backbone.history.start()
} catch(err) {
    Backbone.history.loadUrl()
}
