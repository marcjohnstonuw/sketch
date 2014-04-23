$(function () {
    var things = [];
    console.log('hai!');
    $('#addify').click(function () {
        var code = $('#newEval').val();
        $('.add-it-here').append('<div id="watch' + things.length + '" class="watch">' + code + '<br/><input value="' + eval(code) + '"/></div>');
        console.log('added a thing');
    });
});