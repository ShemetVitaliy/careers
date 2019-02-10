$(document).ready(function () {
  $('.play-video').fancybox({
    type: 'inline'
  });
  $('.decades-day').fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: false
  });
  $('.buffalo-press').fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: false
  });
  $('.bowling-party').fancybox({
    prevEffect: 'none',
    nextEffect: 'none',
    closeBtn: false
  });
});
// play-video-popup
$(document).ready(function () {
  let playVideo = false;
  $('.video-modal video').click(function () {
    if (!playVideo) {
      $('.video-modal video').trigger('play');
    } else {
      $('.video-modal video').trigger('pause');
    }
    playVideo = !playVideo;
  });
});

