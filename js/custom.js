$(document).ready(function () {
	$('#select-file').change(function () {
		var i = $(this).prev('label').clone();
		var file = $('#select-file')[0].files[0].name;
    $(this).prev('label').text(file);   
  });    
});
 


        