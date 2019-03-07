$(function(){
	$("#kinMaxShow").kinMaxShow({
		height:500,
		button:{
				showIndex:false,
				normal:{background:'url(images/button.png) no-repeat -14px 0',marginRight:'8px',border:'0',right:'5%',bottom:'20px'},
				focus:{background:'url(images/button.png) no-repeat 0 0',border:'0'}
			},
		callback:function(index,action){
			switch(index){
				case 0 :
					if(action=='fadeIn'){
						$(this).find('.sub_1_1').animate({top:'20px'},600)
						$(this).find('.sub_1_2').animate({top:'140px'},600)
						$(this).find('span').animate({top:'280px'},600)
						$(this).find('a').animate({top:'350px'},600)
					}else{
						$(this).find('.sub_1_1').animate({top:'50px'},600)
						$(this).find('.sub_1_2').animate({top:'160px'},600)
						$(this).find('span').animate({top:'300px'},600)
						$(this).find('a').animate({top:'380px'},600)
					};
					break;
				case 1 :
					if(action=='fadeIn'){
						$(this).find('.sub_2_1').animate({left:'-100px'},600)
						$(this).find('.sub_2_2').animate({top:'60px'},600)
					}else{
						$(this).find('.sub_2_1').animate({left:'-160px'},600)	
						$(this).find('.sub_2_2').animate({top:'20px'},600)
					};
					break;
				case 2 :
					if(action=='fadeIn'){
						$(this).find('.sub_3_1').animate({right:'350px'},600)
						$(this).find('.sub_3_2').animate({left:'180px'},600)
					}else{
						$(this).find('.sub_3_1').animate({right:'180px'},600)	
						$(this).find('.sub_3_2').animate({left:'30px'},600)
					};
					break;											
			}
		}
	});

	$("#about_show").kinMaxShow({
		height:300,
		button:{
				showIndex:false,
				normal:{background:'url(images/button.png) no-repeat -14px 0',marginRight:'8px',border:'0',right:'5%',bottom:'20px'},
				focus:{background:'url(images/button.png) no-repeat 0 0',border:'0'}
			}
	});
});