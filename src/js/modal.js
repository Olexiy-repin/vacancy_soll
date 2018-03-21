(() => {
  const Modal = (root) => {
    const show = () => {
      root.style.display = 'block';
      document.body.style.overflow = 'hidden';
    };

    const hide = () => {
      root.style.display = 'none';
      document.body.style.overflow = 'auto';
    };

    const init = () => {
      show(root);

      root.querySelector('.bottom-close')
        .onclick = () => hide(root);

      window.onclick = ({ target }) => {
        if (target === root) {
          hide(root);
        }
      };
    };

    return { show, hide, init };
  };

  const modalTriggers = document.querySelectorAll('.modal-trigger');
  Array.from(modalTriggers).forEach((trigger) => {
    trigger.addEventListener('click', ({ target }) => {
      const element = document.querySelector(target.dataset.modal);

      Modal(element).init();
    });
  });
})();

// POPUP
(() => {
    $('.sec-12__list-item').on('click', (event) => {
      $('.more-block').removeClass('show');
      if ($(event.target).hasClass('more-btn')) {
        event.stopPropagation();
        $(event.currentTarget).find('.more-block').addClass('show');
      }
    });

    $(window).on('click', () => {
      $('.more-block').removeClass("show");
    })
})();
