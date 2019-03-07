(function(){
	var wow = new WOW({
	boxClass:"wow",
	animateClass:"animated",
	offset:0,
	mobile:true,
	live:true
	});
	wow.init();
})();
(function(){
	var marquee1 = new Marquee("picscroll2")
    marquee1.Direction = "left";
    marquee1.Step = 2;
    marquee1.Width = 1200;
    marquee1.Height = 295;
    marquee1.Timer = 50;
    marquee1.DelayTime = 0;
    marquee1.WaitTime = 1000;
    marquee1.ScrollStep = 0;
    marquee1.Start();
})();
$(function () {
    $('.news .container .tab a').mouseenter(function(){
        $(this).addClass('active').siblings().removeClass('active')
    });
    $('.news .container .tab a').mouseleave(function(){
        $('.news .container .tab a:first-child').addClass('active').siblings().removeClass('active')
    })
})
