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
        closeComputer(currentstate);
    });

    $(".phone").on('click', function(){
        openPhone();
    });

    $(".phone_exit").on('click', function(){
        closePhone(currentstate);
    })

    $(".moon").on('click', function(){
        skychange('toDay');
        MoonSunToggle('toDay');
        eqChange('toDay');
        currentstate = 'day';
    });

    $(".sun").on('click', function(){
        skychange('toNight');
        MoonSunToggle('toNight');
        eqChange('toNight');
        currentstate = 'day';
    });
    

    $("#home").on('click',function(){
        $('.pc2').removeClass('open')
        $('.pc3').removeClass('open')
        $('.pc4').removeClass('open')
        $('.pc2').addClass('close')
        $('.pc3').addClass('close')
        $('.pc4').addClass('close')

        $('.pc1').removeClass('close')
        $('.pc1').addClass('open')
    });

    $("#projects").on('click',function(){
        $('.pc1').removeClass('open')
        $('.pc3').removeClass('open')
        $('.pc4').removeClass('open')
        $('.pc1').addClass('close')
        $('.pc3').addClass('close')
        $('.pc4').addClass('close')
        
        $('.pc2').removeClass('close')
        $('.pc2').addClass('open')
    });

    $("#hobbies").on('click',function(){
        $('.pc1').removeClass('open')
        $('.pc2').removeClass('open')
        $('.pc4').removeClass('open')
        $('.pc1').addClass('close')
        $('.pc2').addClass('close')
        $('.pc4').addClass('close')
        
        $('.pc3').removeClass('close')
        $('.pc3').addClass('open')
    });

    $("#aboutme").on('click',function(){
        $('.pc1').removeClass('open')
        $('.pc2').removeClass('open')
        $('.pc3').removeClass('open')
        $('.pc1').addClass('close')
        $('.pc2').addClass('close')
        $('.pc3').addClass('close')
        
        $('.pc4').removeClass('close')
        $('.pc4').addClass('open')
    });
    
});

function openComputer(){
    $(".screen_saver").animate({opacity:"0"});
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


function closeComputer(currentstate){
    $(".browser_cross").css("opacity","0");
    $(".browser").animate({opacity:"0"});
    $(".computer").css("cursor","pointer");
    $(".computer").animate({
        "bottom":"145px",
        "height":"250px",
        "width":"400",
        "margin-left":"-200px"
    });
    if(currentstate !='day'){
        $(".shadow_effect").animate({opacity:"1"});
    }
    $(".screen_saver").animate({opacity:"1"});
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

    $("iframe").fadeIn();
}

function closePhone(currentstate){
    $("iframe").fadeOut();

    $(".phone_exit").animate({
        "opacity":"0"
    });

    $(".phone_exit").css("pointer-events","none");

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

    if(currentstate !='day'){
        $(".shadow_effect").animate({opacity:"1"});
    }
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

function eqChange(to){
    if(to=='toDay'){
        $(".eq1").css({
            "background-color" : "var(--eq1-day)"
        });
        $(".eq2").css({
            "background-color" : "var(--eq2-day)"
        });
        $(".eq3").css({
            "background-color" : "var(--eq3-day)"
        });
        $(".eq4").css({
            "background-color" : "var(--eq4-day)"
        });
        $(".eq5").css({
            "background-color" : "var(--eq5-day)"
        });
        $(".eq6").css({
            "background-color" : "var(--eq6-day)"
        });
        $(".eq7").css({
            "background-color" : "var(--eq7-day)"
        });
        $(".eq8").css({
            "background-color" : "var(--eq8-day)"
        });
        $(".eq9").css({
            "background-color" : "var(--eq9-day)"
        });
        $(".eq10").css({
            "background-color" : "var(--eq10-day)"
        });
        $(".eq11").css({
            "background-color" : "var(--eq11-day)"
        });
        $(".eq12").css({
            "background-color" : "var(--eq12-day)"
        });
        $(".eq13").css({
            "background-color" : "var(--eq13-day)"
        });
        $(".eq14").css({
            "background-color" : "var(--eq14-day)"
        });
        $(".eq15").css({
            "background-color" : "var(--eq15-day)"
        });
        $(".eq16").css({
            "background-color" : "var(--eq16-day)"
        });
        $(".eq17").css({
            "background-color" : "var(--eq17-day)"
        });
        $(".eq18").css({
            "background-color" : "var(--eq18-day)"
        });
        $(".eq19").css({
            "background-color" : "var(--eq19-day)"
        });
        $(".eq20").css({
            "background-color" : "var(--eq20-day)"
        });
        $(".eq21").css({
            "background-color" : "var(--eq21-day)"
        });
        $(".eq22").css({
            "background-color" : "var(--eq22-day)"
        });
    }else{
        $(".eq1").css({
            "background-color" : "var(--eq1-night)"
        });
        $(".eq2").css({
            "background-color" : "var(--eq2-night)"
        });
        $(".eq3").css({
            "background-color" : "var(--eq3-night)"
        });
        $(".eq4").css({
            "background-color" : "var(--eq4-night)"
        });
        $(".eq5").css({
            "background-color" : "var(--eq5-night)"
        });
        $(".eq6").css({
            "background-color" : "var(--eq6-night)"
        });
        $(".eq7").css({
            "background-color" : "var(--eq7-night)"
        });
        $(".eq8").css({
            "background-color" : "var(--eq8-night)"
        });
        $(".eq9").css({
            "background-color" : "var(--eq9-night)"
        });
        $(".eq10").css({
            "background-color" : "var(--eq10-night)"
        });
        $(".eq11").css({
            "background-color" : "var(--eq11-night)"
        });
        $(".eq12").css({
            "background-color" : "var(--eq12-night)"
        });
        $(".eq13").css({
            "background-color" : "var(--eq13-night)"
        });
        $(".eq14").css({
            "background-color" : "var(--eq14-night)"
        });
        $(".eq15").css({
            "background-color" : "var(--eq15-night)"
        });
        $(".eq16").css({
            "background-color" : "var(--eq16-night)"
        });
        $(".eq17").css({
            "background-color" : "var(--eq17-night)"
        });
        $(".eq18").css({
            "background-color" : "var(--eq18-night)"
        });
        $(".eq19").css({
            "background-color" : "var(--eq19-night)"
        });
        $(".eq20").css({
            "background-color" : "var(--eq20-night)"
        });
        $(".eq21").css({
            "background-color" : "var(--eq21-night)"
        });
        $(".eq22").css({
            "background-color" : "var(--eq22-night)"
        });
    }
}