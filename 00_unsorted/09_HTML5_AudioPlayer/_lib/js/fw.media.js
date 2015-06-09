/* ------------------------------------------------------------------------------ */
/* initStaticAudios */
/* ------------------------------------------------------------------------------ */
function initStaticAudios(audCls) {
	//vars
	var audios = {'count':0},//collection obj
		audioCls = audCls || '.audioContainer';//get audio container classes or go default
	if (!$(audioCls).length) return audios;//check audio container and end if none found
		
	//define vars
	var $audioContainers = $(audioCls),
		
		//playback functions
		playAudio = function(audObj){
			audObj.player.play();
		},
		pauseAudio = function(audObj){
			audObj.player.pause();
		},
		/* pauseOtherAudios = function(id){
			
		}, */
		pauseAllAudios = audios.pauseAll = function(){
			for ( var i=0; i<mejs.players.length; i++ ) {
				mejs.players[i].pause();
			}
		},
		
		//no playback solution updates
		noSolution = function(id){
			console.log('Audio'+id+': No Playback Solution!');		
		};
	
	//update audios obj
	audios.defaultOpts = {
		audioWidth: 				640, 	// width of audio player
		audioHeight: 				40, 	// height of audio player
		startVolume: 				0.8, 	// initial volume when the player starts
		loop: 						false, 	// useful for <audio> player loops
		enableAutosize: 			true, 	// enables Flash and Silverlight to resize to content size
		features: 					['playpause','current','progress','duration','volume'], // the order of controls on the control bar (and other plugins)
		iPadUseNativeControls: 		false, 	// force iPad's native controls=
		iPhoneUseNativeControls: 	false, 	// force iPhone's native controls 
		AndroidUseNativeControls: 	false, 	// force Android's native controls
		alwaysShowHours: 			false, 	// forces the hour marker (##:00:00)
		showTimecodeFrameCount: 	false, 	// show framecount in timecode (##:00:00:00)
		framesPerSecond: 			25, 	// used when showTimecodeFrameCount is set to true
		enableKeyboard: 			true, 	// turns keyboard support on and off for this instance
		pauseOtherPlayers: 			true, 	// when this player starts, it will pause other players
		keyActions: 				[] 		// array of keyboard commands
	};
	
	//apply custom or default options for mejs
	if ( audios.customOpts ) { 
		audios.opts = $.extend( audios.defaultOpts, audios.customOpts ); 
	} else {
		audios.opts = audios.defaultOpts;	
	}
	
	//init mejs
	$audioContainers.find('audio.audioHTML5').mediaelementplayer( audios.opts );
	
	//process instances
	$.each( $audioContainers, function(idx,ele){
		
		//vars
		var $ele = $(ele),//audio container
			uuid = $ele.attr('id').replace('audio','').replace('Container',''),//uuid
			audID = (idx+1)+'',//order from current page
			audObj = audios['audio'+audID] = {//instance obj
				'container':$ele,
				'id':$ele.attr('id'),
				'objid':idx+1,
				'uuid':uuid,
				//'solution':{'tech':'','format':''},
				//'player':{},
				'src':{}
			};
				
		//updating audioObj sources from supplied audio sources
		audObj.src.mp3 = $ele.find('source[type="audio/mp3"]').attr('src');
		audObj.src.oga = $ele.find('source[type="audio/ogg"]').attr('src');
		
		//update audioObj player info
		audObj.player = mejs.players[ Number(audID)-1 ];
		
		//adding instance to audios.count
		audios.count++;
	});
	
	//console.log('Total Audios Found: '+audios.count,audios);
	return audios;//return audios collection obj
}