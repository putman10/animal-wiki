$(document).ready(function() {
  $(".animalchoice").change(function() {
  var animal = $("#inputAnimal").val();
  var bear = $("#bearselection").val();
  var lion = $("#lionselection").val();
  var tiger = $("#tigerselection").val();

  if ( animal === bear ) {
    $('.card div').hide();
    $('.beardiv').show();
  } else if ( animal === tiger) {
    $('.card div').hide();
    $('.tigerdiv').show();
  } else if ( animal === lion) {
    $('.card div').hide();
    $('.liondiv').show();
  } else {
    $('.errordiv').show();
  }

  });
});
