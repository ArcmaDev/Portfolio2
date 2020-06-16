$(document).ready(function(){
	
	//get_time();
	var menu_height = $(".main_menu").offset().top;
	main_menu_fix_scroll($(document),menu_height);

	$(window).scroll(function(){ 	
		main_menu_fix_scroll($(this),menu_height);
	});

	main_menu();	
	main_skills();
	//animate_fadein();
	aos_skills();
	main_service();

});
function get_time(){
	var refresh=1000; // Refresh rate in milli seconds
	setTimeout(
	function(){
		
		var x = new Date();
		//var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getYear(); 
		var hours = ("0" + x.getHours( )).slice(-2);
		var minutes = ("0" + x.getMinutes( )).slice(-2);
		var seconds = ("0" + x.getSeconds( )).slice(-2);
		var ampm = hours >= 12 ? 'PM' : 'AM';
		hours = hours >= 12 ? hours - 12 : hours;
		hours = ("0" + hours).slice(-2);
		var time  =  hours + ":" +  minutes + ":" +  seconds + " "+ampm;
		$(".header_time").html(time);

		get_time();
	},	
	refresh);
}








function main_menu(){
	var top_margin = 80;
	$(".main_menu_container ul li a").click(function(){
		$(".main_menu_container .menu_active").removeClass('menu_active');
		$(this).addClass('menu_active').focus();
		$(".main_menu_container ul").removeAttr("style");

		// go to target
		//var targetOffset = $("#"+$(this).attr('data-target')).offset().top - $margin; 
		var targetOffset = $(this).attr('data-target');
		var section_target = $(".section_target[section='"+targetOffset+"']").offset().top - top_margin;
		//var test = $("#"+$(this).attr('data-target')).find(".container").offset().top;
		if(targetOffset == 'home'){
			section_target = 10;
		}
		//console.log(section_target);
		$('html, body').animate({scrollTop:section_target}, 'slow');




	});

	$(".mobile_menu").click(function(){
		//$(".main_menu_container ul").toggle();
		$(".main_menu_container ul").slideToggle( "slow", function() {
		    // Animation complete.
		});
	});



	// scroll
	$(window).scroll(function(){
		header_scroll($(this),top_margin);
	});
	header_scroll($(this),top_margin);

	var section_target = [];
	$('.section_target').each(function(){
	//	console.log($(this).scrollTop());
		section_target.push( $(this).offset().top );
		
	});
	//console.log(section_target);

	function header_scroll(scroll,top_margin){
		top_margin = top_margin + 40;
		var cur = scroll.scrollTop();
		var target;
		$('.section_target').each(function(){
			var elem_top = $(this).offset().top - top_margin ;
			var elem_section = $(this).attr("section");
			// console.log(cur +">="+ elem_top);
			if(cur >= elem_top){
				target = ".main_menu ul li a[data-target='"+elem_section+"']";
			}
		});
		$(".main_menu_container .menu_active").removeClass('menu_active');
		$(target).addClass('menu_active').focus();
	}
	
}

function main_menu_fix_scroll(scroll,menu_height){
	var cur = scroll.scrollTop();
	$("#scroll_target").html(cur);
	if(cur > menu_height){
		$(".main_menu_container").addClass('menu_fixed_position');
	}else{
		$(".main_menu_container").removeClass('menu_fixed_position');
		
	}
}

function main_skills(){
	var $window           = $(window),
		win_height_padded = $window.height() * 1.1,
		skill_container_top = $(".section_target[section='skills']").offset().top;
		

		
		$window.on('load', revealOnScroll);
		$window.on('scroll', revealOnScroll);
	
	function revealOnScroll() {
		$elem_con = $(".section_target[section='skills']");
		if(!$elem_con.hasClass('done_animate')){
			
			var parallax_h = $('.parallax-mirror').height(),
				main_menu_container_h = $('.main_menu_container').height(),
				position = skill_container_top + parallax_h - 30,
				maxWidth = 768,
				scrolled = $window.scrollTop();

			//console.log(scrolled + win_height_padded +" > "+ position);
			if (scrolled + win_height_padded > position) {
				$elem_con.addClass('done_animate');




				var count = 0;
				$(".skill_type").each(function () {
					var $skill_type = $(this);
					$skill_type.removeClass("no_display").addClass("animate__animated animate__fadeInUp");
					

					

					if(window.innerWidth > maxWidth){
						var	ms = (count * 1000) + 1200;

						if(count >= 1){
							$skill_type.addClass("animate__delay-"+count+"s");
						}
					}else{
						var ms = 0;
					}
					
					console.log('dipota');
					console.log(ms);

					setTimeout(function(){
						$skill_type.find(".progress").each(function(){
							var val = $(this).attr("data-width")+"%";
							$(this).find(".progress-bar").css({'width':val}).html(val);
						});
					}, ms);
					
					count++;

				});
			}
		}
	}

	function do_animate_skill_enter(){
		
		
		function repeat_skill_animate(){

		}

	}

	function do_progress_skills(){
		$(".skill_container .progress").each(function(){
			var val = $(this).attr("data-width")+"%";

			$(this).find(".progress-bar").css({'width':val}).html(val);
			//console.log(val);
		
		});
	}
}
function animate_fadein(){
		var element_position = $('.animate_fadein').offset().top;

		var $window           = $(window),
		win_height_padded = $window.height() * 1.1;
		
		
		
		$window.on('load', revealOnScroll);
		$window.on('scroll', revealOnScroll);
	
	function revealOnScroll() {
		

		$('.animate_fadein').each(function(){
			$elem_con = $(this);

			var skill_container_top = $elem_con.scrollTop();
			console.log(skill_container_top);
			/*
			var parallax_h = $('.parallax-mirror').height(),
				//main_menu_container_h = $('.main_menu_container').height(),
				position = skill_container_top + parallax_h - 30;
				scrolled = $window.scrollTop(),
				top_scroll = scrolled + win_height_padded,
				doc_h = $( window ).height() - 30;
				
				//console.log(scrolled +" > "+ doc_h);
				if(scrolled > doc_h){
					//console.log(top_scroll +" > "+ position);
					if (scrolled + win_height_padded > position) {
						
						if(!$elem_con.hasClass('done_animate')){
							$elem_con.removeClass("no_display").addClass("done_animate animate__animated animate__fadeInUp");
						
						}

					}
				}

				*/

			
		});
	}





		
		/*
		//$window.on('load', revealOnScroll);
		//$window.on('scroll', revealOnScroll);
	
	function revealOnScroll() {
		var $skill_container_top = $(".animate_fadein");
		$elem_con = $(".section_target[section='skills']");
		if(!$elem_con.hasClass('done_animate')){
			
			var parallax_h = $('.parallax-mirror').height(),
				main_menu_container_h = $('.main_menu_container').height(),

				position = $skill_container_top.offset().top - 200;
				scrolled = $window.scrollTop();
			console.log($skill_container_top.offset() + "= "+  $skill_container_top.offsetTop);
			//console.log(scrolled +" > "+ position);
			if (scrolled > position) {
				$elem_con.addClass('done_animate');
				$skill_container_top.removeClass("no_display").addClass("animate__animated animate__fadeInUp");
			}
		}
	}
	*/

}

function aos_skills(){
	var $window           = $(window),
		win_height_padded = $window.height() * 1.1;

	$window.on('load', revealOnScroll);
	$window.on('scroll', revealOnScroll);

	function revealOnScroll() {
		var scrolled = $window.scrollTop();
		$(".skills_progress:not(.animated)").each(function () {
			var $this     = $(this),
			offsetTop = $this.offset().top;
			
			if (scrolled + win_height_padded > offsetTop) {
				if(!$this.hasClass("viewed")){
					//console.log(scrolled + win_height_padded +">"+ offsetTop);
					$this.addClass("viewed");
					var $val = $this.attr("data-value");
					var $progress = 0;
					if(typeof $val !== undefined && $val !== false) {
						$progress = $val;
					}
					
					setTimeout(function(){
						$this.find(".progress-bar").animate({
							width: $progress+"%"
						}, 1000 ).html($progress+"%");
					}, 2000);
					
				}
			}else{
				//$this.find(".progress-bar").css('width','0%');
				//$this.removeClass("viewed");
			}
		});
	}
}

function main_service(){
	$(".service_readme").click(function(){
		$elem = $(this);
		$target = $elem.attr('target');

		if($elem.hasClass('readless')){
			$elem.removeClass('readless');
			$elem.find('span').html('More <i class="fa fa-arrow-right">');

		}else{
			$elem.addClass('readless');
			$elem.find('span').html('Less <i class="fa fa-arrow-down">');
		}

		$("."+$target).slideToggle();
	});
}



