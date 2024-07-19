const shareModalEl = document.querySelector('.share__modal-container');
const shareButtonEl = document.querySelector('.share__btn');
const shareIconEl = document.querySelector('.share__arrow-icon');

function shareButtonModal() {
  shareModalEl.classList.toggle('visible');
}

function addHoverClass(event) {
  event.stopPropagation();
  shareIconEl.classList.add('hover');
}

function removeHoverClass(event) {
  event.stopPropagation();
  shareIconEl.classList.remove('hover');
}

shareButtonEl.addEventListener('click', shareButtonModal);
shareButtonEl.addEventListener('mouseover', addHoverClass);
shareButtonEl.addEventListener('mouseout', removeHoverClass);
