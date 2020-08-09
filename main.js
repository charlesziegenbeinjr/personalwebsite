// function pop_up(i) {
// 	if (i == 1) {
// 		alert("To learn more about my experience at Washington University in St. Louis as both an undergraduate student and researcher, please go to the 'Research and Experience' Page");
// 	}
// 	if (i == 2) {
// 		alert("To learn more about my experience at the Sloan Water Company as a Software Engineering Intern, please go to the 'Research and Experience' Page");
// 	}
// 	if (i == 3) {
// 		alert("To learn more about my experience at OSRAM GmbH as a Competitor Surveillance Intern , please go to the 'Research and Experience' Page");
// 	}
// }

// $(".backgroundimage").fadeTo(2000, .5);

// function animateInformation(jQuery) {
// 	if ($("#one").is(":visible"))
// 		$("#one").slideUp(1000);
// 	else
// 		$("#one").slideDown(1000);
// }

// $(document).ready(funtion() {
// 	if($("#one").is(":visible")) {
// 		$("#one").slideUp(1000);
// 	} else {
// 		$("#one").slideDown(1000);
// 	}
// });


// var top_level_div = document.getElementById('introduction')
// var divs = top_level_div.getElementsByTagName('div')
// var counter = 0
// var interval = window.setInterval(function () {
// 		if (divs[counter - 1]) {
// 			divs[counter - 1].style.display = "none";

// 		}
// 		divs[counter].style.display = "block";
// 		counter += 1;
// 		if (counter === divs.length) {
// 			window.clearInterval(interval);
// 		}
// }, 1000);


// $('html').addClass('js');

// $(function () {

// 	var timer = setInterval(showDiv, 3000);

// 	var counter = 0;

// 	function showDiv() {
// 		if (counter == 0) {
// 			counter++;
// 			return;
// 		}

// 		$('div', '#introduction')
// 			.stop()
// 			.hide()
// 			.filter(function () {
// 				return this.id.match('div' + counter);
// 			})
// 			.show('fast');
// 		counter == 3 ? counter = 0 : counter++;

// 	}

// });