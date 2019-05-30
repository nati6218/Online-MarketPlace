$(document).ready(function(){

    $('#online-order form').submit(function(event){

    var nameInput = $('input#name').val();
    var LastnameInput = $('input#lastName').val();
    var addressInput = $('input#address').val();
    var cityInput = $('input#city').val();
    var zip = $('input#Zip').val();
    var bracelet = $('select.bracelet').val();
    var necklace = $('select.necklace').val();




    $('.name').text(nameInput);
    $('.address').text(addressInput);
    $('.lastName').text(LastnameInput);
    $('.city').text(cityInput);
    $('.bracelet').text(bracelet);
    $('.necklace').text(necklace);

    $('#receipt').show();
    $("#o").click(function(){
      $('#receipt').show();
});

    event.preventDefault();
    });
  });
