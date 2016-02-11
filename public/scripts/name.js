/**
 * Created by cecollins on 2/11/16.
 */
$(document).ready(function() {
    $('#post-name-button').on('click', clickPostData);
    $('#get-name-button').on('click', clickGetData);

});

function clickPostData() {
    event.preventDefault();
    var values = {};
    $.each($('#post-name').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/name',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
        }
    });


}

function clickGetData() {
    event.preventDefault();
    $.ajax({
        type: 'GET',
        url: '/name',
        success: function(data) {
            console.log(data);
        }
    });
}