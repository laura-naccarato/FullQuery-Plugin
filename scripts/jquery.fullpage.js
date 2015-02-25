$.fn.fullPage = function() {
var fullPage = {};
fullPage.sectionNames = [];
fullPage.pagePosition = 0;
	$(this).css({
		width: "100vw",
		height: "100vh"
	});

	document.body.style.overflow = 'hidden';
	fullPage.getSectionNames = function(){
		var section = document.getElementsByTagName("section");
		for (var i = 0; i < section.length ; i++){
		fullPage.sectionNames.push(section[i].getAttribute("id"));
		fullPage
		}
		// fullPage.getPagePosition();
		console.log(fullPage.sectionNames);
	}
// 	fullPage.getPagePosition = function(){
// 	for (var i = 0; i < fullPage.sectionNames.length ; i++){
// 		fullPage.pagePosition[i] = i;

// 	}
// 	console.log(fullPage.pagePosition);
// }
	// $(document).keydown(function(e) {
 //    if(e.which == 40) {

	
	// }
	// });
	fullPage.buttonScroll = function(){
	var links = document.getElementsByClassName("nextPage");
		for (var i = 0 ; i < links.length ; i++){
			if ((i + 1) < links.length){
				$(links[i]).attr("href", "#" + fullPage.sectionNames[i + 1]);
			} else {
				// console.log("ah");
				$(links[i]).attr("href", "#" + fullPage.sectionNames[0]);
			}

		}
			console.log(links);
	}
	fullPage.getSectionNames();
	fullPage.buttonScroll();
}