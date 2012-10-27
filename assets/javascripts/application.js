// JSLint settings:
/*global
  alert,
  clearTimeout,
  console,
  jQuery,
  setTimeout
*/

(function($, window, document, undefined) {
  $(window).load(function() {
    var timer;

    function do_calc() {
      clearTimeout(timer);

      $('section').each(function() {
        var el = $(this).find('.dynamic-px-width:first');
        var width = el.outerWidth() + 'px';
        el.html(width);
      });
    }

    do_calc();

    $(window).resize(function() {
      clearTimeout(timer);
      timer = setTimeout(do_calc, 16);
    });
  });
})(jQuery, this, this.document);