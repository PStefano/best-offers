$(function () {
    //Gathering the elements needed for jQuery
    let img = $('img[alt^="v"]');
    let section = $('main>section article');

    //The scroll function that shows the last cars that are hidden by default (copied mostly from the internet except for the part inside the if)
    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            section.removeClass('generated');
        }
    });

    //Changing the image of the car to show the rear view (fake rear view)

    img.on('mouseenter', rotate);
    img.on('mouseout', unRotate);

    //First function to show the rear view
    function rotate(img) {
        img.target.src = 'img/rear.png';
    }

    //Second function to put the image back to normal
    function unRotate(image) {
        image.target.src = 'img/' + image.target.alt + '.png ';
    }
});