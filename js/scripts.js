$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout: 6500,
    autoplaySpeed: 1000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        1100:{
            items:1
        }
    }

})

// Завантаження header
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

// Завантаження footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

