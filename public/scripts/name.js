/**
 * Created by cecollins on 2/11/16.
 */

var values = {};

$(document).ready(function() {
    clickPostData();
    $('#post-name-button').on('click', clickPostData);
    $('#get-name-button').on('click', clickGetData);

});

function clickPostData() {
    event.preventDefault();
    $.each($('#post-name').serializeArray(), function(i, field) {
        values[field.name] = field.value;
    });

    $('#post-name').find('input[type=text]').val('');

    $.ajax({
        type: 'POST',
        url: '/name',
        data: values,
        beforeSend: function() {
            console.log('before!' + values.name);
        },
        success: function(data) {
            refreshDom(data);
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
        data: values,
        success: function(data) {
            var arrayIndex = (getRandomInt(0, (data.length)));
            console.log(values);
            //console.log(data);
        }
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//function fetchNames (){
//    $.ajax({
//        type: 'GET',
//        url: '/name',
//        success: function(data){
//
//            refreshDom(data);
//        }
//
//    })
//}

function refreshDom(array){
    $('#results').empty();

    for (var i = 0; i < array.length; i++){
        $('#results').append('<h2>' + array[i].name + '</h2>');

    }

}