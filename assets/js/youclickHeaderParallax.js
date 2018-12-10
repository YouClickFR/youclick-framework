$(document).ready(function() {
		$("#youclickHeader").scroll(() => {
			$("#youclickHeader").css("background-position","center -" + $(document).scrollTop()/1.3 + "px");
        });
        $("#youclickHeader").scroll();
});
