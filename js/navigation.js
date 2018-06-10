$(function() {
	// LANDING PAGE - CONTACT LINK
	$(".contact-link").on("click", function() {
		$("#landing-page").addClass("hide");
		$(".contact-page").removeClass("hide");
	});

	// CONTACT PAGE - BACK HOME LINK
	$(".back-link").on("click", function() {
		$("#landing-page").removeClass("hide");
		$(".contact-page").addClass("hide");
	});

	// LANDING PAGE - PROJECT LINK
	$("#project-link").on("click", function() {
		$("#landing-page").addClass("hide");
		$("#swagatam-project").removeClass("hide");
	});

	// PROJECT VIEW - BACK HOME LINK
	$(".back-home").on("click", function() {
		$("#landing-page").removeClass("hide");
		$(".project-1").addClass("hide");
	});

	// # # # SWAGATAM # # # //
	// PROJECT VIEW - DETAILS LINK
	$("#swagatam-details-link").on("click", function() {
		console.log("swagatam details link");
		$("#swagatam-project").addClass("hide");
		$("#swagatam-details").removeClass("hide");
	});

	// PROJECT DETAILS - BACK TO PROJECTS LINK
	$("#swagatam-details-back").on("click", function() {
		$(".project-1").removeClass("hide");
		$(".project-1-details").addClass("hide");
	});

	// PROJECT NAV - SWAGATAM TO REICHARDT
	$(".swagatam-right").on("click", function() {
		$("#reichardt-project").removeClass("hide");
		$("#swagatam-project").addClass("hide");
	});

	// # # # REICHARDT # # # //
	// PROJECT NAV - REICHARDT TO SWAGATAM
	$(".reichardt-left").on("click", function() {
		$("#reichardt-project").addClass("hide");
		$("#swagatam-project").removeClass("hide");
	});

	// PROJECT VIEW - DETAILS LINK
	$("#reichardt-details-link").on("click", function() {
		console.log("reichardt details link");
		$("#reichardt-project").addClass("hide");
		$("#reichardt-details").removeClass("hide");
	});

	// PROJECT DETAILS - REICHARDT BACK TO PROJECTS
	$("#reichardt-details-back").on("click", function() {
		$("#reichardt-details").addClass("hide");
		$("#reichardt-project").removeClass("hide");
	});
});
