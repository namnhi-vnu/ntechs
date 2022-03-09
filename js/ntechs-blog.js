AOS.init();

const swiper = new Swiper('.new-blog', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

});
if (window.matchMedia("(max-width: 768px)").matches) {
    const sliderpost = new Swiper(".slider-language", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
    });
} else {
    const sliderpost = new Swiper(".slider-language", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 3000,
        },
    });
}

const getone = document.querySelector.bind(document);
const getall = document.querySelectorAll.bind(document);
const categorylist = getall(".category-menu-blog-mobile");
const menublog = getall(".navbar-menus-mobile-blog li.item");
const menublogactive = getone(".navbar-menus-mobile-blog li.item.active");
const bodys = getone("body");
const btnclose = getall("span.item-close")

menublog.forEach((tab, index) => {
    const pane = categorylist[index];
    tab.onclick = function () {
        this.classList.toggle("active");
        pane.classList.toggle("active");
        bodys.classList.toggle("active");

    };
});