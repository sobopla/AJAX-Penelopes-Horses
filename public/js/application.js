// Show add horse form when add horse is clicked

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

// dynamically show the added horse on the page 
	$(".container-for-add-horse").on("submit", "#new-horse-form", function(event) {
		event.preventDefault();
		var form = $(this);
		$("add_horse_button").show();
		form.remove();
		var form_data = form.serialize();

		$.ajax({
			url: form.attr('action'),
			type: form.attr('method'),
			data: form_data
		})
		.done(function(response){
			$(".add_horse_button").show();
			$(".horse-list").append(response);
		})
	})

// dynamically show the horse info when name is clicked
	$(".list").on("click", "a", function(event){
		event.preventDefault();
		horsename = $(this);

		// console.log( $(this).text() );

		$.ajax({
			url: horsename.attr('href'), 
		})
		.done(function(response){
			horsename.parent().append(response);
		})
		

	})


});
// add a horse
// click submit
// Show the added horse on the page without reloading
// hide button on the horse form
// add horse to horse-list

  // $(".post-container").on("click", ".delete", function(event) {
  //   event.preventDefault();

  //   var url = $(this).attr("href")
  //   var deletebutton = $(this)
  //   $.ajax({
  //     url: url,
  //     method: "delete",
  //   })
  //   .done(function(response) {
  //   deletebutton.closest("article").remove()
  //   })
  // });




