/* ------------------------------------------------------------------------------ */
/* functions */
/* ------------------------------------------------------------------------------ */
function downloadAPK() {
	window.location.assign('https://j.sbstatic.com.au/android/sportsbet.apk');
}

function toggleModel(toShow) {
	var $model = $('#container-modal');
	var shownClass = 'shown';

	if (!$model.length) {
		return 'No modal is found!';
	}

	if (toShow) {
		// to show
		$model.css('z-index', '999');
		$model.addClass(shownClass);
		// dismiss action
		var $btnDismiss = $model.find('.btnDismiss');
		$btnDismiss.one('click', function(e) {
			e.preventDefault();
			toggleModel(false);
		});
	} else {
		// to hide
		$model.removeClass(shownClass);
		// move down in visual stack after css transition
		$model.one(Platform.transEndEventName, function(e) {
			$model.css('z-index', '-999');
		});
	}
}

function initDownloadBtn() {
	var $btnDownloads = $('.btnDownload');

	if (!$btnDownloads.length) {
		return 'No download buttons are found!';
	}

	$btnDownloads.on('click', function(e) {
		e.preventDefault();
		downloadAPK();
		toggleModel(true);
		$.scrollTo( $('#section-install'), 600, {axis:'y'} );
	});
}

function initDownloadAPKBtn() {
	var $btnDownloadAPK = $('.btnDownloadAPK');

	if (!$btnDownloadAPK.length) {
		return 'No download APK buttons are found!';
	}

	$btnDownloadAPK.on('click', function(e) {
		e.preventDefault();
		downloadAPK();
	});
}

/* ------------------------------------------------------------------------------ */
/* init */
/* ------------------------------------------------------------------------------ */
function init() {
	initDownloadBtn();
	initDownloadAPKBtn();
	initBtnScroll();
	initBtnToggleContent();
}

/* DOM Ready */
$(document).ready(function(){
	console.log('Page Ready');
	Platform.addDOMClass();
	init();
});
