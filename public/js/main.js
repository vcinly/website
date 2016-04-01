$(document).ready(function () {
    /* $("#includedContent").load("html/nav.html"); */
    $.get("html/nav.html", function(data) {
        $("#includedContent").html(data);
    });
    setTimeout( function(){
        $("#nav").ferroMenu({
            position: "right-top",
            rotation: 720
        });
        $("#includedContent").removeClass("disabled");
    }, 1000)
});
