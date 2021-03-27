var canvas = document.getElementById('tyb');
var A = document.getElementById("A");
var ctx = canvas.getContext("2d");
var color = document.getElementById('color').value;
var width = document.getElementById('width').value;
var pens = document.getElementById('pens');
var pen = pens.value;
canvas.width = A.offsetWidth - 10;
canvas.height = 400;

function can_w() {
    canvas.width = A.offsetWidth - 10;
    canvas.height = 400;
}

var as = setInterval(can_w, 100);


function colors() {
    color = document.getElementById('color').value;
}

function widths() {
    width = document.getElementById('width').value;
}

//选择画笔
pens.onchange = function () {
    pen = this.value;
}
//鼠标事件
canvas.onmousedown = function (e) {
    clearInterval(as);
    if (e.button === 0) {
        if (pen == "eraser") {
            color = "#ffffff"
        } else {
            color = document.getElementById("color").value;
        }
        var x = e.clientX - canvas.getBoundingClientRect().left;
        var y = e.clientY - canvas.getBoundingClientRect().top;
        ctx.beginPath();
        ctx.moveTo(x, y);
        canvas.onmousemove = function (event) {
            var x = event.clientX - canvas.getBoundingClientRect().left;
            var y = event.clientY - canvas.getBoundingClientRect().top;
            ctx.lineTo(x, y);
            ctx.strokeStyle = color;
            ctx.lineWidth = width;
            ctx.stroke();
        }
        canvas.onmouseout = function (event) {
            canvas.onmousemove = null;
        }
        canvas.onmouseup = function (event) {
            canvas.onmousemove = null;
        }
    }
}

//显示range数字
document.getElementById("width").onmousemove = function () {
    this.title = width;
}
//清楚画布
document.getElementById("back").onmousedown = function () {
    ctx.clearRect(0, 0, A.offsetWidth - 10, 600);
}

//点击按钮保存图片
document.getElementById("save").onclick = function () {
    downLoad(saveAsPNG(canvas));
}

// 保存成png格式的图片
function saveAsPNG(canvas) {
    return canvas.toDataURL("image/png");
}

function downLoad(url) {
    var oA = document.createElement("a");
    oA.download = '绘画';// 设置下载的文件名，默认是'下载'
    oA.href = url;
    document.body.appendChild(oA);
    oA.click();
    oA.remove(); // 下载之后把创建的元素删除
}
window.onload = can_w;