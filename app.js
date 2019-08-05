
$(() => {
  const $star = $('.far fas-star');
  $star.hover(() => {
    $star.removeClass('far fas-star');
    $star.addClass('fas fas-star');
  })
  $star.on('click', () => {
    $star.removeClass('far');
    $star.addClass('fas');
  })
})
