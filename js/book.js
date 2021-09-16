$(document).ready(function(){
    // 目录在这里增加, 对应("page%d/section%d.html", page, section)
    var book = [
        [
            ["C语言", "c"],
            "链表",
            "交换两个int",
            "一些字符串函数",
        ],
        [
            ["MATLAB", "matlab"],
            "变量",
            "矩阵",
            "程序结构",
            "二维平面绘图",
            "三位离提绘图",
            "导出图像",
        ],
        [
            ["数据结构与算法", "DandA"],  // 不能用&符号
            "1-1 插入排序",
        ],
    ];
    
    // 附录在这里增加, 对应("sheet%d/section%d.html", sheet, section)
    var book2 = [
        [
            ["其他", "other"],
            "所需课程",
            "NCRE相关",
            "考研相关",
        ],
    ]

    var bar = $(".sidebar");
    var bar2 = $(".sidebar-right");
    function get_page(n, m, is_sheet){
        var path = "data/page"+n+"/section"+m+".html"
        if(is_sheet==true){
            path = "data/sheet"+n+"/section"+m+".html";
        }
        var t = $.ajax({
            url: path,
            async: false,
        });
        $(".maincontent").html(t.responseText);
        // alert(n+"-"+m);
    };
    function create_page(n, title){
        bar.append("<div class='page"+n+"'></div>")
        var str = "<div class=\"page-btn\" id=\"page"+n+"\">"+title+"</div>";
        $(".page"+n).append(str);
        $("#page"+n).click(function(){
            $("div[id^='page-section"+n+"']").slideToggle()
        });
    }
    function create_sheet(n, title){
        bar2.append("<div class='sheet"+n+"'></div>")
        var str = "<div class=\"sheet-btn\" id=\"sheet"+n+"\">"+title+"</div>";
        $(".sheet"+n).append(str);
        $("#sheet"+n).click(function(){
            $("div[id^='sheet-section"+n+"']").slideToggle()
        });
    }
    function create_page_section(n, m, title){
        var page = $(".page"+n);
        var str = "<div class=\"section-btn\" id=\"page-section"+n+"-"+m+"\">"+title+"</div>";
        page.append(str);
        $("#page-section"+n+"-"+m).click(function(){
            get_page(n, m);
        })
    }
    function create_sheet_section(n, m, title){
        var sheet = $(".sheet"+n);
        var str = "<div class=\"section-btn\" id=\"sheet-section"+n+"-"+m+"\">"+title+"</div>";
        sheet.append(str);
        $("#sheet-section"+n+"-"+m).click(function(){
            get_page(n, m, true);
        })
    }

    var i = 0;
    while(book[i]){
        // create_page(i+1, book[i][0]);
        create_page(book[i][0][1], book[i][0][0]);
        var j=1;
        while(book[i][j]){
            // create_page_section(i+1, j, book[i][j]);
            create_page_section(book[i][0][1], j, book[i][j]);
            j++;
        }
        i++;
    }
    i = 0;
    while(book2[i]){
        // create_sheet(i+1, book2[i][0]);
        create_sheet(book2[i][0][1], book2[i][0][0]);
        var j=1;
        while(book[i][j]){
            // create_sheet_section(i+1, j, book2[i][j]);
            create_sheet_section(book2[i][0][1], j, book2[i][j]);
            j++;
        }
        i++;
    }
})
