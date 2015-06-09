function megamenu(navBtnContainer,navBtnClassName,navBtnActiveClass,menuContainer,menuClassName,btnClose,speed) {

	/* ------------------------------------------------------------------------------ */
	/* VARS */
	/* ------------------------------------------------------------------------------ */
	//check if all required variables are set
	var allReady = false;
	if (navBtnContainer && navBtnClassName && navBtnActiveClass && menuContainer && menuClassName && btnClose && speed) {allReady = true;}
	
	//setup vars
	var navBtnArr = $(navBtnContainer).find(navBtnClassName); //navi buttons array
	var menuArr = $(menuContainer).find(menuClassName); //menu array
	var closeBtnArr = menuArr.find(btnClose); //find all btnClose
	var activeMenuID = 0; //current active menu id, 0 for no active menu
	var totalMenus = navBtnArr.length; //get total no. of menus from menuArr 
	var animSpeed; if (speed) {animSpeed = speed;} else {animSpeed = 'fast';} //set animation speed
		
	//only execute when all vars are supplied
	if (allReady) {
		/* ------------------------------------------------------------------------------ */
		/* INIT */
		/* ------------------------------------------------------------------------------ */
		for (i=0;i<totalMenus;i++) { $(menuArr[i]).css('display','none'); } //hide all menu content 
		
		/* ------------------------------------------------------------------------------ */
		/* INTERACTIONS */
		/* ------------------------------------------------------------------------------ */
		
		//set navi button click event
		$.each(navBtnArr, function(i) {
			
			var $navBtnTarget = $(navBtnArr[i]); //iterating navi button
			var $menuTarget = $(menuArr[i]); //iterating menu
			
			$navBtnTarget.click(function(e) {
				//set menu animation
				if (activeMenuID == 0 || activeMenuID == i+1) {
					$menuTarget.slideToggle(speed); //add sliding animation if open or close menu
				} else {
					$menuTarget.toggle(); //no animation when switching between menus
				}
				//set view states
				for (j=0;j<totalMenus;j++) {
					if (j!=i) {
						$(menuArr[j]).hide(); //hide all menus except for the current one
						$(navBtnArr[j]).removeClass(navBtnActiveClass); //remove active class for all navi buttons except for the current one
					} else {
						$(navBtnArr[j]).toggleClass(navBtnActiveClass); //show active class for current navi button
					}
				}
				//set activeMenuID
				if (activeMenuID == i+1) {
					activeMenuID = 0; //if clicked again on an active menu, reset activeMenuID and go to the href URL
				} else {
					activeMenuID = i+1; //if switch to other menus, set new activeMenuID and prevent going to href URL
					return false;
				}
			});
		});
		
		//set close button click event
		if (closeBtnArr.length) {
			$(closeBtnArr).click(function() {
				//console.log('btnClose clicked');
				closeAll();
			});
		}
		
		/* ------------------------------------------------------------------------------ */
		/* 	CLICKOUT */
		/* ------------------------------------------------------------------------------ */
		var $menuContainer = $(menuContainer);
		
		$('html').click(function(e) {
			var $tgt = e.target; //set clicked target
			//console.log('isPartofMenu: '+$menuContainer.has($tgt).length);
			if (!$menuContainer.has($tgt).length) closeAll(); //closeAll() if clicked target is not part of the menu container
		});
		
		/* ------------------------------------------------------------------------------ */
		/* FUNCTIONS */
		/* ------------------------------------------------------------------------------ */
		function closeAll() {
			if (activeMenuID != 0) {
				//console.log('closeAll');
				for (i=0;i<totalMenus;i++) {
					if ($(menuArr[i]).css('display')=='block') $(menuArr[i]).slideToggle(speed); //close active menu
					$(navBtnArr[i]).removeClass(navBtnActiveClass); //remove active class for navi buttons
				}
				activeMenuID = 0; //reset activeMenuID
			}
		}
	} else {
		var alertmsg='';
		alertmsg+='Please make sure all function variables are supplied and in order: \n\n';
		alertmsg+='1. id name for nav button container \n';
		alertmsg+='2. class name for nav buttons \n';
		alertmsg+='3. class name for active nav button \n';
		alertmsg+='4. id name for menu container \n';
		alertmsg+='5. class name for menu items \n';
		alertmsg+='6. class name for menu close btn \n';
		alertmsg+='7. animation speed: fast, slow, or milliseconds \n';
		alert(alertmsg);
	}

}