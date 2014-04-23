$(function () {
    var things = [];
    console.log('hai!');
    $('body').append('<div style="position:absolute;z-index:9999;top:0;right:0;width:200px;height:600px;background-color:lightblue;">' + 
                     '<label>Add watch </label>' +
      '<input type="text" name="newEval" id="newEval" />' +
      '<input type="button" value="addify" id="addify"/>' + 
      '<br/>' + 
      '<input type="button" value="updatify" id="updatify"/>' +      
      '<div class="add-it-here"></div></div>');
    $('#addify').click(function () {
        var code = $('#newEval').val();
        $('.add-it-here').append('<div id="watch' + things.length + '" class="watch">' + code + '<br/><input value=""/></div>');
        console.log('added a thing');
        
        window.postMessage({ type: "EVALUATE", text: code }, "*");
    });
    
    var port = chrome.runtime.connect();

    window.addEventListener("message", function(event) {
      // We only accept messages from ourselves
      if (event.source != window)
        return;
    
      if (event.data.type && (event.data.type == "RESULT")) {
        console.log("Content script received: " + event.data.text);
        $('.watch input').val(event.data.text);
      }
    }, false);
});