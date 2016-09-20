$(function () {

    $("#para").click(function () {
        //$("#para").fadeOut(......;
        //$(ev.target) == this
        $(this).fadeOut('slow', 'linear');
    });

    $("h3")
        .css("text-decoration", "underline")
        .css("font-weight", "normal");
    
    $("ul").find("li:first-child")
        .css("color", "red");

});