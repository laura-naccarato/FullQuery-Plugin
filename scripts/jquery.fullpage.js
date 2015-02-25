$.fn.fullPage = function() {
var fullPage = {};
fullPage.sectionNames = [];
fullPage.pagePosition = 0;
	$(this).css({
		width: "100vw",
		height: "100vh"
	});
	$('.nextPage').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1000);
	    return false;
	});
	//This hides the scrollbar. Feel free to comment out if you would like the scrollbar to be present on your site
	document.body.style.overflow = 'hidden';

	//this function goes through all sections and adds the section names to an array.
	fullPage.getSectionNames = function(){
		var section = document.getElementsByTagName("section");
		for (var i = 0; i < section.length ; i++){
		fullPage.sectionNames.push(section[i].getAttribute("id"));
		fullPage
		}
	}

	//Any links on the page that have a class name of "next page" will be picked up. This function dynamically changes the HREF to link to the next anchor with the same class name.
	fullPage.buttonScroll = function(){
	var links = document.getElementsByClassName("nextPage");
	var up_arrow = $("<img>").attr({src: "images/up_arrow.svg", class: "arrow"});
	var down_arrow = $("<img>").attr({src: "images/down_arrow.svg", class: "arrow"});
		for (var i = 0 ; i < links.length ; i++){
			if ((i + 1) < links.length){
				$(links[i]).attr("href", "#" + fullPage.sectionNames[i + 1]).addClass("down_arrow");
				$(".down_arrow").append(down_arrow);
				

			} else {
				$(links[i]).attr("href", "#" + fullPage.sectionNames[0]).addClass("up_arrow");
				$(".up_arrow").append(up_arrow);
				
			}
				console.log(links[i]);
		}
	}
	fullPage.buttonsScroll = function(){}
	fullPage.getSectionNames();
	fullPage.buttonScroll();
}