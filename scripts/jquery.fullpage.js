$.fn.fullPage = function() {
var fullPage = {};
fullPage.sectionNames = [];
	$(this).css({
		width: "100vw",
		height: "100vh"
	});

	// document.body.style.overflow = 'hidden';
	fullPage.getSectionNames = function(){
		var section = document.getElementsByTagName("section");
		for (var i = 0; i < section.length ; i++){
		fullPage.sectionNames.push(section[i].getAttribute("id"));
		}
		console.log(fullPage.sectionNames);
	}
	fullPage.getSectionNames();
}