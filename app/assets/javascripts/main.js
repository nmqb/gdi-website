//Accordion for mobile chapter index
$(function() {
  $('#state-list .accordion').on('click', 'h2', function() {
      $(this).parent().removeClass("hide-chapters").siblings().addClass("hide-chapters");
  });
});


      


