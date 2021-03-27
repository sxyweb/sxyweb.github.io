const cards = document.querySelectorAll('.card');
/* 视图控制器------------*/
const btns = document.querySelectorAll('.js-btn');
btns.forEach(btn => {
    btn.addEventListener('click', on_btn_click, true);
    btn.addEventListener('touch', on_btn_click, true);
});

function on_btn_click(e) {
    const nextID = e.currentTarget.getAttribute('data-target');
    const next = document.getElementById(nextID);
    if (!next) return;
    bg_change(nextID);
    view_change(next);
    return false;
}

/* 向body里添加class */
function bg_change(next) {
    document.body.className = '';
    document.body.classList.add('is-' + next);
}

/* 向car里添加class */
function view_change(next) {
    cards.forEach(card => {
        card.classList.remove('is-show');
    });
    next.classList.add('is-show');
}

/*刷新网页背景图随机切换*/
$(document).ready(function () {
    var random_bg = Math.floor(Math.random() * 13 + 1);
    var bg = 'url(../img/Sign_in/bg_' + random_bg + '.png)';
    $("body").css("background-image", bg);
});

