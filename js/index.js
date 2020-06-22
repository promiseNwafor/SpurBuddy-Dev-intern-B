AOS.init({
    offset: 100,
    duration: 1000
});

setInterval(() => changeSlide('next'), 5000);

changeSlide = direction => {
    const currentImg = $('.active');
    const nextImg = currentImg.next();
    const prevImg = currentImg.prev();

    if (direction === 'next') {
        nextImg.length ? nextImg.addClass('active') : 
            $('.slider .section3').first().addClass('active') 
    }else {
        prevImg.length ? prevImg.addClass('active') :
            $('.slider .section3').last().addClass('active');
    }
    currentImg.removeClass('active');
}
