$( "#mailer-join" ).submit(function( event ) {
  $(this).toggleClass("clicked")
  $('input[type=submit]').prop('value', 'OK!');
  event.preventDefault();
  window.location = "http://www.ladiff.com";
});
