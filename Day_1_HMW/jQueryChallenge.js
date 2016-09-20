$(function () {

$('#btn_createList').click(function(){
    $('.ul_current').append($('<li>', {
         text: $('#input_listName').val()
    }));
});

$('#btn_removeAll').click(function() {
   $('.ul_current').empty();
});

$('#btn_removeLast').click(function() {
    $('li:last-child').fadeOut('slow', 'linear');
})

});