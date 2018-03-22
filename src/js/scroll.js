$(document).ready(function(){
  $('.dummy').viewportChecker({
    offset: '50%',
    callbackFunction: function(elem, action){
      if(action=='add') {
        $('.scroll-btn').addClass('fixed');
      } else {
        $('.scroll-btn').removeClass('fixed');
      }
    }
  });
});
