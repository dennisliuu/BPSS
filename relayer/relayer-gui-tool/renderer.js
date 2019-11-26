// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

$('#uploadFile').on('change',function(){
    var fileName = $(this).val();
    $(this).next('.custom-file-label').html(fileName);
})