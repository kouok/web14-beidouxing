(function(){
    var html=document.documentElement;
    var whtml=html.getBoundingClientRect().width;
    html.style.fontSize=whtml/3.75+"px";
})();

//顶部幻灯片
$(document).ready(function(){
	var i=0;
	var clone=$('.slide>ul>li').first().clone();
	$('.slide>ul').append(clone);
	var size=$('.slide>ul>li').size();
	console.log(size);

	for(var j=0;j<size-1;j++) {
        $(".go").append("<i></i>");
    }
    $(".go>i").first().addClass("color");

	var t=setInterval(function(){
		i++;
		console.log(i);
		move();
	},2000);

	function move(){
		if(i==size){
			$('.slide>ul').css({left:0});
			i=1;
		}
		$('.slide>ul').stop(true,true).animate({left:-i*3.75+'rem'},660);
		if(i==size-1){
            $(".go>i").eq(0).addClass("color").siblings().removeClass("color");
        }else{
            $(".go>i").eq(i).addClass("color").siblings().removeClass("color");
        }
	}
})

//主体
$(function(){
	var i=0;
	var clone=$('.box2>ul').first().clone();
	$('.box2').append(clone);
	var size=$('.box2>ul').size();

	$(".borderT").click(function(){
        var index=$(this).index();
        i=index;
        $(".box2").stop().animate({left:-index*3.552+'rem'},500);
        $(this).addClass("border2").siblings().removeClass("border2");
    });

	//向左按钮
    $(".btn2:eq(0)").click(function () {
        i--;
        move2();
    })
	//向右按钮
    $(".btn2:eq(1)").click(function () {
        i++;
        move2();
    })

	function move2(){
		if(i==size){
			$('.box2').css({left:0});
			i=1;
		}
		if(i==-1){
            $(".box2").css({left:-(size-1)*3.552+'rem'});
            i=size-2;
        }
		$('.box2').stop(true,true).animate({left:-i*3.552+'rem'},660);
		if(i==size-1){
			$('.borderT').eq(0).addClass('border2').siblings().removeClass('border2');
		}else{
			$('.borderT').eq(i).addClass('border2').siblings().removeClass('border2');
		}
	}
})


//
$(function(){
	var menu=$('.menu');
	var div=$('.menu>div>div');
	$('.logo3').click(function(){
		if(menu.is(':hidden')){
			menu.show();
		}else{
			menu.hide();
		}
	});
	div.hover(function(){
		$(this).addClass('menu-div').siblings().removeClass('menu-div');
	})
	$('.menu').click(function(){
        $('.menu').hide();
    });
})