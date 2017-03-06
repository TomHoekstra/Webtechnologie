$(document).on("contextmenu", "body", function (e) {
    event.preventDefault();

    $(".contextmenu").finish().toggle(100).css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });

});

$(document).bind("mousedown", function (e) {

    // If the clicked element is not the menu
    if (!$(e.target).parents(".contextmenu").length > 0) {

        // Hide it
        $(".contextmenu").hide(100);
    }
});


// If the menu element is clicked
$(".contextmenu li").click(function () {

    // This is the triggered action name
    switch ($(this).attr("data-action")) {

        // A case for each action. Your actions here
        case "first": alert("first"); break;
        case "second": alert("second"); break;
        case "third": alert("third"); break;
    }

    // Hide it AFTER the action was triggered
    $(".contextmenu").hide(100);
});


