$(document).ready(function() {
            console.log("here");
		$("#youclickHeader").scroll(() => {
			$("#youclickHeader").css("background-position","center -" + $(document).scrollTop()/1.3 + "px");
        });
        $("#youclickHeader").scroll();
});