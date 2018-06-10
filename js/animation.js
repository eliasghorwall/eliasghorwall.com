$(function() {
	// Checking screen width for mobile/desktop
	if (window.matchMedia("(max-width: 1080px)").matches) {
		console.log("running mobile js");

		anime({
			targets: ".mobile-msg",
			delay: 200,
			easing: "easeOutExpo",
			translateX: ["-600px", "0px"],
			opacity: [0, 1],
		});
	} else {
		console.log("running desktop js");

		// LANDING PAGE //
		function landingPage() {
			anime({
				targets: "#my-logo",
				translateX: [-500, 0],
				easing: "easeOutExpo",
				delay: 800,
				opacity: 1,
			});

			anime({
				targets: ".contact-link",
				translateX: [500, 0],
				easing: "easeOutExpo",
				delay: 800,
				opacity: 1,
			});

			anime({
				targets: "#hor-deco-line",
				width: ["0", "312px"],
				easing: "easeOutExpo",
				delay: 1000,
				opacity: 1,
			});

			anime({
				targets: "#landing-bg",
				translateX: ["-3000px", "0"],
				easing: "easeOutExpo",
				duration: 1200,
				opacity: 0.15,
			});

			anime({
				targets: ".intro-wrapper p",
				translateX: ["-800px", "0"],
				easing: "easeOutExpo",
				delay: 350,
				opacity: 1
			});

			anime({
				targets: "#this-way",
				translateX: ["-60px", "0"],
				easing: "easeOutExpo",
				delay: 1700,
				opacity: 1,
				duration: 1800
			});

			anime({
				targets: "#project-link",
				translateX: ["530px", "0"],
				easing: "easeOutExpo",
				delay: 1300,
				opacity: 1,
				duration: 1800,
				complete: function(anim) {
					$("#project-link").addClass("transition-project-link");
				},
			});

			anime({
				targets: "#social-deco-line",
				width: ["0px", "73px"],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: 500,
			});

			anime({
				targets: "i",
				translateX: ["160px", "0px"],
				easing: "easeOutExpo",
				delay: 1000,
				opacity: 1,
			});
		};

		$(window).on("load", function() {
			landingPage();
		});

		// PROJECT VIEW //
		//Call landingPage() when back home is clicked
		$(".back-home").on("click", function() {
			$("#project-link").removeClass("transition-project-link");
			$("#this-way").css("opacity", "0");

			landingPage();
		});

		$("#project-link").on("click", function() {
			projectView();
		});

		function projectView() {
			anime({
				targets: ".back-home",
				translateX: [-500, 0],
				easing: "easeOutExpo",
				opacity: 1,
			});

			anime({
				targets: "#counter",
				translateX: [500, 0],
				easing: "easeOutExpo",
				opacity: 1,
			});

			anime({
				targets: ".project-img",
				height: ["0px", "75vh"],
				easing: "easeOutExpo",
				opacity: 1,
			});

			anime({
				targets: ".sidebar-text",
				translateY: ["500px", "0"],
				easing: "easeOutExpo",
				rotate: "-90deg",
				opacity: 1,
				delay: 500,
			});

			anime({
				targets: "#ver-deco-line",
				height: ["0", "312px"],
				easing: "easeOutExpo",
				delay: 300,
				opacity: 1,
			});

			anime({
				targets: ".content-right-wrapper h1",
				translateX: [-200, 0],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: 450,
				duration: 1500,
			});
		};

		//Call animation when clicking arrows
		$(".project-nav svg").on("click", function() {
			anime({
				targets: ".back-home",
				easing: "easeOutExpo",
				opacity: 1,
			});

			projectView();
		});

		//Call animation when project details lin is clicked
		$(".project-details-link").on("click", function() {
			projectView();
			projectDetails();
		});

		function projectDetails() {
			anime({
				targets: "header h1",
				translateX: [-500, 0],
				easing: "easeOutExpo",
				delay: 800,
				opacity: 1,
			});

			anime({
				targets: ".back-projects",
				translateX: [500, 0],
				easing: "easeOutExpo",
				delay: 800,
				opacity: 1,
			});

			anime({
				targets: ".project-details-text div",
				translateX: [-100, 0],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: function(el, i, l) {
	        return i * 250 + 850;
	      },
			});
		};

		//Call projectVIew() when back to project link is clicked
		$(".back-projects").on("click", function() {
			projectView();
		});

		// CONTACT PAGE //
		//Call animation when contact button is clicked
		$(".contact-link").on("click", function() {
			anime({
				targets: "#contact-bg",
				translateX: ["-3000px", "0"],
				easing: "easeOutExpo",
				duration: 1200,
				opacity: 0.15,
			});

			anime({
				targets: "#contact-header-line",
				translateX: [-500, 0],
				easing: "easeOutExpo",
				opacity: 1,
			});

			anime({
				targets: ".back-link",
				translateX: [500, 0],
				easing: "easeOutExpo",
				opacity: 1,
			});

			anime({
				targets: ".contact-headline h1, .contact-headline h3",
				translateX: [-200, 0],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: function(el, i, l) {
	        return i * 250 + 500;
	      },
			});

			anime({
				targets: "#email-deco-line",
				width: ["0px", "50px"],
				easing: "easeOutExpo",
				opacity: 1 ,
				delay: 1000,
			});

			anime({
				targets: "#email-wrapper a",
				opacity: [0, 1],
				delay: 1000,
				duration: 10000,
			});

			anime({
				targets: "#email-input",
				width: ["0px", "470px"],
				delay: 1200,
				opacity: [0, 1],
				easing: "easeOutExpo",
			});

			anime({
				targets: "#send-btn",
				delay: 1500,
				opacity: [0, 1],
				easing: "easeOutExpo",
			});

			anime({
				targets: "#mail-desc",
				translateX: [-200, 0],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: 1500,
			});

			anime({
				targets: ".social-icon-wrapper p",
				translateX: [-200, 0],
				easing: "easeOutExpo",
				opacity: [0, 1],
				delay: 2000,
			});

			anime({
				targets: "#quote",
				opacity: [0, 1],
				delay: 2000,
				duration: 15000,
			});
		});

		//Call landingPage() when back home is clicked
		$(".back-link").on("click", function() {
			$("#project-link").removeClass("transition-project-link");
			$("#this-way").css("opacity", "0");
			landingPage();
		});
	}
});
