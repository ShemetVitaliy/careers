$(document).ready(function () {
  let playVideo = false;
  $('.play-video').click(function () {

    if (!playVideo) {
      $('.banner__video video').trigger('play');
      $('.play-video').addClass('play');
    } else {
      $('.banner__video video').trigger('pause');
      $('.play-video').removeClass('play');
    }
    playVideo = !playVideo;
  });
});
