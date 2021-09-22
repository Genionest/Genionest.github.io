$(document).ready(function(){
    var i=0;
    var menu = [
        ["home", "家园"],
        ["link", "链接"],
    ];
    var header = $(".header");
    while(menu[i]){
        header.append("<div class='navigation' id='"+menu[i][0]+"'><b>"+menu[i][1]+"<b></div>");

        var x = 280+i*60;
        $("#"+menu[i][0]).css({"left":x+"px", "bottom":"55px"});
        $("#"+menu[i][0]).hover(function(){
            $(this).css("color", "white");
        }, function(){
            $(this).css("color", "yellowgreen");
        });
        $("#"+menu[i][0]).click(function(){
            // $(".home").css("color", "yellowgreen");
            // $(this).css("color", "white");
            var t = $.ajax({
                url: "data/navigation/"+menu[i][0]+".html",
                async: false,
            });
            $(".maincontent").html(t.responseText);
        });
        i++;
    }
})