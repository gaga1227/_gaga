function jSlideshowLite(slidesContainer, slide, timeInterval, switchLimit, transitionTime){
	
	//vars 
	var slideshowFunction; //slideshow time interval function call
	var currentSlideIndex=1; //current slide index used in loop
	var completedAutoSwitch=0; //number of auto slides switches completed
	var maxAutoSwitchAllowed=switchLimit; //max limit of auto slide switch allowed
	var slideInterval=timeInterval; //time interval in-between 2 slides 
	var totalSlides=$(slide).size(); //get number of elements with a slide class
			
	//init view
	$(slide).each(function(i){
		//hide all slides
		$(this).css({position:"absolute",display:"none"});
		//except for the first slide
		if(i==0){
			$(this).fadeIn(transitionTime).addClass("currentSlide");//addClass("currentSlide").css("display","block");
		}
	});
	
	//Slide switch function
	function switchSlide(){
		if(completedAutoSwitch==maxAutoSwitchAllowed-1){clearTimeout(slideshowFunction)};
		if(currentSlideIndex==(totalSlides)){currentSlideIndex=0};
		$(slide+":eq("+currentSlideIndex+")").fadeIn(transitionTime).addClass("currentSlide");
		$(slide).not(":eq("+currentSlideIndex+")").fadeOut(transitionTime).removeClass("currentSlide");
		completedAutoSwitch++;
		currentSlideIndex++;
	}
	//initial auto slideshow interval call
	slideshowFunction=setInterval(switchSlide,(slideInterval*1000));
};