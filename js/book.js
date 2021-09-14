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
    var book = [
        "所需课程",
        "NCRE相关",
        "考研相关",
    ];

    var i = 0;
    while(book[i]){
        create_button(i+1, book[i]);
        i++;
    }
})
