$(document).ready(function() {
    $('.callback-button').click(function(e) {
        e.preventDefault(); 

        $(this).find('.tooltip').toggle();
    });
});