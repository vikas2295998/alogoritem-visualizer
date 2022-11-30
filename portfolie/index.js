
$(document).ready(function(){
    
const a=document.getElementById('vikas');
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
  
    
    if(this.scrollY>500){
        a.classList.add("show");
       
    }
    else{
        a.classList.remove("show");
      
    }
});

console.log(a);
a.addEventListener('click',function(){
    console.log("vilks");
    $('html').animate({scrollTop: 0});
   
    $('html').css("scrollBehavior","auto");
});

// $('.scroll-up-btn').click(function(){
//     console.log("vilks");
//     $('html').animate({scrollTop: 0});
   
//     $('html').css("scrollBehavior","auto");
// });

$('.navbar .menu li a').click(function(){
    console.log("kkk");
    $('html').css("scrollBehavior", "smooth");
});

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    var typed =new Typed(".typing",{
        strings:["Developer","Programmer","Designer","Freelancer"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });
    var typed2 =new Typed(".typing-2",{
        strings:["Developer","Programmer","Blogger","Designer","Freelancer"],
        typeSpeed:80,
        backSpeed:60,
        loop:true
    });

    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplay:true,
        autoPlayTimeOut:2000,
        autoPlayPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }

        }
    });
    
   
 
});

// const a=document.getElementById('vikas');
// console.log(a);
// a.addEventListener('click',()=>{
//     console.log("vilks");
//  });


