(() => {
  $(".sec-07__slider").owlCarousel({
   items : 1,
   itemsCustom : true,

   loop: true,

   autoHeight : true,

   margin : 100,

   responsiveClass:true,
   responsive:{
       0:{
           items:1,
           nav:false
       },
       768:{
           items:1,
           nav:false,
           margin: 10
       },
       1024:{
           items:2,
           nav:false,
           margin: 5
       }
   }
  });
})();
