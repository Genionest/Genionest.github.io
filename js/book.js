$(document).ready(function(){
    // 目录在这里增加, 对应("page%d-%d.html", page, section)
    var book = [
        [
            "其他",
            "所需课程",
            "NCRE相关",
            "考研相关",
        ],
    ];

    var bar = $(".sidebar");
    function get_txt(n, m){
        var t = $.ajax({
            url: "data/page"+n+"-"+m+".html",
            async: false,
        });
        $(".maincontent").html(t.responseText);
//         alert("n"+"m");
    };
    function create_page(n, title){
        bar.append("<div class='page"+n+"'></div>")
        var str = "<div class=\"page-btn\" id=\"page"+n+"\">"+title+"</div>";
        $(".page"+n).append(str);
        $("#page"+n).click(function(){
            $("div[id^='section"+n+"']").slideToggle()
        });
    }
    function create_section(n, m, title){
        var page = $(".page"+n);
        var str = "<div class=\"section-btn\" id=\"section"+n+"-"+m+"\">"+title+"</div>";
        page.append(str);
        $("#section"+n+"-"+m).click(function(){
            get_txt(n, m);
        })
    }

    var i = 0;
    while(book[i]){
        create_page(i+1, book[i][0]);
        var j=1;
        while(book[i][j]){
            create_section(i+1, j, book[i][j]);
            j++;
        }
        i++;
    }
})
