/* ------------------------------------------------------------------------------ */
/* initVideos */
/* ------------------------------------------------------------------------------ */
function initVideos(vidCls) {
	//vars
	var videos = {'count':0},//collection obj
		videoCls = vidCls || '.videoContainer';//get video container classes or go default
	if (!$(videoCls).length) return videos;//check video container and end if none found
		
	//define vars
	var $videoContainers = $('.videoContainer'),
		
		//pause functions
		pauseVideo = function(vidObj){
			if (vidObj.solution.tech == 'html5') {
				vidObj.player.pause();
			} else if (vidObj.solution.tech == 'flash') {
				if(swfReady) vidObj.player.pauseVideo();
				//console.log('Paused: [video'+vidObj.objid+'] (Flash)');	//put here due to flash pauseVideo() has no callback
			}
		},
		pauseOtherVideos = function(id){
			var count = Number(videos.count);
			for (var i=1; i<=count; i++) {
				if (i+'' != id) {
					//console.log('Try pausing others: [video'+i+']');
					pauseVideo(videos['video'+(i+'')]);
				}
			}
		},
		pauseAllVideos = videos.pauseAll = function(){
			//console.log('Try pausing all videos');
			var count = Number(videos.count);
			for (var i=1; i<=count; i++) {
				pauseVideo(videos['video'+(i+'')]);
			}
			return videos;
		},
		
		//tech solution functions
		getFlashFormat = function(vidObj){
			var format = '';
			if (vidObj.src.flash.indexOf('flv')!=-1) { format = 'flv'; } 
			else if (vidObj.src.flash.indexOf('f4v')!=-1) {	format = 'f4v';	}
			else if (vidObj.src.flash.indexOf('mp4')!=-1) {	format = 'mp4';	} 
			else { format = undefined; }
			return format;
		},
		noSolution = function(id){//function for no playback solution updates
			//console.log('Video'+id+': No Playback Solution!');		
		},
		updateSolution = function(vidObj){
			if (Modernizr.video.h264 && vidObj.src.mp4) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'mp4'; } 
			else if (Modernizr.video.ogg && vidObj.src.ogg) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'ogg'; }
			else if (Modernizr.video.webm && vidObj.src.webm) { vidObj.solution.tech = 'html5'; vidObj.solution.format = 'webm'; }
			else if (vidObj.src.flash) { vidObj.solution.tech = 'flash'; vidObj.solution.format = getFlashFormat(vidObj); }
			else { vidObj.solution.tech = vidObj.solution.format = undefined; }
		},
		
		//group functions	
		getGroupSiblings = function($vid) {//get group siblings
			var arr = [];
			$.each($vid.siblings('.videoContainer'),function(idx,ele){
				var index = $videoContainers.index($(ele)) + 1;
				arr.push(videos['video'+index]);
			});
			return arr;
		},
		initGroup = function(vidObj,odr) {//init group, check obj and hide if not the specified/1st one
			var order = odr || 1;
			if (vidObj.groupOrder != order) {
				pauseVideo(vidObj);//pause
				vidObj.container
					//.hide() manipulating display property on video elements causes troubles in webkit
					.removeClass('isCurrent')
					.addClass('notCurrent');
				vidObj.triggerBtn
					.parent('li')
					.removeClass('isCurrent')
					.addClass('notCurrent');
			} else {
				vidObj.container
					//.show() manipulating display property on video elements causes troubles in webkit
					.removeClass('notCurrent')
					.addClass('isCurrent');
				vidObj.triggerBtn
					.parent('li')
					.removeClass('notCurrent')
					.addClass('isCurrent');	
			}
		},
		updateGroup = function(vidObj){//update group, hide others except the specified one
			for(var i=0; i<vidObj.groupSiblings.length; i++){//hide siblings
				initGroup(vidObj.groupSiblings[i], vidObj.groupOrder);
			}
			initGroup(vidObj, vidObj.groupOrder);//show self
		},
		initTriggerBtn = function(vidObj){
			vidObj.triggerBtn.bind('click',function(e){
				e.preventDefault();
				vidObj.groupSiblings = getGroupSiblings(vidObj.container);
				updateGroup(vidObj);
			});
		};
	
	//process btnVideo instances
	$.each($videoContainers,function(idx,ele){
		//vars
		var $ele = $(ele),//container
			$multiVidContainer = $ele.parent('.multiVideoContainer'),//group container
			$triggerBtns = $multiVidContainer.length ? $multiVidContainer.find('.btnMultiVideo') : undefined,//trigger button
			groupID = $multiVidContainer.length ? $multiVidContainer.attr('id') : undefined,//group id
			uuid = $ele.attr('id').replace('video','').replace('Container',''),//uuid
			flashvars = $ele.find('object').attr('flashvars'),//flashvars
			vidID = (idx+1)+'',//order from current page
			vidObj = videos['video'+vidID] = {//instance obj
				'container':$ele,
				'id':$ele.attr('id'),
				'objid':idx+1,
				'uuid':uuid,
				'group':groupID ? groupID.replace('videoGroup','') : null,
				'groupCount':groupID ? $multiVidContainer.find('.videoContainer').length : null,
				'groupOrder':groupID ? ($multiVidContainer.find('.videoContainer').index(ele))+1 : null,
				'groupSiblings':groupID ? [] : null,
				'triggerBtn':groupID ? $('#btnVideo'+uuid) : null,
				'solution':{'tech':'','format':''},
				'player':{},
				'src':{}
			};
				
		//updating videoObj sources from supplied video sources
		vidObj.src.mp4 = $ele.find('source[type="video/mp4"]').attr('src');
		vidObj.src.ogg = $ele.find('source[type="video/ogg"]').attr('src');
		vidObj.src.webm = $ele.find('source[type="video/webm"]').attr('src');
		vidObj.src.flash = flashvars.substring(flashvars.indexOf('stream=')+7);
		if (vidObj.src.flash.indexOf('flv')!=-1 || vidObj.src.flash.indexOf('f4v')!=-1 || vidObj.src.flash.indexOf('mp4')!=-1) {
			if (vidObj.src.flash.indexOf('&')!=-1) {//check if has additional vars after stream
				vidObj.src.flash = vidObj.src.flash.replace(vidObj.src.flash.substring(vidObj.src.flash.indexOf('&')),'');//trim additional vars after stream
			}
		} else {
			vidObj.src.flash = undefined;
		}
				
		//-------------------------------------------------------------------------------------
		//function - initVideo
		//-------------------------------------------------------------------------------------
		function initVideo(){
			//getting container
			var $vidContainer = $('#'+vidObj.id),
				tech = vidObj.solution.tech;
			if (tech == 'html5') { //html5 only
				$vidContainer.find('.videoFlash').remove();
				//init videoJS and assign object reference
				vidObj.player = _V_($vidContainer.find('.videoHTML5').attr('id'), {}, function(){ 
					//console.log('Video'+vidID+': VideoJS Called'); 
				});
				//videoJS obj ready
				vidObj.player.ready(function(){ 
					//console.log('Video'+vidID+': VideoJS Player Ready')
					//attach player events
					vidObj.player.addEvent('play',function(){
						pauseOtherVideos(vidID);	
					});
					vidObj.player.addEvent('pause',function(){
						//console.log('Paused: [video'+vidID+']');
					});
				});
			}
			else if (tech == 'flash') { //flash only
				$vidContainer.find('.videoHTML5').remove();
				vidObj.player = $vidContainer.find('object')[0];
			}
			else { //no solution
				$vidContainer.remove();
				vidObj.player = undefined;
			}
			
			//updating group if in a group
			if (groupID) {
				initGroup(vidObj);
				initTriggerBtn(vidObj);
			}
			
		}
		
		//updating videoObj
		updateSolution(vidObj);
				
		//init current video
		initVideo();
		
		//adding instance to videos.count
		videos.count++;
	});
	
	//console.log('Total Videos Found: '+videos.count,videos);
	return videos;//return videos collection obj
}
/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
var Videos,
	init = function() {	
		Videos = new initVideos();
	}
/* DOM.ready */
$(document).ready(function(){ 
	init();
});