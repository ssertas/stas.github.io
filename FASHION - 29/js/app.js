// Картинка увеличиваеться
const maxImg = document.querySelector('.bg--scrl')
document.querySelectorAll('.mn--scl').forEach(item => item.onmouseenter = (event) => maxImg.src = event.target.src);

// Анимация button-header--burger
let menuBtn = document.querySelector('.menu-btn')
// Menu First
let menu = document.querySelector('.menu')
// Work Button,Menu First
menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active')
})

// Accordion
const accordion = document.getElementsByClassName('item__accordion')
for (i = 0; i<accordion.length ;i++) {
    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active')
    })
}

// Анимация button 
let menuBuutton = document.querySelector('.menu-btn--info')
// Menu First
let menuB = document.querySelector('.menu--info')
// Work Button,Menu First
menuBuutton.addEventListener('click', function() {
    menuBuutton.classList.toggle('active')
    menuB.classList.toggle('active')
})

// Lang-change 
const select = document.querySelector('select');
const allLang = ['en', 'ru', 'ua',]
select.addEventListener('change', changeURLLANGUAGE)
const langArr = {
    'women': {
        'en': 'Women',
        'ru': 'Женщины',
        'ua': 'Жінки',
    },
    'men': {
        'en': 'Men',
        'ru': 'Мужчины',
        'ua': 'Чоловіки',
    },
    'children': {
        'en': 'Children',
        'ru': 'Дети',
        'ua': 'Діти',
    },
    'collection': {
        'en': 'Collection',
        'ru': 'Колекция',
        'ua': 'Колекція',
    },
    'spring': {
        'en': 'Spring',
        'ru': 'Весна',
        'ua': 'Весна',
    },
    'summer': {
        'en': 'Summer',
        'ru': 'Лето',
        'ua': 'Літо',
    },
    'fall': {
        'en': 'Fall',
        'ru': 'Осень',
        'ua': 'Осінь',
    },
    'winter': {
        'en': 'Winter',
        'ru': 'Зима',
        'ua': 'Зима',
    },
}
//перенаправить на URL с указанием языка
function changeURLLANGUAGE() {
    let lang = select.value
    location.href = window.location.pathname + '#' + lang
    location.reload()
}
function changeLanguage() {
    let hash = window.location.hash
    hash = hash.substr(1)
    console.log(hash);
    if( !allLang.includes(hash) ) {
        location.href = window.location.pathname + '#en'
        location.reload() 
    }
    select.value = hash
    document.querySelector('.lng-women').innerHTML = langArr['women'][hash];
    document.querySelector('.lng-men').innerHTML = langArr['men'][hash];
    document.querySelector('.lng-children').innerHTML = langArr['children'][hash];
    document.querySelector('.lng-collection').innerHTML = langArr['collection'][hash];
    document.querySelector('.lng-spring').innerHTML = langArr['spring'][hash];
    document.querySelector('.lng-summer').innerHTML = langArr['summer'][hash];
    document.querySelector('.lng-fall').innerHTML = langArr['fall'][hash];
    document.querySelector('.lng-winter').innerHTML = langArr['winter'][hash];
}
changeLanguage()


// Upward
$(document).ready(function() {

    let $btnTop = $('.btn-top')
    $(window).on('scroll', function() {
        if($(window).scrollTop() >= 100) {
            $btnTop.fadeIn()
        } else {
            $btnTop.fadeOut()
        }
    })

    $btnTop.on('click', function() {
        $('html, body').animate({scrollTop:0}, 900)
    })
})



// Fixed-header
window.onscroll =  () => {
    const header = document.querySelector('.header__block')
    const Y = window.scrollY

    if (Y > 450) {
        header.classList.add('header__fixed')
    } else if (Y < 100) {
        header.classList.remove('header__fixed')
    }
}


// Onmouseen
