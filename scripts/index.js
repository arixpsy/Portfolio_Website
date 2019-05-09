$(document).ready(function(){
    var currentstate = "night";


    $(".ov2").css("margin-left", $(".panel").css("width"));
    var panelLength = $(".panel").css("width");
    panelLength = panelLength.slice(0,-2);
    panelLength2 = panelLength * 2;
    panelLength3 = panelLength * 3;
    $(".ov3").css("margin-left", panelLength2+"px");
    $(".ov4").css("margin-left", panelLength3+"px");


    $(window).resize(function(){
        $(".ov2").css("margin-left", $(".panel").css("width"));
        panelLength = $(".panel").css("width");
        panelLength = panelLength.slice(0,-2);
        panelLength2 = panelLength * 2;
        panelLength3 = panelLength * 3;
        $(".ov3").css("margin-left", panelLength2+"px");
        $(".ov4").css("margin-left", panelLength3+"px");
    });

    $(".computer").on('click', function() {
        openComputer();
    });

    $(".browser_cross").on('click', function() {
        closeComputer();
    });

    $(".phone").on('click', function(){
        openPhone();
    });

    $(".phone_exit").on('click', function(){
        closePhone();
    })

    $(".moon").on('click', function(){
        skychange('toDay');
        MoonSunToggle('toDay');
    });

    $(".sun").on('click', function(){
        skychange('toNight');
        MoonSunToggle('toNight');
    });
    
    
});

function openComputer(){
    $(".computer").animate({
        "bottom":"0px",
        "height":"100vh",
        "width":"100vw",
        "margin-left":"-50vw"
    });
    $(".computer").css("cursor","default");
    $(".shadow_effect").animate({opacity:"0"});
    $(".browser").animate({opacity:"1"});
    $(".browser_cross").animate({opacity:"1"});
};


function closeComputer(){
    $(".browser_cross").css("opacity","0");
    $(".browser").animate({opacity:"0"});
    $(".computer").css("cursor","pointer");
    $(".computer").animate({
        "bottom":"145px",
        "height":"250px",
        "width":"400",
        "margin-left":"-200px"
    });
    $(".shadow_effect").animate({opacity:"1"});
};

function openPhone(){
    $(".phone_hover").css('animation','none');

    $(".phone").css({
        "transform":"skewX(0deg)",
        "box-shadow":"none",
        "z-index":"300",
        "cursor":"default"
    });

    $(".phone").animate({
        "bottom":"2vh",
        "height":"96vh",
        "width":"30vw",
        "margin-left":"-15vw",
    });

    $(".phone_speaker").animate({
        "height":"2vh",
        "width":"12vw",
        "margin-top":"1vw"
    });
    $(".phone_content").animate({
        "height":"80vh",
        "width":"28vw",
        "margin-top":"1vw"
    });
    $(".phone_button").animate({
        "height":"5vh",
        "width":"5vh",
        "margin-top":"2vh"
    });
   
    $(".shadow_effect").animate({opacity:"0"},"slow");

    $(".phone_exit").css("pointer-events","auto");

    $(".phone_exit").animate({
        "opacity":"0.7"
    });
}

function closePhone(){
    $(".phone_exit").animate({
        "opacity":"0"
    });
    $(".phone_exit").css("pointer-events","none");

    $(".shadow_effect").animate({opacity:"1"},"slow");

    $(".phone_button").animate({
        "height":"5px",
        "width":"5px",
        "margin-top":"2px"
    });
    $(".phone_content").animate({
        "height":"50px",
        "width":"33px",
        "margin-top":"2px"
    });
    $(".phone_speaker").animate({
        "height":"2px",
        "width":"10px",
        "margin-top":"2px"
    });
    $(".phone").animate({
        "bottom":"45px",
        "height":"65px",
        "width":"40px",
        "margin-left":"250px"
    });
    $(".phone").promise().done(function()
    {
        $(".phone").css({
            "z-index":"110",
            "transform":"skewX(35deg)",
            "box-shadow":"-1px 1px var(--desk-shade-color)",
            "cursor":"pointer"
        });
        $(".phone_hover").css({
            "animation":"notification",
            "animation-duration":"8s",
            "animation-iteration-count":"infinite"
        });
    });
    
}

function skychange(to){
    if(to === 'toDay'){
        $(".shadow_effect").animate({opacity:"0"});
        $(".panel").css({
            "animation" : "skyChangeToDay",
            "animation-duration": "1s",
            "animation-fill-mode": "forwards"
        });
        
    }else{
        $(".shadow_effect").animate({opacity:"1"});
        $(".panel").css({
            "animation" : "skyChangeToNight",
            "animation-duration": "1s",
            "animation-fill-mode": "forwards"
        });
    }
}

function MoonSunToggle(to){
    if(to === 'toDay'){
        $(".moon").animate({
            "top":"-500px",
            "left":"500px"
        });
        $(".sun").animate({
            "top":"-120px",
            "left":"-25px"
        });
    }else{
        $(".moon").animate({
            "top":"-120px",
            "left":"-25px"
        });
        $(".sun").animate({
            "top":"150px",
            "left":"-500px"
        });
    }
}