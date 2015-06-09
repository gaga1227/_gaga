function jSlideshow(slidesContainer, slide, paginationContainer, timeInterval, switchLimit, transitionTime){
	
	//vars 
	var slideshowFunction; //slideshow time interval function call
	var currentSlideIndex=1; //current slide index used in loop
	var completedAutoSwitch=0; //number of auto slides switches completed
	var buttonHTML; //HTML string for inserting correct button state image
	var maxAutoSwitchAllowed=switchLimit; //max limit of auto slide switch allowed
	var slideInterval=timeInterval; //time interval in-between 2 slides 
	var totalSlides=$(slide).size(); //get number of elements with a slide class
	var paginationEnabled=paginationContainer; //check if pagination container is available
	
	//only enable pagination buttons when container is specified
	if(paginationEnabled){
		
		//get total slides number and set paginition view
		$(slide).each(function(i){
			$(this).css({position:"absolute",display:"none"});
			if(i==0){
				$(this).fadeIn(transitionTime).addClass("currentSlide"); //addClass("currentSlide").css("display","block");
				buttonHTML='<a href="javascript:void(0);" class="activeSlide"><img src="img/ico_dots_alt.png" alt="" width="8" height="16"/></a>';
			}else{
				buttonHTML='<a href="javascript:void(0);"><img src="img/ico_dots_alt.png" alt="" width="8" height="16"/></a>';
			}
			$(paginationContainer).append(buttonHTML);
		});
		
		//Pagination button behavior
		$(".slideprev, .slidenext").click(function(){
			
			//stop auto slideshow
			clearTimeout(slideshowFunction);
			
			//set new slideshow point
			var i=$(slide).index($(".currentSlide"));
			if($(this).attr("class")=="slideprev"){
				nextSlide=(i==0)?(totalSlides-1):i-1
			}else{
				nextSlide=(i==(totalSlides-1))?0:i+1
			}
			//control view
			$(slide+":eq("+nextSlide+")").fadeIn(transitionTime).addClass("currentSlide");
			$(slide).not(":eq("+nextSlide+")").fadeOut(transitionTime).removeClass("currentSlide");
			$(paginationContainer).find("a:eq("+nextSlide+")").addClass("activeSlide");
			$(paginationContainer).find("a:not(:eq("+nextSlide+"))").removeClass("activeSlide");
			
			//continue with auto slideshow
			slideshowFunction=setInterval(switchSlide,(slideInterval*1000));
		});
		
		//Pagination dot-button behavior
		$(paginationContainer+" a").click(function(){
			
			//stop auto slideshow
			clearTimeout(slideshowFunction);
			
			//set new slideshow point
			var i=$(paginationContainer+" a").index($(this));
			//control view
			$(slide+":eq("+i+")").fadeIn(transitionTime).addClass("currentSlide");
			$(slide).not(":eq("+i+")").fadeOut(transitionTime).removeClass("currentSlide");
			$(paginationContainer).find("a:eq("+i+")").addClass("activeSlide");
			$(paginationContainer).find("a:not(:eq("+i+"))").removeClass("activeSlide");
			
			//continue with auto slideshow
			slideshowFunction=setInterval(switchSlide,(slideInterval*1000));
		});
	
	} else {
		
		//still hide all elements by default if no pagination
		$(slide).each(function(i){
			//hide all slides
			$(this).css({position:"absolute",display:"none"});
			//except for the first slide
			if(i==0){
				$(this).fadeIn(transitionTime).addClass("currentSlide");//addClass("currentSlide").css("display","block");
			}
		});
		
	}
	
	//Slide switch function
	function switchSlide(){
		if(completedAutoSwitch==maxAutoSwitchAllowed-1){clearTimeout(slideshowFunction)};
		if(currentSlideIndex==(totalSlides)){currentSlideIndex=0};
		$(slide+":eq("+currentSlideIndex+")").fadeIn(transitionTime).addClass("currentSlide");
		$(slide).not(":eq("+currentSlideIndex+")").fadeOut(transitionTime).removeClass("currentSlide");
		if($(paginationContainer).size()>0){
			$(paginationContainer).find("a:eq("+currentSlideIndex+")").addClass("activeSlide");
			$(paginationContainer).find("a:not(:eq("+currentSlideIndex+"))").removeClass("activeSlide")
		}
		completedAutoSwitch++;
		currentSlideIndex++;
	}
	//initial auto slideshow interval call
	slideshowFunction=setInterval(switchSlide,(slideInterval*1000));
};