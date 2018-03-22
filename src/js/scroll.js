$(document).ready(function(){
  $('.dummy').viewportChecker({
    // offset: '70%',
    repeat: true,
    callbackFunction: function(elem, action){
      console.log(action);
      if(action=='add') {
        $('.scroll-btn').addClass('fixed');
      } else {
        $('.scroll-btn').removeClass('fixed');
      }
    }
  });
});
