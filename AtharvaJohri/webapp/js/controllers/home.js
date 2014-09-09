$(document).ready(function(){
	setupHoverableOverlay();
	
	setupEvents();
});

function setupEvents(){
	$(window).resize(setupHoverableOverlay);
}

function setupHoverableOverlay(){
	var scale = 30;
	var hoverersSize = Math.floor($(window).width() / scale) + 1;
	$("#hoverable-overlay").empty();
	for (var i=0;i<scale;i++){
		for (var j=0;j<scale;j++){
			$("#hoverable-overlay").append("<div class='hoverer' style='width:"+hoverersSize+"px;height:"+hoverersSize+"px'></div>");
		}		
	}
	
	$("#hoverable-overlay .hoverer").on("mouseenter", function(){
		var randomBackgroundColor = "rgba("+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", 0.2)";
		$(this).css("background", randomBackgroundColor);
		var randomBackgroundColor = "rgba("+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", 0.2)";
		$(this).next().css("background", randomBackgroundColor);
		var randomBackgroundColor = "rgba("+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", "+Utils.getRandomInt(255)+", 0.2)";
		$(this).prev().css("background", randomBackgroundColor);
	});
	$("#hoverable-overlay .hoverer").on("mouseout", function(){
		$(this).css("background", "transparent");
	});
}