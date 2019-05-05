$(document).ready(function(){

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

});