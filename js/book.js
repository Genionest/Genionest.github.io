$(document).ready(function(){
    var bar = $(".sidebar");
    function get_txt(n){
        var t = $.ajax({
            url: "data/page"+n+".html",
            async: false,
        });
        $(".maincontent").html(t.responseText);
//         alert(n);
    };
    function create_button(n, title){
        var str = "<div class=\"page_button\" id=\"page"+n+"\">第"+n+"章: "+title+"</div>";
        bar.append(str);
        $("#page"+n).click(function(){
            get_txt(n);
        });
    }
    create_button(1, "关于以前");
    create_button(2, "关于现在");
    create_button(3, "关于未来");
})
