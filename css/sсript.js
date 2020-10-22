$(document).ready(function() {
 $('.burger').click(function(event) {
     $('.burger').toggleClass('active');
     $('.list-burger').toggleClass('active');
     $('body').toggleClass('lock');
 });
});