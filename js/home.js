$(document).ready(function(){
    var i=0;
    var menu = [
        ["home", "家园"],
        ["link", "链接"],
    ];
    var header = $(".header");
    
    function get_nav(path){
        var t = $.ajax({
            url: path,
            async: false,
        });
        $(".maincontent").html(t.responseText);
        // alert(path);
    }
    while(menu[i]){
        header.append("<div class='navigation' id='"+menu[i][0]+"'><b>"+menu[i][1]+"<b></div>");

        var x = 280+i*60;
        $("#"+menu[i][0]).css({"left":x+"px", "bottom":"55px"});
        $("#"+menu[i][0]).hover(function(){
            $(this).css("color", "white");
        }, function(){
            $(this).css("color", "yellowgreen");
        });
        // 在click里面的话，只有调用时才初始化，但此时i=2
        var path = "data/navigation//"+menu[i][0]+".html";
        $("#"+menu[i][0]).click(function(){
            // $(".home").css("color", "yellowgreen");
            // $(this).css("color", "white");
            get_nav(path);
        });
        i++;
    }
})