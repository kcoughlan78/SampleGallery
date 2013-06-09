//reference http://www.alistapart.com/articles/alternate/
//distributed and explained by Frank McArdle 19th Nov 2012

var defaultStyleLink, otherStyleLink;
	
	defaultStyleLink = document.getElementById("Lightroom");
	otherStyleLink = document.getElementById("Darkroom");
	
function setActiveStyleSheet (styleId) {
			
		var i = 0;
		var linkItem, linkArray;
		
		linkArray = document.getElementsByTagName("link");
		
		for (var i = 0; i<linkArray.length; i++) {
			linkItem = linkArray[i];
		
			if (linkItem.getAttribute("rel").indexOf("style") != -1 && 
				linkItem.getAttribute("title")) {
				linkItem.disabled = true;
		
				if (linkItem.getAttribute("title")===styleId) {
				linkItem.disabled = false;
				}
			}
		}
	}

function getActiveStyleSheet () {

	var i = 0;
	var linkItem, linkArray;

	linkArray = document.getElementsByTagName("link");

	for ( i = 0; 1 < linkArray.length; i++) {

		linkItem = linkArray[i];

		if (linkItem.getAttribute("rel").indexOf("style") != -1 && 
			linkItem.getAttribute("title") && !linkItem.disabled) {
			return linkItem.getAttribute("title");
		}
	}
	return null;
}

function createCookie(name,value,days) {

	if (days) {

		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		var expires = "; expires" + date.toGMTString();
	} else {
		
		expires = "";
	}	

	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {

	var nameEquals = name + "=";
	var cookieArray = document.cookie.split(';');

	for ( var i=0; i < cookieArray.length; i++) {
		var c = cookieArray[i];

		while (c.charAt(0) == ' ') {
			c = c.substring(1, c.length);
		}

		if (c.indexOf(nameEquals) === 0) {
			return c.substring(nameEquals.length, c.length);
		}
	}
	return null;
}

defaultStyleLink.onclick = function() {
	setActiveStyleSheet(this.id);
};
		
		
otherStyleLink.onclick = function()  {
	setActiveStyleSheet(this.id);
};

window.onload = function() {
	var cookie = readCookie("style");
	var title;

	if (cookie) {
		title = cookie;
		setActiveStyleSheet (title);
	}
}

window.onunload = function () {
	var title = getActiveStyleSheet();
	createCookie("style", title, 30);
}
		
		
		