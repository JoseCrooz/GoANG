(function (app) {
    var module = app.addModule('bgTiles');
    var currentPos = {x:0,y:112};
    var moveToPos = [{x:0,y:112},{x:-1280,y:112},{x:-2560,y:-538},{x:-3840,y:-1188},{x:-3840,y:112},{x:-1350,y:-538},{x:0,y:-1188},{x:0,y:-538}];
     
    module.init = function() {
      //container = jQuery('#page-bg');
      //container.load('bgTiles.html');
      //elements();
    }
    
    module.elements = function(){
        
    }
    
    module.moveToPath = function(pageNum){
        var num = pageNum;
        var toX = moveToPos[pageNum].x;
        var toY = moveToPos[pageNum].y;
        var curX = currentPos.x;
        var curY = currentPos.y;
        var startAngle = 50;
        var endAngle = 0;
        var l = .2;
        //if(curY==toY && app.activePage>num)startAngle*=-1;
        //if(curY==112 && toY<112)startAngle*=-1;
        var bPath = new $.path.bezier({
            start: {x:curX, y:curY, angle:startAngle},
            end:   {x:toX, y:toY, angle:endAngle, length:l}
        });
        $("#page-bg").animate({path: bPath}, 3000);
        currentPos.x = moveToPos[pageNum].x;
        currentPos.y = moveToPos[pageNum].y;
    }
    
    var container,
    activityForm,
    activitySelec;

    /* Private Methods */

    function handleClick(event) {
        //<code>
    }

    //setup();
    module.run();
})(ang);
