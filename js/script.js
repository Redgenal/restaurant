$(function () {
    $(".navbar-toggle").blur(function (event) {
        let screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#onCollaps").collapse('hide');
        }     
    });
    $(".navbar-toggle").click(function (event) {
        $(event.target).focus();
    });
});