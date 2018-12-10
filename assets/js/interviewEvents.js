$(document).keydown((e) => { 
  if (e.keyCode == 27) 
    $(".interviewContainer.active").removeClass("active");
});
