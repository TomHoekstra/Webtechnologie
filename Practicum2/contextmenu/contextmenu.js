$(document).on("contextmenu", "body", function (e) {
    event.preventDefault();

    $(".contextmenu").finish().toggle(100).css({
        top: event.pageY + "px",
        left: event.pageX + "px"
    });

});

$(document).bind("mousedown", function (e) {

    if (!$(e.target).parents(".contextmenu").length == 0) {

        if (e.button == 0) {
            switch ($(e.target)[0].id) {
                case "normal":
                    $("body").css("font-weight", "normal");
                    $("body").css("font-style", "normal");
                    break;
                case "bold":
                    $("body").css("font-weight", "bold");
                    $("body").css("font-style", "normal");
                    break;
                case "italic":
                    $("body").css("font-style", "italic");
                    $("body").css("font-weight", "normal");
                    break;
            }
        }
        else {
            return;
        }

    }

    $(".contextmenu").hide(100);
});



