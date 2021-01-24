(function ($) {
    'use strict';
 /* Bootstraps 4 Tooltip
	/*======================================*/
    // $(function () {
    //     $('[data-toggle="tooltip"]').tooltip();
    // });
    
    /*=====================================*/

   
    // $(".product-menu").on("click",()=>{
    //     let tabEl=$('this').href;
    //     let tabContent= document.querySelector($('this').href);
    //     console.log(tabContent);
    //     $('this').toggleClass("active").parent().siblings().$(":first-child").removeClass("active");
    //     tabContent.toggleClass("active").siblings().removeClass("active");
    //     console.log( $('this').parent().siblings().$(":first-child"));


        // let tabContent= document.querySelector($('this').href);
        // let el=userSelectItem[0];
        // while (el) {
        //     if(el.tagName== "LI"){
        //         //remove class active from siblings
        //         el.classList.remove("active");
        //     }
        //     //pass to siblings
        //     el=el.nextSibling;
        // }
        // //add class active to selected one
        // this.classList.toggle("active");
    // });
   

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

    //======================menu expand==========================
    //============================================================

    // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    //     $('.product__slider').slick('setPosition');
    // });
});

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


        console.log();
    })
    
}
 //=============================bag========================\
    // //==========================================================
    // document.querySelector(".product-menu .tab-bag").on("click",()=>{
    //     document.querySelector(".bag").classList.add("active");
    //     document.querySelector(".bag").parentElement
    // })
    // document.querySelector(".product-menu .tab-plaid-shirts").on("click",()=>{
    //     document.querySelector(".shirts").classList.add("active").siblings().removeClass("active");
    // })
    // document.querySelector(".product-menu .tab-shoes").on("click",()=>{
    //     document.querySelector(".shoes").classList.add("active").siblings().removeClass("active");
    // })
    console.log(document.querySelector(".product-tab-content").children);
    let productContent =document.querySelector(".product-tab-content").children;
    for(var i =0 ; i<productContent.length ;i++){

        //handle click on productContent(collapse)
        productContent[i].addEventListener("click",function(){
            let el=productContent[0];
            while (el) {
                if(el.tagName== "DIV"){
                    //remove class active from siblings
                    el.classList.remove("active");
                }
                //pass to siblings
                el=el.nextSibling;
            }
            //add class active to selected one
            this.classList.add("active");
        })
        
    }

// ================================slick======================================
//============================================================================

$('.single-item').slick({
    // dots: true,
    infinite:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    arrows:true,
    fade:true,
    fadeSpeed:1000,
    centerMode:true,
    prevArrow: '<span class="slide-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
    nextArrow: '<span class="slide-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
    });

    $('.product__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    arrows: true,
    dots: false,
    spaceBetween: 30,
    prevArrow: '<span class=" product-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
    nextArrow: '<span class=" product-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
    responsive: [
    {
        breakpoint: 992,
        settings: {slidesToShow: 3,}
    },
    {
        breakpoint: 768,
        settings: {slidesToShow: 2,}
    },
    {
        breakpoint: 575,
        settings: {slidesToShow: 1,}
    }
]
});

$('.instagram__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: false,
    arrows: true,
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
        settings: {slidesToShow: 3,}
        },
        {breakpoint:576, 
        settings: {slidesToShow: 2,}
        },
        {breakpoint:480, 
        settings: {slidesToShow: 1,}
        },
    ]
});
$('.slider-for').slick({
slidesToShow: 1,
slidesToScroll: 1,
infinite: false,
arrows: false,
fade: true,
asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
slidesToShow: 4,
slidesToScroll: 1,
asNavFor: '.slider-for',
prevArrow: '<span class=" nav-arrow prev-arrow"><i class="fas fa-chevron-left "></i></span>',
nextArrow: '<span class=" nav-arrow next-arrow"><i class="fas fa-chevron-right "></i></span>',
// centerMode: true,
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
//...............bootstrap4 modal..............
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })


/*-------------Preloader--------------------*/
//  window.addEventListener('load', function () {
//     var wind = $(window);
//     $('.preload').delay(2000).fadeOut('slow');
//   });
  /*----------------------------------------*/
//change content on clicking on the tap






var $scrollUp = $('.scroll-to-top'),
$lastScrollTop = 0,
$window = $(window);
//..........................scroll to top.....................
//...................................................................
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
    // var midNav = $("".middle-nav").outerHeight( true );
    // var topNav =$(".top-nav").outerHeight( true );
    // var topHeight=midNav + topNav;
    //....................sticky nav.....................................
    //...................................................................
    if($(window).scrollTop()>135){
        // $(".header").addClass("fixed");
        $(".header").addClass("header-fixed");

    }else{
        // $(".header").removeClass("fixed");
        $(".header").removeClass("header-fixed");
        
    }
})


 //bootstrap
// $('body').scrollspy({ target: '#main-nav' });
// // Smooth Scrolling
// $("#main-nav a").on('click', function (event) {
//     if (this.hash !== "") {
//         event.preventDefault();

//         const hash = this.hash;

//         $('html, body').animate({
//         scrollTop: $(hash).offset().top
//         }, 800, function () {

//         window.location.hash = hash;
//         });
//     }
// });







    // let scrollToTop=$(".scroll-to-top");
    // if($(window).scrollTop()> 1000){
    //         scrollToTop.addClass("show")
    // }else{
    //     scrollToTop.removeClass("show");
    // }

//     var $scrollUp = $('.scroll-to-top'),
//     $lastScrollTop = 0,
//     $window = $(window);

//   $window.on('scroll', function () {
//     var topPos = $(this).scrollTop();
//     if (topPos > $lastScrollTop) {
//       $scrollUp.removeClass('show');
//     } else {
//       if ($window.scrollTop() > 200) {
//         $scrollUp.addClass('show');
//       } else {
//         $scrollUp.removeClass('show');
//       }
//     }
//     $lastScrollTop = topPos;
//   });

    //     function scrollToTop() {
    // }
    // scrollToTop();











        // $("#menu-expand").on("click",function(){
    //     console.log("hi");
    //     $(".expand").slideToggle("slow");
    // })









// $("#mobile-menu-inner").on('click', 'li a, li .menu-expand', function (e) {
// var $this = $(this);
// if (
//     $this
//       .parent()
//       .attr('class')
//       .match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) &&
//     ($this.attr('href') === '#' ||
//       $this.attr('href') === '' ||
//       $this.hasClass('menu-expand'))
//   ) {
//     e.preventDefault();
//     if ($this.siblings('ul:visible').length) {
//       $this.siblings('ul').slideUp('slow');
//     } else {
//       $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
//       $this.closest('li').siblings('li').removeClass('menu-open');
//       $this.siblings('ul').slideDown('slow');
//       $this.parent().siblings().children('ul').slideUp();
//     }
//   }
//   if (
//     $this.is('a') ||
//     $this.is('span') ||
//     $this.attr('class').match(/\b(menu-expand)\b/)
//   ) {
//     $this.parent().toggleClass('menu-open');
//   } else if (
//     $this.is('li') &&
//     $this.attr('class').match(/\b('menu-item-has-children')\b/)
//   ) {
//     $this.toggleClass('menu-open');
//   }
// });
// }
    // $('body').on(
    //     'shown.bs.tab',
    //     'a[data-toggle="tab"], a[data-toggle="pill"]',
    //     function (e) {
    //       $this.slick('setPosition');
    //     }
    //   );