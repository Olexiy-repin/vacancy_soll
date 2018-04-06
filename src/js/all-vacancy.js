// POPUP
(() => {
    $('.wrapper-dropdown').on('click', (event) => {
        if ($(event.target).hasClass('dd__span')) {

          if ($('.dropdown').hasClass('show')) {
            $('.dropdown').removeClass('show');
          } else {
            event.stopPropagation();
          $(event.currentTarget).find('.dropdown').addClass('show');
        }
      }
    });

    $('.list-2').hide();
    $('.list-3').hide();
    $('.list-4').hide();
    $('.list-5').hide();
    $('.list-6').hide();
    $('.list-7').hide();

    $('#1').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#1').addClass('active');
      $('.list-1').show()
    });
    $('#2').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#2').addClass('active');
      $('.list-2').show()
    });
    $('#3').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#3').addClass('active');
      $('.list-3').show()
    });
    $('#4').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#4').addClass('active');
      $('.list-4').show()
    });
    $('#5').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#5').addClass('active');
      $('.list-5').show()
    });
    $('#6').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#6').addClass('active');
      $('.list-6').show()
    });
    $('#7').on('click', (event) => {
      $('.desctop-right-content').hide();
      $('.desctop-content__tabs-item').removeClass('active');
      $('#7').addClass('active');
      $('.list-7').show()
    });
})();
