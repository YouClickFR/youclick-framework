$(document).ready(() => {
    $("body").prepend("<div id='FWnav'><ul></ul></div>");
    $("elm").each(function(e) {
        $("#FWnav ul").append(`<li>${$(this).attr("id")}</li>`);
        $("#FWnav ul li").eq(e).click(function() {
            switchTab($(`#${$(this).text()}`));
        });
    });

});

var switchTab = (e) => {
    $("elm").removeClass("active");
    e.addClass("active");
};