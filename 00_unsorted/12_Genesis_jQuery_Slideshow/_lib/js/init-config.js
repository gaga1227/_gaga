/* ------------------------------------------------------------------------------ */
/* HTML Slideshow player init and config options */
/* ------------------------------------------------------------------------------ */
jQuery(window).load(function(){ //jQuery(window).load() must be used instead of jQuery(document).ready() because of Webkit compatibility

	// Launch the slider
	jQuery(".slideshow").sliderkit({
		cssprefix:'sliderkit', //(string) default is "sliderkit". The prefix to use on every CSS class names.
		start:0, //(int) default is 0. Set the start position. First is 0.
		auto:false, //(boolean) default is true. Activate auto-scrolling.
		autospeed:4000, //(int) default is 4000. Set the auto-scrolling speed (ms).
		mousewheel:false, //(boolean) default is false. Activate the mousewheel navigation.
		keyboard:false, //(boolean) default is false. Activate the keyboard navigation. Very basic for now (left/right arrows only).
		panelclick:true, //(boolean) default is false. Activate the 1-click navigation.
		circular:false, //(boolean) default is false. Activate the infinite nav scroll.
		shownavitems:6, //(int) default is 5. Defines how many thumbnails to display in the nav clip.
		navitemshover:false, //(boolean) default is false. If set the panels will slide on nav thumbnails mouseover (by default panels slide on click).
		navclipcenter:false, //(boolean) default is false. Defines if the nav clip must be center-aligned in the nav container.
		navcontinuous:false, // (v1.3) (boolean) default is false. If set to true, will make the carousel scroll continuously (use this option with a "linear" scrolleasing).
		navscrollatend:false, // (v1.5) (boolean) default is false. If set to 'true', will make the carousel scroll if a line first or last thumbnail is clicked.
		navfx:'sliding', //(string) default is "sliding". Define the carousel transition effect. Possible values: "sliding", "none"
		scroll:5, //(int) default is equal to 'shownavitems' option value. Defines how many nav thumbnails must be scrolled when nav buttons are clicked. Can't be greater than the 'shownavitems' option value.
		scrollspeed:600, //(int) default is 600. Set the nav scroll speed (ms).
		scrolleasing:'swing', //(string) default is "swing". Add an easing effect to the nav slide transition. Default jQuery easing functions are "swing" or "linear". Other effects can be added with the jQuery easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/.
		panelfx:'fading', //(string) default is "fading". Define the panels transition effect. Possible values: "fading", "sliding", "none"
		panelfxspeed:500, //(int) default is 700. Set the panel slide transition effect speed (ms).
		panelfxeasing:'swing', //(string) default is "swing". Add an easing effect to the panel slide transition. Default jQuery easing functions are "swing" or "linear". Other effects can be added with the jQuery easing plugin: http://gsgd.co.uk/sandbox/jquery/easing/
		panelfxfirst:'none', // (v1.5)(string) default is "none". Add a transition effect on the first displayed item. There are only 2 possible values for the moment: "fading" or "none".
		panelfxbefore:function(){}, // (function) default is function(){}. The function called before the panel transition start.
		panelfxafter:function(){}, // (function) default is function(){}. The function called when panel transition is over.
		panelbtnshover:false, // (boolean) default is false. If set to true, go buttons will fade in/out on panel mouseover.
		verticalnav:false, // (boolean) default is false. Set the nav clip direction to vertical.
		verticalslide:false, // (boolean) default is false. Set the panel sliding direction to vertical (only if "panelfx" is defined as "sliding").
		tabs:false, // (boolean) default is false. Required to build a tabs menu.
		freeheight:false, // (boolean) default is false. Use panels with no fixed height (in this case, 'panelfx' value can't be "sliding").
		fastchange:false, // (boolean) default is true. By default the user can slide to the next content even if the slider is still running. You can stop this behavior by setting the "fastchange" option to false.
		
		/*custom extended options*/
		hideControl:true // (boolean) default is Null(false). Use this to hide the control and nav UI.
	});

	// Get the sliderkit object data
	var gallery = $(".slideshow").data("sliderkit");

	/**
	 *	Extending > Custom caption animation
	 */
	var txtbox = $(".sliderkit-panel-textbox", gallery.domObj);
	var txtboxHeight = txtbox.css("height");

	// Before panel animation
	gallery.options.panelfxbefore = function(){
		var myTxtbox = $(".sliderkit-panel-textbox", gallery.currPanel).show();
		myTxtbox.css({"bottom" : "-"+txtboxHeight });
	};

	// After panel animation
	gallery.options.panelfxafter = function(){
		var myTxtbox = $(".sliderkit-panel-textbox", gallery.currPanel);
		$(".sliderkit-panel-textbox",gallery.currPanel).animate({bottom : "+=" + txtboxHeight}, 200);
		$(".sliderkit-panel-active").hover(function(){$(".sliderkit-panel-textbox",gallery.currPanel).fadeIn(100);}, function(){$(" .sliderkit-panel-textbox",gallery.currPanel).fadeOut(500);});
	};

	gallery.currPanel.removeClass( gallery.cssClassNames.cssActive );
	gallery.changeWithId(0);
	
	//hide the control nav UI if slideshow only has single image
	if (gallery.options.hideControl) {
		var $slideshow = $(".slideshow"),
			slideshowPanelsNum = $(".sliderkit-panel").length;		
		if (slideshowPanelsNum==1 && !$slideshow.hasClass('slideshowNoUI')) {
			$slideshow.addClass('slideshowNoUI');
		}
	}

});


/* ------------------------------------------------------------------------------ */
/* Fit all image contents to slider container */
/* ------------------------------------------------------------------------------ */

//run the main function when doc is ready
$(document).ready(function(){
	//Usage: fitImagesToContainer( slidePanelElement, panelWidth, panelHeight );
	fitImagesToContainer($('.sliderkit-panel'),640,400); 			
});

//main function
function fitImagesToContainer(containers,w,h){
	var $containers = containers; //get slide panels/containers
	$.each($containers, function(idx,ele){ //process each slide panel
		//cache panel and get panel width, height and AR
		var $panel = $(ele),
			panelW = w,
			panelH = h,
			panelAR = panelW/panelH,
			
		//find and cache <img> in panel and setup vars
			$img = $panel.find('img:first'), //only process first img
			imgW,nImgW, //img original width and target resize width
			imgH,nImgH, //img original height and target resize height
			imgAR, //img AR
			difH, //the height difference between resized img to the panel container
			posTop; //top gap value for verticle alignment
					
		// Make in memory copy of image to avoid css issues and get real image dimensions
		$('<img/>') //create image element in memory
			.attr('src', $img.attr('src')) //get actuall src from slide image
			.load(function() { processImg(this.width,this.height);}); //get and pass real domensions. Note: $(this).width() will not work for in memory images.
		
		//main process function
		function processImg(w,h) {
			//assign real dimensions and AR
			imgW = w;
			imgH = h;
			imgAR = imgW/imgH;
			
			if (imgW<panelW && imgH<panelH) { positionImg(); } //if img is smaller than container panel, only position it
			else { resizeImg(); } //if either side of the image is larger than container, resize it
			
			//image resize function
			function resizeImg(){
				//console.log('Slide '+idx+' is resized');
				if (imgAR>panelAR) { //wider/shorter than default
					nImgW = panelW; //match by width
					nImgH = Math.round(panelW/imgAR); 
					positionImg(); //positon image vertically
				} else if (imgAR==panelAR) { //same AR
					nImgW = panelW; //match width
					nImgH = panelH; //match height
					//logImgData();
				} else { //higher/narrower than default
					nImgW = Math.round(panelH*imgAR);
					nImgH = panelH; //match by height
					//logImgData();
				}
				$img //apply resized dimensions to image using CSS
					.css('width',nImgW)
					.css('height',nImgH);
					//.attr('width',nImgW)
					//.attr('height',nImgH)
			}							
			//image position function
			function positionImg(){
				//console.log('Slide '+idx+' is positioned');
				//calculate height difference	
				if (!nImgH) { difH = panelH - imgH; } 
				else { difH = panelH - nImgH; }
				//calculate top gap for centering
				posTop = Math.round(difH/2); 
				$img.css('padding-top',posTop); //apply top gap with CSS
				//logImgData();
			}
			//logging function
			function logImgData() {
				console.log('     panelAR: '+panelAR);
				console.log('     imgAR: '+imgAR);
				if (!nImgH) {
					console.log('     imgW: '+imgW+' => '+imgW);
					console.log('     imgH: '+imgH+' => '+imgH);
				} else {
					console.log('     imgW: '+imgW+' = '+nImgW);
					console.log('     imgH: '+imgH+' = '+nImgH);
				}
				console.log('     paddingTop: => '+posTop);
			}
		}
	});
}

/* ------------------------------------------------------------------------------ */
/* END */
/* ------------------------------------------------------------------------------ */			
