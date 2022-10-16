var hideElm = 'citotec',
    regex = new RegExp(hideElm, 'g');

$('#tinymce').html(function(i, html){
  return html.replace(regex, '<span style="display:none">' + hideElm + '</span>');
});
