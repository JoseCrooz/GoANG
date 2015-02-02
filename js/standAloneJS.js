$(document).ready(function(){


        $('.modual').animate({

            top: 221

        }, 500);




    $('#career-finder').fadeOut(0, function() {
        // Animation complete.
    });

    $('#faqs').fadeOut(0, function() {
        // Animation complete.
    });


    showOverlay = function(modalType){
        console.log("hit showoverlay");

//        $("#"+modalType).css({
//            display:"block"
//        });


        $("#"+modalType).fadeIn("slow", function() {
            // Animation complete.
        });

    }
    hideOverlay = function(modalType){
        $("#"+modalType).fadeOut("slow", function() {
            // Animation complete.
        });

    }




});