(function(){
    $('.smblock').click(function(){
        $('.navtoggle').toggleClass('hide');
    });
    $(window).scroll(function(){
        var index;
        var scrollTop=$(window).scrollTop();
        var $navLis=$('.navList>ul>li');
        var arr=[0,
            $('#workshigh').offset().top-100,
            $('#serverhigh').offset().top-100,
            $('#abouthigh').offset().top-100,
            $('#customerhigh').offset().top-100,
            $('.contact').offset().top-100
        ]
        for (var i=0;i<arr.length;i++){
            if(scrollTop>=arr[i]&&scrollTop<=arr[i+1]){
                index=i;
            }
        }
        if(scrollTop>=arr[5]-500){
            index=6;
        }
        $navLis.removeClass('activeli');
        $($navLis[index]).addClass('activeli');
    });
})();
function changeScroll(high,i=-1){
    $(window).scrollTop(high-99)
    console.log(high);
    var $navLis=$('.navList>ul>li')
    $navLis.removeClass('activeli')
    $($navLis[i]).addClass('activeli')
}
