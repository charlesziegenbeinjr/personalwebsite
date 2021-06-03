var stamp0 = 1;
var stamp1 = 1;
var stamp2 = 1;
var stamp3 = 1;
var stamp4 = 1;
var stamp5 = 1;
var stamp6 = 1;
var stamp7 = 1;

ScrollReveal().reveal('#skills-header', { 
    delay: 150,
    duration: 2000,
    easeing: 'ease-in',
    mobile: false
});

ScrollReveal().reveal('.one', { 
    delay: 350,
    duration: 2000,
    easeing: 'ease-in',
    mobile: false
});


ScrollReveal().reveal('.two', { 
    delay: 450,
    duration: 2000,
    easeing: 'ease-in',
    mobile: false
});

ScrollReveal().reveal('.three', { 
    delay: 550,
    duration: 2000,
    easeing: 'ease-in',
    mobile: false 
});

ScrollReveal().reveal('.four', { 
    delay: 650,
    duration: 2000,
    easeing: 'ease-in',
    mobile: false
});

ScrollReveal().reveal('.reveal', {
    delay: 200
});

ScrollReveal().reveal('#arrow', {
    delay: 200
});

var path = window.location.pathname;
var page = path.split("/").pop();


if (page == "aboutme.html")
{
    document.getElementById("cne-info").addEventListener("click", function () {

        if (stamp0 == 1) {
            $("#cne-desc").show("fast");
            document.getElementById("cne-info").innerHTML = "Hide Information"
            stamp0 = 0;
        } else {
            $("#cne-desc").hide("fast");
            document.getElementById("cne-info").innerHTML = "Show Information"
            stamp0 = 1;
        }
    }, false);

    document.getElementById("ng-info").addEventListener("click", function () {

        if (stamp1 == 1) {
            $("#ng-desc").show("fast");
            document.getElementById("ng-info").innerHTML = "Hide Information"
            stamp1 = 0;
        } else {
            $("#ng-desc").hide("fast");
            document.getElementById("ng-info").innerHTML = "Show Information"
            stamp1 = 1;
        }
    }, false);

    document.getElementById("sloan-info").addEventListener("click", function () {

        if (stamp2 == 1) {
            $("#sloan-desc").show("fast");
            document.getElementById("sloan-info").innerHTML = "Hide Information"
            stamp2 = 0;
        } else {
            $("#sloan-desc").hide("fast");
            document.getElementById("sloan-info").innerHTML = "Show Information"
            stamp2 = 1;
        }

    }, false);

    document.getElementById("osram-info").addEventListener("click", function () {
        if (stamp4 == 1) {
            $("#osram-desc").show("fast");
            document.getElementById("osram-info").innerHTML = "Hide Information"
            stamp4 = 0;
        } else {
            $("#osram-desc").hide("fast");
            document.getElementById("osram-info").innerHTML = "Show Information"
            stamp4 = 1;
        }

    }, false);

    document.getElementById("peraton-info").addEventListener("click", function () {

        if (stamp6 == 1) {
            $("#peraton-desc").show("fast");
            document.getElementById("peraton-info").innerHTML = "Hide Information"
            stamp6 = 0;
        } else {
            $("#peraton-desc").hide("fast");
            document.getElementById("peraton-info").innerHTML = "Show Information"
            stamp6 = 1;
        }
    }, false);
}

if (page == "academia.html")
{
    document.getElementById("washu-info").addEventListener("click", function () {
        if (stamp3 == 1) {
            $("#washu-desc").show("fast");
            document.getElementById("washu-info").innerHTML = "Hide Information"
            stamp3 = 0;
        } else {
            $("#washu-desc").hide("fast");
            document.getElementById("washu-info").innerHTML = "Show Information"
            stamp3 = 1;
        }

    }, false);

    // document.getElementById("covid-info").addEventListener("click", function () {

    //     if (stamp5 == 1) {
    //         $("#covid-desc").show("fast");
    //         document.getElementById("covid-info").innerHTML = "Hide Information"
    //         stamp5 = 0;
    //     } else {
    //         $("#covid-desc").hide("fast");
    //         document.getElementById("covid-info").innerHTML = "Show Information"
    //         stamp5 = 1;
    //     }

    // }, false);

    document.getElementById("michigan-info").addEventListener("click", function () {

        if (stamp7 == 1) {
            $("#michigan-desc").show("fast");
            document.getElementById("michigan-info").innerHTML = "Hide Information"
            stamp7 = 0;
        } else {
            $("#michigan-desc").hide("fast");
            document.getElementById("michigan-info").innerHTML = "Show Information"
            stamp7 = 1;
        }

    }, false);
}