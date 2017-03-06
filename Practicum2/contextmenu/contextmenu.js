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
                case "normal_font":
                    $("body").css("font-weight", "normal");
                    $("body").css("font-style", "normal");
                    break;
                case "bold_font":
                    $("body").css("font-weight", "bold");
                    $("body").css("font-style", "normal");
                    break;
                case "italic_font":
                    $("body").css("font-style", "italic");
                    $("body").css("font-weight", "normal");
                    break;
                case "normal_colors":
                    setNormalColor("#02529C", "#DC1E35");
                    break;
                case "inverted_colors":
                    setNormalColor("#DC1E35", "#02529C");
                    alert("Its ugly though!");
                    break;
            }
        }
        else {
            return;
        }
    }

    $(".contextmenu").hide(100);
});

function setNormalColor(color1, color2) {
    $("body").css("background-color", color1);
    $("h1").css("color", color2);
    $("h2").css("color", color1);
    $("h3").css("color", color2);
    $("#panel").css("border-color", color2);
    $("#panel-header").css("border-color", color2);
    $("footer").css("background-color", color2);
    $("#navbar").css("background-color", color2);
    $("#active-nav").css("background-color", color1);
}