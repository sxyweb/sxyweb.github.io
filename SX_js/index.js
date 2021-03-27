$(function () {
    //点击颜文字效果
    // $("html，body").click(function (e) {   脑残程序员写的这行代码，莫名执行两次
    $("html").click(function (e) {
        anp(e);
    })

    function anp(e) {
        //数组设计，默认随机
        const array = ['(*^▽^*)', '哭(QAQ)', '~(￣▽￣)~*', '~( ´•ω•)ﾉ', '(￣^￣゜)', 'lfg0.0', 'sxyOxO', 'xxb?_?'];
        const a = parseInt(array.length * Math.random()) //获取数组下标的随机数
        const $i = $("<p>").text(array[a]);
        const x = e.pageX,
            y = e.pageY;
        $i.css({
            top: y - 20,
            left: x,
            position: "absolute",
            color: '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6)
        });
        $("body").append($i);
        $i.animate({
            top: y - 180, opacity: 0, "font-size": "26px"
        }, 1500, function () {
            $i.remove();
        });
        // e.stopPropagation();     脑残程序员写的这行代码，会让点击冒泡失效
    }






    //图片上蒙版文字出现 开始
    $(".con-six").hover(function () {
        $(this).find(".conimg-two").stop().animate({"width": 1200, "height": 400});
        $(this).find(".txt-six").css("display", "block");
    }, function () {
        $(this).find(".conimg-two").stop().animate({"width": 1100, "height": 300});
        $(this).find(".txt-six").css("display", "none");
    })

})





