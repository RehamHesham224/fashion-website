//.........................j query...........................
//..........................................................
(function ($) {
    'use strict';
    
     //======================scroll to top button=================
    //============================================================
    function scrollToTop() {
        $('.scroll-to-top').on('click', function (e) {
        $('html, body').animate(
        {
            scrollTop: 0,
        },
        700
        );
        e.preventDefault();
        });
    }
scrollToTop();
});
//..........................scroll to top.....................
//...................................................................
var $scrollUp = $('.scroll-to-top'),
$lastScrollTop = 0,
$window = $(window);
$(window).scroll(function () {
    var topPos = $(this).scrollTop();
    if (topPos > $lastScrollTop) {
    $scrollUp.removeClass('show');
    } else {
    if ($window.scrollTop() > 200) {
        $scrollUp.addClass('show');
    } else {
        $scrollUp.removeClass('show');
    }
    }
    $lastScrollTop = topPos;
    //....................sticky nav.....................................
    //...................................................................
    if($(window).scrollTop()>135){
        $(".header").addClass("header-fixed");
        $(".header").slideDown(1500);
    }else{
        $(".header").removeClass("header-fixed");
    }
})

//..............................loader....................................
//.......................................................................
//  window.addEventListener('load', function () {
//     $('.preload').delay(2000).fadeOut('slow');
//   });


//........................js..............................................
//........................................................................
// console.log(Rtl);


//.....................show and hide cart ......................
document.querySelector("#close-cart").addEventListener("click",()=>{
    document.querySelector("#cart").classList.remove("open");
    document.querySelector(".cart__content").classList.remove("show");

    
})
document.querySelector("#cart-wrap").addEventListener("click",()=>{
    document.querySelector("#cart").classList.add("open");
    setTimeout(()=>{
        document.querySelector(".cart__content").classList.add("show");
    },100)
})
//....................show and hide search ............................
document.querySelector("#close-search").addEventListener("click",()=>{
    console.log("bu");
    document.querySelector("#search").classList.remove("open");
    document.querySelector(".search__box").classList.remove("show");

    
})
document.querySelector(".search-btn").addEventListener("click",()=>{
    console.log("hi");
    document.querySelector("#search").classList.add("open");
    setTimeout(()=>{
        document.querySelector(".search__box").classList.add("show");
    },100)
})
 //..............show and hide bigScreen menu....................
 document.querySelector(".menu-close").addEventListener("click",()=>{
    console.log("bu");
    document.querySelector("#menu-bigScreen").classList.remove("open");
    document.querySelector(".menu-inner").classList.remove("show");

    
})
document.querySelector("#menu-btn").addEventListener("click",()=>{
    document.querySelector(".menu-bigScreen").classList.add("open");
    setTimeout(()=>{
        document.querySelector(".menu-inner").classList.add("show");
    },100)
})
//..............show and hide mobile menu....................
document.querySelector(".menuS-close").addEventListener("click",()=>{
    console.log("bu");
    document.querySelector(".mobile-menu").classList.remove("open");
    document.querySelector(".mobile-menu-inner").classList.remove("show");

    
})
document.querySelector("#menuS-btn").addEventListener("click",()=>{
    document.querySelector(".mobile-menu").classList.add("open");
    setTimeout(()=>{
        document.querySelector(".mobile-menu-inner").classList.add("show");
    },100)
})
//......................................................................
//...........handle user select menu in mobile menu.....................
const userSelectItem=document.querySelectorAll(".user-select-item");
//loop through userSelectItem
for(var i =0 ; i<userSelectItem.length ;i++){

//handle click on userSelectItem(collapse)
userSelectItem[i].addEventListener("click",function(){
    let el=userSelectItem[0];
    while (el) {
        if(el.tagName== "LI"){
            //remove class active from siblings
            el.classList.remove("active");
        }
        //pass to siblings
        el=el.nextSibling;
    }
    //add class active to selected one
    this.classList.toggle("active");
})

}
//...........................menu extend in mobile menu....................
//.........................................................................
document.getElementById("menu-expand").addEventListener("click",function(){
document.querySelector(".expand").classList.toggle("show");
this.classList.toggle("minus");
})



//..............decrease and increase amount of products in module....................
//....................................................................................
document.querySelector(".cart-plus-minus .dec").addEventListener("click",()=>{
if(parseInt(document.querySelector(".cart-plus-minus-box").value) >1){
    document.querySelector(".cart-plus-minus-box").value=parseInt(document.querySelector(".cart-plus-minus-box").value)-1;
}
})
document.querySelector(".cart-plus-minus .inc").addEventListener("click",()=>{
document.querySelector(".cart-plus-minus-box").value=parseInt(document.querySelector(".cart-plus-minus-box").value)+1;
})
// =========================color list in module===============================
//============================================================================
let colorElements=document.querySelectorAll('.color');
for(var i =0 ; i<colorElements.length ;i++){

//handle click on colorElements(collapse)
colorElements[i].addEventListener("click",function(){
    let el=colorElements[0];
    while (el) {
        if(el.tagName== "A"){
            //remove class active from siblings
            el.classList.remove("active");
        }
        //pass to siblings
        el=el.nextSibling;
    }
    //add class active to selected one
    this.classList.toggle("active");
    document.querySelector(".slider-for .slide-container.slick-current.slick-active").childNodes[0].src =this.dataset.color;

})


}

//=============================bag/shoes/shirt========================\
document.querySelector(".product-menu a.tab-bag").addEventListener("click",()=>{
        document.querySelector(".bag").classList.add("active");
        document.querySelector(".bag").parentElement.children[1].classList.remove("active");
        document.querySelector(".bag").parentElement.children[2].classList.remove("active");
        
        document.querySelector(".product-menu a.tab-bag").parentElement.parentElement.children[1].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-bag").parentElement.parentElement.children[2].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-bag").classList.add("active");

    })
    document.querySelector(".product-menu a.tab-plaid-shirts").addEventListener("click",()=>{
        document.querySelector(".shirts").classList.add("active");
        document.querySelector(".shirts").parentElement.children[0].classList.remove("active");
        document.querySelector(".shirts").parentElement.children[2].classList.remove("active");
        
        document.querySelector(".product-menu a.tab-plaid-shirts").parentElement.parentElement.children[0].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-plaid-shirts").parentElement.parentElement.children[2].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-plaid-shirts").classList.add("active");
       
    })
    document.querySelector(".product-menu a.tab-shoes").addEventListener("click",()=>{
        document.querySelector(".shoes").classList.add("active");
        document.querySelector(".shoes").parentElement.children[0].classList.remove("active");
        document.querySelector(".shoes").parentElement.children[1].classList.remove("active");

        document.querySelector(".product-menu a.tab-shoes").parentElement.parentElement.children[0].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-shoes").parentElement.parentElement.children[1].children[0].classList.remove("active");
        document.querySelector(".product-menu a.tab-shoes").classList.add("active");
    })
//.........................For  Slick RTL....................
//......................................................
function rtl_slick(){
    if ( document.querySelector("html").getAttribute('dir') == 'rtl' || document.querySelector("body").getAttribute('dir') == 'rtl') {
    return true;
    } else {
    return false;
    }
}

let Rtl=rtl_slick();
console.log(Rtl);
//..........................slick......................
//......................................................

//...............header....................
$('.single-item').slick({
    // dots: true,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 7000,
    arrows:true,
    rtl: rtl_slick(),
    pauseOnHover:false,
    pauseOnFocus:false,
    prevArrow: '<span class="slide-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
    nextArrow: '<span class="slide-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
    });
//......................product ........................
    $('.product__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    arrows: true,
    dots: false,
    rtl: rtl_slick(),
    spaceBetween: 30,
    prevArrow: '<span class=" product-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
    nextArrow: '<span class=" product-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
    responsive: [
    {
        breakpoint: 992,
        settings: {slidesToShow: 3, spaceBetween: 20,}
    },
    {
        breakpoint: 768,
        settings: {slidesToShow: 2, spaceBetween: 15,}
    },
    {
        breakpoint: 575,
        settings: {slidesToShow: 1, spaceBetween: 0,}
    }
]
});
//...................instagram section.....................
$('.instagram__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    arrows: true,
    rtl: rtl_slick(),
    dots: false,
    spaceBetween: 30,
    prevArrow: '<span class=" instagram-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
    nextArrow: '<span class=" instagram-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
    responsive: [
        {breakpoint:1200, 
        settings: {slidesToShow: 5,}
        },
        {breakpoint:992, 
        settings: {slidesToShow: 4,}
        },
        {breakpoint:768, 
        settings: {slidesToShow: 3,spaceBetween: 20}
        },
        {breakpoint:576, 
        settings: {slidesToShow: 2,spaceBetween: 15}
        },
        {breakpoint:480, 
        settings: {slidesToShow: 1, spaceBetween: 0,}
        },
    ]
});
//..........module slider...........................
$('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
infinite: false,
arrows: false,
fade: true,
rtl: rtl_slick(),
asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.slider-for',
prevArrow: '<span class=" nav-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
nextArrow: '<span class=" nav-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
focusOnSelect: true,
spaceBetween:30,
responsive:[
    {breakpoint:1501, settings: {slidesToShow: 3}},
    {breakpoint:1200, settings: {slidesToShow: 2}},
    {breakpoint:992, settings: {slidesToShow: 4}},
    {breakpoint:768, settings: {slidesToShow: 3}},
    {breakpoint:575, settings: {slidesToShow: 2}}
]
});
