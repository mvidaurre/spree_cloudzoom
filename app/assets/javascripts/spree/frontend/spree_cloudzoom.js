// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'
//= require spree/frontend
//= require spree/frontend/cloudzoom
//= require spree/frontend/jquery.fancybox

$(document).ready(function() {
  CloudZoom.quickStart();
})

$(function(){
    // Bind a click event to a Cloud Zoom instance.
    $('#zoomlense-img').bind('click',function(){
        // On click, get the Cloud Zoom object,
        var cloudZoom = $(this).data('CloudZoom');
        // Close the zoom window (from 2.1 rev 1211291557)
        cloudZoom.closeZoom();                       
        // and pass Cloud Zoom's image list to Fancy Box.
        $.fancybox.open(cloudZoom.getGalleryList()); 
        return false;
    });

    // Initialize for Cloud Zoom inside Fancy Box.
    $(".fancybox").fancybox({
        maxWidth: 1024,
        maxHeight:768,
        afterShow: function(){
            var $image = $('.fancybox-image');
            $image.CloudZoom({zoomPosition:'inside', zoomOffsetX:0});
        },
        beforeLoad: function(){
            var $image = $('.fancybox-image');
            if ($image.data('CloudZoom')) $image.data('CloudZoom').destroy();
        },
        beforeClose: function(){
            var $image = $('.fancybox-image');
            if ($image.data('CloudZoom')) $image.data('CloudZoom').destroy();
        }
    });
           
});

    
