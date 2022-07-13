window.addEventListener('load', function() {

    var four = document.querySelector('.four');
    var five = document.querySelector('.five');
    var six = document.querySelector('.six');
    delay = 1250;

    setTimeout(function() {
      $('.content-2').addClass('loaded');
    }, 2000);

    var animation = function() {
      setTimeout(function() {
        four.style.top = '0%';
      }, delay *2);
      setTimeout(function() {
        four.style.top = '100%';
      }, delay * 5);

      setTimeout(function() {
        five.style.top = '0%';
      }, delay * 6);
      setTimeout(function() {
        five.style.top = '100%';
      }, delay * 11);

      setTimeout(function() {
        six.style.top = '0%';
      }, delay * 12);
      setTimeout(function() {
        six.style.top = '100%';
      }, delay * 17);
    };
    animation();
    setInterval(animation, delay * 18);
  });