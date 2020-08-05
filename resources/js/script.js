$(document).ready(function(){

    // when user scrolls down, class stick will be added
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky")
        }
        else{
            $("nav").removeClass("sticky")
        }
        },{
            // display sticky nav 60 px before hitting js section feature
                offset: '390px'
        
    })
        // im hungy button scrolls to plan section
        $(".js--scroll-to-plan").click(function(){
            $('html, body').animate({scrollTop:$(".js--section-plans").offset().top},1000)
        })

        // show me more button scrolls to show me more section
        $(".js--scroll-to-start").click(function(){
            $('html, body').animate({scrollTop:$(".js--section-features").offset().top},1000)
        })

        // fade in the features section
        $(".js--wp-1").waypoint(function(direction){
            $(".js--wp-1").addClass("animate__animated animate__fadeIn")
        
        },{
            offset:'50%'
        });

        $(".js--wp-1").waypoint(function(direction){
            $(".js--wp-1").addClass("animate__animated animate__fadeIn")
        
        },{
            offset:'50%'
        });

        $(".js--wp-2").waypoint(function(direction){
            $(".js--wp-2").addClass("animate__animated animate__pulse")
        
        },{
            offset:'50%'
        });


        // Mobile nav
        $(".js--nav-icon").click(function(){
            
            var nav=$('.js--main-nav');
            var icon=$('.js--nav-icon')

            nav.slideToggle(200)
            var nameAttribute=$(this).attr('name')
            if (nameAttribute=='menu-outline'){
                icon.attr("name","close-outline")
            }else
                icon.attr("name","menu-outline")
        })





})