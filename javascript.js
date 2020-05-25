

	mybutton=document.getElementById("myBtn");

	window.onscroll=function(){scrollFunction()};

	function scrollFunction(){
		if(document.body.scrollTop>20 || document.documentElement.scrollTop >20){
			mybutton.style.display='block';
		}
		else{
			mybutton.style.display='none';
		}
	}

	function topFunction(){
		document.body.scrollTop=0;
		document.documentElement.scrollTop=0;
	}



	$(document).ready(function(){
	$(window).scroll(function(){
		var positiontop=$(document).scrollTop();
		console.log(positiontop);

		if((positiontop>168) && (positiontop< 1330) ){
			$("#ybdslogo").addClass("animated bounce");
		}

		if((positiontop>168) && (positiontop< 1330) ){
			$("#Aboutanime").addClass("animated backInUp");
		}

		if((positiontop>1000) && (positiontop< 2030) ){
			$("#bfw").addClass("animated fadeInTopLeft");
		}
		if((positiontop>1970) && (positiontop< 2500) ){
			$("#sd").addClass("animated fadeInTopRight");
		}
		if((positiontop>2500) && (positiontop< 3179) ){
			$("#pap").addClass("animated fadeInTopLeft");
		}
		if((positiontop>3179) && (positiontop< 3800) ){
			$("#lady").addClass("animated fadeInTopRight");
		}
		
		if((positiontop>3800) && (positiontop<4300)){
			$("#galleryblock").addClass("animated backInUp");
		}
		if((positiontop>4900) && (positiontop<5500)){
			$("#Contact").addClass("animated fadeInUp");
		}


		if((positiontop>0) && (positiontop<774)){
			$("#teampage").addClass("animated fadeInUp");
		}if((positiontop>0) && (positiontop<774)){
			$("#card1").addClass("animated fadeInTopLeft");
		}if((positiontop>0) && (positiontop<774)){
			$("#card2").addClass("animated fadeInDown");
		}if((positiontop>0) && (positiontop<774)){
			$("#card3").addClass("animated fadeInUp");
		}if((positiontop>0) && (positiontop<774)){
			$("#card4").addClass("animated fadeInTopRight");
		}


		if((positiontop>0) && (positiontop<774)){
			$("#aboutpage").addClass("animated fadeInUp");
		}

		if((positiontop>0) && (positiontop<774)){
			$("#gallerypage").addClass("animated fadeInUp");
		}

		if((positiontop>0) && (positiontop<774)){
			$("#Contact").addClass("animated fadeInUp");
		}







		$(function() {
		var selectedClass = "";
		$(".filter").click(function(){
		selectedClass = $(this).attr("data-rel");
		$("#gallery").fadeTo();
		$("#gallery div").not("."+selectedClass).fadeOut().removeClass('animation');
		setTimeout(function() {
		$("."+selectedClass).fadeIn().addClass('animation');
		$("#gallery").fadeTo();
		}, );
		});
		});
	});
	});
	

	 $(window).scroll(function() {
	 	if ($(document).scrollTop() > 40) {
	 		$('nav').addClass('shrink');
	 	} else {
	 		$('nav').removeClass('shrink');
	 	}
	 });

