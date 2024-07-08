$(document).ready(function() {
    // 네비게이션 애니메이션
    $('nav ul li').each(function(index) {
        $(this).css('animation', `fadeIn 0.5s ease forwards ${index / 7 + 0.3}s`);
        $(this).css('opacity', '0');
    });

    // 스크롤 애니메이션
    $(window).scroll(function() {
        $('section').each(function() {
            if ($(this).offset().top <= $(window).scrollTop() + $(window).height() * 0.75) {
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });

    // 퀵 링크 호버 효과
    $('.quick-link').hover(
        function() {
            $(this).find('i').addClass('fa-bounce');
        },
        function() {
            $(this).find('i').removeClass('fa-bounce');
        }
    );

    // 페이지 로드 애니메이션
    $('body').css('display', 'none');
    $('body').fadeIn(1000);

    // 페이지 전환 애니메이션
    $('a').click(function(e) {
        e.preventDefault();
        let link = $(this).attr('href');
        $('body').fadeOut(500, function() {
            window.location = link;
        });
    });
});