$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    dots:true,
    responsive:{
        0: { // Для екранів шириною від 0 до 599 пікселів
            items: 1 // Показувати 1 елемент
        },
        600: { // Для екранів від 600 до 1023 пікселів
            items: 1 // Показувати 2 елементи
        },
        1024: { // Для екранів від 1024 пікселів
            items: 1 // Показувати 4 елементи
        }
    }

})
