console.log('js');

const searchEl = document.querySelector('.search');

const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색');
})

searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
})

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(()=>
{
    console.log('scroll');
    if(window.scrollY > 500)
    {
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none',
        });
        gsap.to(toTopEl, .2, {
            x:0
        })
    } 
    else
    {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block',
        });
        gsap.to(toTopEl, .2, {
            x:100
        })
    }
}, 300));
// _.throttle(함수, 쓰로틀시간)

toTopEl.addEventListener('click', () => {
    gsap.to(window, .7, {
        scrollTo:0
    });
});

const fadeELs = document.querySelectorAll('.visual .fade-in')

fadeELs.forEach((fadeEl, index)=>{
    gsap.to(fadeEl, 1, {
        opacity: 1,
        delay: (index + 1) * .7,
    })
});

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true,
});



new Swiper('.promotion .swiper-container', {
    direction:'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    // autoplay:{
    //     delay: 5000,
    // },
    pagination: {
        el:'.promotion .swiper-pagination',
        clickable: true,
    },
    navigation: {
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next',
    }
});

new Swiper('.awards .swiper-container', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    navigation: {
        prevEl:'.awards .swiper-prev',
        nextEl:'.awards .swiper-next',
    }
});

const promotionEl = document.querySelector('.promotion')

const promotionToggleEl = document.querySelector('.toggle-promotion')

let isHidePromotion = false;

promotionToggleEl.addEventListener('click', () => {
    isHidePromotion = !isHidePromotion

    if(isHidePromotion)
    {
        promotionEl.classList.add('hide');
    }
    else
    {
        promotionEl.classList.remove('hide');
    }
})

function random(min,max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const floatingObject = (selector, delay, size) => {
    gsap.to(selector, random(1.5,2.5), {
        y:size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay:random(0,delay),
    })
}

floatingObject('.floating1',1,15)
floatingObject('.floating2',0.5,15)
floatingObject('.floating3',1.5,20)


const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl,index) => {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8,           
        })
        .setClassToggle(spyEl,'show')
        .addTo(new ScrollMagic.Controller());
})

const thisYear = document.querySelector('.this-year');

thisYear.textContent = new Date().getFullYear();