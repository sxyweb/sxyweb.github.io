$(function () {
    var but = $("#button1"),
        can = $("#canvas"),
        close = $("#close"),
        min = $("#min"),
        footer_button = $(".footer_button"),
        imgs = $("span,img"),
        tab1 = "A";
    //禁止拖动
    imgs.on("contextmenu", function () {
        return false;
    });
    imgs.on("dragstart", function () {
        return false;
    });
    //双击打开
    but.dblclick(function () {
        can.show();
        footer_button.show();
    })
    //点击叉号关闭
    close.mousedown(function () {
        can.hide();
        footer_button.hide();
    })
    //点击缩小
    min.mousedown(function () {
        can.hide();
        footer_button.show();
        tab1 = "A"
    })
    //缩小与显示切换
    if (tab1 === "A") {
        footer_button.mousedown(function () {
            if (tab1 === "A") {
               $(".shows").mousedown(function () {
                   can.show();
                   tab1 = "B";
               })
            } else if (tab1 === "B") {
                can.hide();
                footer_button.show();
                tab1 = "A";
            }
        })
    }

})

//显示时间
function time() {
    var now = new Date(),
        hour = now.getHours(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }
    document.getElementById("time").innerText = hour + ":" + minute+":"+second;

}

setInterval(time, 1000);
window.onload = time;
