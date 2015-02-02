(function (app){
    var module = app.addModule('modals'),
        modalVideo,
        modalVideo2,
        modalGallery,
        overlay,
        container;
        
    module.init = function(){
        //container = jQuery('#modals');
        //container.load('modals.html',function(){elements()});
    }

    module.elements = function() {
        module.modalVideo = $("#modal-video"),
        module.modalVideo2 = $("#modal-video2"),
        module.modalGallery = $("#modal-gallery");
        module.overlay = $("#overlay");
    }

    module.showOverlay = function(modalType){
        this.overlay.fadeIn(function(){$(modalType).fadeIn()});
    }
    
    module.hideOverlay = function(modalType){
        $(modalType).fadeOut(function(){module.overlay.fadeOut()});
    }
    
    module.showLocatorOverlay = function(modalType){
        this.overlay.fadeIn(function(){$(modalType).fadeIn()});
    }
    
    module.hideOverlay = function(modalType){
        $(modalType).fadeOut(function(){module.overlay.fadeOut()});
    }
    
    module.run();
})(ang);
