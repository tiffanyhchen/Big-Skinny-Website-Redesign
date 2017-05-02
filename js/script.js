//More (Expand) or Less (Collapse)
$('.categories-menu.menu.nested').each(function () {
    var filterAmount = $(this).find('li').length;
    if (filterAmount > 5) {
        $('li', this).eq(4).nextAll().hide().addClass('toggleable');
        $(this).append('<li class="more">More</li>');
    }
});
$('.categories-menu.menu.nested').on('click', '.more', function () {
    if ($(this).hasClass('less')) {
        $(this).text('More').removeClass('less');
    }
    else {
        $(this).text('Less').addClass('less');
    }
    $(this).siblings('li.toggleable').slideToggle();
});
//
//Cart Modal
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}