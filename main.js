$(function () {
    
    $('.btn1').click(function () {
        $('.q1').toggleClass('open')
    });
    $('.btn2').click(function () {
        $('.q2').toggleClass('open')
    });
    $('.btn3').click(function () {
        $('.q3').toggleClass('open')
    });
    $('.btn4').click(function () {
        $('.q4').toggleClass('open')
    });
    $('.btn5').click(function () {
        $('.q5').toggleClass('open')
    });
    $('.btn6').click(function () {
        $('.q6').toggleClass('open')
    });

    $(window).scroll(function () {
        // point-textクラスに対して順に処理を行う
        $('.point-text').each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // point-textクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // point-textクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 300) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });

    $('.slide-items').slick({
        arrous:true,
        dots:true,
        prevArrow:'<img src="img/Polygon 4.png" class="prev-btn arrow">',
        nextArrow:'<img src="img/Polygon 3.png" class="next-btn arrow">'
    })
    $(window).scroll(function () {
        // point-textクラスに対して順に処理を行う
        $('.book').each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // point-textクラスの要素までの距離
            let target2 = $(this).offset().top;
            // 画面の高さ
            let windowHeight2 = $(window).height();
            // point-textクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target2 - windowHeight2 + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});
