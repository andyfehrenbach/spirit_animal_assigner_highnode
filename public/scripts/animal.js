/**
 * Created by cecollins on 2/11/16.
 */
/**
 * Created by cecollins on 2/11/16.
 */
$(document).ready(function() {
    $('#post-animal-button').on('click', clickPostData);
    $('#get-animal-button').on('click', clickGetData);

});

function clickPostData() {
    event.preventDefault();
    var values = { };
    $.each($('#post-animal').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-animal').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/animal',
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
        url: '/animal',
        success: function(data) {
            console.log(data);
        }
    });
}