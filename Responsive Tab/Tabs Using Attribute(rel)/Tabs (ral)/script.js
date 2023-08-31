// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).attr('rel');
  $(activeTab).fadeIn();
  return false;
});


// rel tab JS
    // $('.tab-content-svg').hide();
    // $('.tabg-svg').click(function() {
    //     // alert("clixws");
    //     $('.tabg-svg').removeClass('active');
    //     $(this).addClass('active');
    //     $('.tab-content-svg').css("display", "none");

    //     var activeTab = $(this).attr('rel');
    //     $(activeTab).css("display", "block");
    //     $(activeTab).fadeIn();
    //     return false;
    // });