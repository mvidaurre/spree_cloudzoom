// Placeholder manifest file.
// the installer will append this file to the app vendored assets here: vendor/assets/javascripts/spree/frontend/all.js'
//= require spree/frontend
//= require spree/frontend/cloudzoom
//= require spree/frontend/jquery.fancybox
//= require_tree ./helpers

$(document).ready(function() {
  CloudZoom.quickStart();

  // Initialize for Cloud Zoom inside Fancy Box.
  $(".fancybox").fancybox();
})

$(function(){
    // Bind a click event to a Cloud Zoom instance.
    $('#zoomlense-img').bind('click',function(){
        // On click, get the Cloud Zoom object,
        var cloudZoom = $(this).data('CloudZoom');
        // Close the zoom window (from 2.1 rev 1211291557)
        cloudZoom.closeZoom();                       
        // and pass Cloud Zoom's image list to Fancy Box.
        $.fancybox.open(cloudZoom.getGalleryList(), {
            height  : '100%',
            helpers:  {
                thumbs : {
                    width: 50,
                    height: 50
                },
                overlay : {
                    css : {
                        'background' : 'rgba(0,0,0,0.8)'
                    }
                }
            },

            afterLoad  : function () {
                       $.extend(this, {
                           aspectRatio : true,
                           type    : 'html',
                           height  : '100%',
                           content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;" /><a id="zoom-glass" href="' + this.href + '"><i class="fa fa-search-plus"></i></a></div>'
                       })
          }
        }); 
        return false;
    });
           
});

$(function() {
   $('#zoom-message').delay(500).fadeIn('normal', function() {
      $(this).delay(10000).fadeOut("slow");
   });
})