$(document).ready(function(){
	$(".creativity-sedction").hide();
	$(".menu-section").hide();

	$(".first").click(function(){
		$(".home").show(1000);
		$(".creativity-sedction").hide(1000);
	});
	$("img").click(function(){
		$(".home").fadeOut(1000);
		$(".creativity-sedction").show(1000);
	});


	$(".category .menu-cr").click(function(){
		$(".form-section").hide();	
		$(".menu-section").show();	

	});
	$(".category .menu-home").click(function(){
		$(".form-section").show();	
		$(".menu-section").hide();	

	});



	$(".form-field .name").click(function(){
		$("form").append("<span>Name:</span><input type='text'><br/>");	
	});
	$(".form-field .email").click(function(){
		$("form").append("<span>Email:</span><input type='email'><br/>");	
	});
	$(".form-field .psw").click(function(){
		$("form").append("<span>Password:</span><input type='password'><br/>");	
	});
	$(".form-field .submit").click(function(){
		$("form").append("</span><input type='submit'><br/>");	
	});
	$(".form-field .remove").click(function(){
		$("form").empty();	
	});
	$(".form-field .get").click(function(){
		alert($("form").html());	
	});


	$(".menu-field .menu-home").click(function(){
		$(".new-menu ul").append("<li><a href='#'>Home</a></li>");	
	});
	$(".menu-field .about").click(function(){
		$(".new-menu ul").append("<li><a href='#'>About</a></li>");	
	});
	$(".menu-field .contact").click(function(){
		$(".new-menu ul").append("<li><a href='#'>Contact</a></li>");	
	});
	$(".menu-field .gallery").click(function(){
		$(".new-menu ul").append("<li><a href='#'>Gallery</a></li>");	
	});
	$(".menu-field .portfolio").click(function(){
		$(".new-menu ul").append("<li><a href='#'>Portfolio</a></li>");	
	});
	$(".menu-field .testimonial").click(function(){
		$(".new-menu ul").append("<li><a href='#'>Testimonial</a></li>");	
	});
	$(".menu-field .remove-menu").click(function(){
		$(".new-menu ul").empty();	
	});
	$(".menu-field .get-menu").click(function(){
		alert($(".new-menu ul").html());	
	});
});