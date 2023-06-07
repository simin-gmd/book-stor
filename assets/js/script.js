// const { default: Swiper } = require("swiper");

//variables
const goTop = document.querySelector('go-top-btn'),
    headerContent = document.querySelector('.header-content-main'),
    collectionBtn = document.querySelector('.collection'),
    submenuCollection = document.querySelector('.sub-menu-collection'),
    discBtn = document.querySelector("#disc-btn"),
    reviewBtn = document.querySelector("#review-btn"),
    discription = document.querySelector("#discription"),
    review = document.querySelector("#review"),
    loginBtn = document.querySelector(".loginBtn"),
    registerBtn = document.querySelector(".registerBtn"),
    loginForm = document.querySelector(".login"),
    registerForm = document.querySelector(".register"),
    nums = document.querySelector("#typeNumber"),
    quantityDown = document.querySelector(".quantity-down"),
    quantityUp = document.querySelector(".quantity-up"),
    addFavs = document.querySelectorAll(".add-fav"),
    onlineformat = document.querySelector(".onlineform-btn"),
    paperformat = document.querySelector(".paperform-btn"),
    buyBtn = document.querySelectorAll(".buy-btn"),
    shoppingBagBtn = document.querySelector(".shopping-bag-fixed");
// numsShoppingBag = document.querySelector(".badge").innerHTML;

// console.log(numsShoppingBag);


let number = Number(nums?.value);
// numberShoppingBag = Number(numsShoppingBag);
// console.log(numberShoppingBag);
//eventlisteners
eventListeners()
function eventListeners() {
    if (goTop) {
        goTop.addEventListener('click', scrollToTop)
    }
    //spinner
    if (headerContent) {
        headerContent.addEventListener('DOMContentLoaded', showSpinner())
    }
    //tabs for show comment and discription
    if (discBtn) {

        discBtn.addEventListener('click', showdisc)
    }
    if (reviewBtn) {

        reviewBtn.addEventListener('click', showreview)
    }
    //show login form
    if (loginBtn) {
        loginBtn.addEventListener('click', showLogin)
    }
    //show Register form
    if (registerBtn) {
        registerBtn.addEventListener('click', showRegister)
    }
    //nums book
    if (nums) {
        if (quantityDown && number >= 0) {
            quantityDown.addEventListener('click', quantityDownfunc)
        }
        if (quantityUp && number <= 5) {
            quantityUp.addEventListener('click', quantityUpfunc)
        }
    }
    //add to fav list
    if (addFavs) {
        addFavs.forEach(el => {
            el.addEventListener('click', addFavfunc)
        })
    }
    //choose format of book
    if (onlineformat) {
        onlineformat.addEventListener('click', chooseOnlineForm)
    }
    if (paperformat) {
        paperformat.addEventListener('click', choosePaperForm)
    }
    //add to buy basket
    if (shoppingBagBtn && buyBtn) {

        buyBtn.forEach(el => {
            el.addEventListener('click', addBuyBasket)
        })
    }
}

//function
//scrooll to top
function scrollToTop(e) {
    e.preventDefault()
    window.scrollTo(0, 0);
};
//disply spinner
function showSpinner() {
    let spinner = document.querySelector('#spinner')
    spinner.classList.add('d-none')
    headerContent.classList.remove('d-none')
};
// show comment and dicription
function showdisc(e) {
    e.preventDefault()
    discBtn.classList.add('active-tab')
    discBtn.classList.remove('deactive-tab')
    reviewBtn.classList.add('deactive-tab')
    reviewBtn.classList.remove('active-tab')
    discription.classList.add('active')
    review.classList.remove('active')
};
function showreview(e) {
    e.preventDefault()
    reviewBtn.classList.add('active-tab')
    reviewBtn.classList.remove('deactive-tab')
    discBtn.classList.add('deactive-tab')
    discBtn.classList.remove('active-tab')
    discription.classList.remove('active')
    review.classList.add('active')
};
//function show login form
function showLogin(e) {
    e.preventDefault()
    loginBtn.classList.add('active')
    loginBtn.classList.remove('deactive')
    registerBtn.classList.remove('active')
    registerBtn.classList.add('deactive')
    loginForm.classList.remove('d-none')
    loginForm.classList.add('wow', 'animate__animated', 'animate__fadeInRight', 'animate__delay-.1s')
    registerForm.classList.add('d-none')
};
//function show Register form
function showRegister(e) {
    e.preventDefault()
    registerBtn.classList.add('active')
    registerBtn.classList.remove('deactive')
    loginBtn.classList.add('deactive')
    loginBtn.classList.remove('active')
    registerForm.classList.remove('d-none')
    registerForm.classList.add('wow', 'animate__animated', 'animate__fadeInRight', 'animate__delay-.1s')
    loginForm.classList.add('d-none')
};
//nums book
function quantityDownfunc() {
    if (number > 0) {
        number -= 1
    }
    nums.setAttribute("value", number)
    // console.log(number);
};

function quantityUpfunc() {
    if (number < 5) {
        number += 1
    }
    nums.setAttribute("value", number)
    // console.log(number)
};
//add to fav list
function addFavfunc(e) {
    e.preventDefault()
    e.target.classList.toggle('icon-heart-empty')
    e.target.classList.toggle('icon-heart')
}

//choose format for each book
function chooseOnlineForm() {
    onlineformat.classList.toggle('active-format');
    paperformat.classList.remove('active-format');
}
function choosePaperForm() {
    paperformat.classList.toggle('active-format');
    onlineformat.classList.remove('active-format');
}
//add buy basket
function addBuyBasket(e) {
    e.preventDefault()
    const numsShoppingBag = document.querySelector(".badge").innerHTML;
    let numberShoppingBag = Number(numsShoppingBag);
    // console.log(numberShoppingBag);
    let buyBtnIcon = e.target.children[0]
    // let buyBtnText =e.target.innerHTML
    // if(buyBtnIcon.classList.contains('icon-basket-1')){
    //     numberShoppingBag += 1
    //     console.log(numberShoppingBag);
    // }
    buyBtnIcon.classList.remove("icon-basket-1")
    buyBtnIcon.classList.add("icon-spin5")
    shoppingBagBtn.classList.add('animate__shakeX', 'wow', 'animate__animated', 'animate__delay-.1s')
    setTimeout(() => {
        buyBtnIcon.classList.remove("icon-spin5")
        buyBtnIcon.classList.add("icon-ok")
        shoppingBagBtn.classList.remove('animate__shakeX', 'wow', 'animate__animated', 'animate__delay-.1s')

    }, 1000);
    numberShoppingBag += 1
    console.log(numberShoppingBag)
    // numsShoppingBag = numberShoppingBag
    document.querySelector(".badge").innerHTML = ""
    document.querySelector(".badge").innerHTML = numberShoppingBag
    // console.log(numberShoppingBag);
}
//swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 25,
    breakpoints: {
        1200: {
            slidesPerView: 6,
            spaceBetween: 25
        },
        991: {
            slidesPerView: 5,
            spaceBetween: 25
        },
        788: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 25
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

//swiper for bestselling

var swiper = new Swiper(".swiperBestselling", {
    slidesPerView: 6,
    spaceBetween: 25,
    breakpoints: {
        1200: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 25
        },
        788: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        0: {
            slidesPerView: 2,
            spaceBetween: 25
        }
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

