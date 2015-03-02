$.fn.fullPage = function(option) {
	//Settings namespace. Defaults are used if user passes no custom settings
	var settings = $.extend({
		animation: false,
		upArrow: "images/up_arrow.svg",
		downArrow: "images/down_arrow.svg",
		animationSpeed: "slow"
		}, option)
		console.log(settings);
	//variable namespace is fullPage
	var fullPage = {};
	fullPage.animate = function(){	
		$('html, body').animate({scrollTop:$("#" + fullPage.sectionNames[fullPage.userPosition]).position().top}, settings.animationSpeed);
	}
	fullPage.sectionNames = [];
	fullPage.userPosition = 0;
	fullPage.maxPosition;
	//"this" referring to the section name to be made max width/height
	$(this).css({
		width: "100vw",
		height: "100vh"
	});
	//the following function is for moving from section to section. userPosition is a global variable that tracks which sectionNames
	//the user is on, so that you can move through the links, or buttons, and not have any problems with going to the wrong section
	fullPage.nextPageClick = function(){	
		$('.nextPage').on("click", function(){
			fullPage.userPosition++
			if (fullPage.userPosition > fullPage.maxPosition){
				fullPage.userPosition = 0;
			}
				fullPage.animate();
		});
	}
	//This hides the scrollbar. Feel free to comment out if you would like the scrollbar to be present on your site
	document.body.style.overflow = 'hidden';

	//this function goes through all sections and adds the section names to an array called fullpage.sectionNames.
	fullPage.getSectionNames = function(){
		var section = document.getElementsByTagName("section");
		for (var i = 0; i < section.length ; i++){
		fullPage.sectionNames.push(section[i].getAttribute("id"));
		fullPage.maxPosition = (fullPage.sectionNames.length -1);

		}
	}

	

	//Any links on the page that have a class name of "next page" will be scanned. This function dynamically changes the HREF to link to the next 
	//anchor with the same class name.
	fullPage.buttonScroll = function(){
	var links = document.getElementsByClassName("nextPage");
	var up_arrow = $("<img>").attr({src: settings.upArrow, class: "arrow"});
	var down_arrow = $("<img>").attr({src: settings.downArrow, class: "arrow"});
	//	The following logic is responsible for setting the link anchors. Also, the arrows are assigned based on position. a
		for (var i = 0 ; i < links.length ; i++){
			if ((i + 1) < links.length){
				$(links[i]).attr("href", "#" + fullPage.sectionNames[i + 1]).addClass("down_arrow");
				$(".down_arrow").append(down_arrow);
			} else {
				// console.log(fullPage.UserPosition)
				$(links[i]).attr("href", "#" + fullPage.sectionNames[0]).addClass("up_arrow");
				$(".up_arrow").append(up_arrow);
			}
			if (settings.animation === true){
				$(".arrow").addClass("animate");
			}	
		}
	}
	//This function is the logic for navigation with the keyboard. Up/down arrows move the page accordingly
	fullPage.keyScroll = function(){
		$(document).on("keydown", function(e) {
		 	if (e.keyCode === 40 || e.keyCode === 9 || e.keyCode === 34 || e.keyCode === 32) {
		 		console.log("userposition: " + fullPage.userPosition);
	 			if (fullPage.UserPosition < 0 ) {
	 				fullPage.userPosition = 0;
	 				console.log("down arrow less than 0 usserpos: " + fullPage.userPosition);
	 				// console.log("userpos: set to 0");
	 			} else if ((fullPage.userPosition) >= fullPage.maxPosition) {
	 				fullPage.userPosition = 0;
	 				fullPage.animate();
	 				console.log("down arrow user position reached max userpos: set to 0");
	 			} else {
	 				console.log("down arrow else");
	 				fullPage.userPosition++
	 				fullPage.animate();
	 			}

		 	} else if (e.keyCode === 38 || e.keyCode === 33 ){
				if (fullPage.userPosition > 0){
	 				fullPage.userPosition--;
	 				fullPage.animate();

	 			} else {
	 				console.log("up arrow position greater")
	 				fullPage.userPosition = 0;
	 				fullPage.animate();
	 			}
		 	}
		});
	}
	
	fullPage.getSectionNames();
	fullPage.buttonScroll();
	fullPage.nextPageClick();
	fullPage.keyScroll();
};