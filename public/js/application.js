$(document).ready(function() {
	$(".add_horse_button").submit(function(event) {
		event.preventDefault();
		var form = $(this);
		form.hide();

		$.ajax({
       url: form.attr('action'), 
       type: form.attr('method')
		 })
    .done(function(response) {
      $(".container-for-add-horse").append(response);
    })
	})




});








// $("#posts").submit(function(event) {
//     event.preventDefault();

//     var form = $(this);
//     var form_data = form.serialize();
//     $.ajax({
//       url: form.attr('action'), 
//       type: form.attr('method'),
//       data: form_data
//     })
//     .done(function(response) {
//       $(".post-container").append(response);
//     })