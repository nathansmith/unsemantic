// JSLint settings:
/*global
  alert,
  clearTimeout,
  console,
  jQuery,
  setTimeout
*/

var APP = (function($, window, document, undefined) {
  'use strict';

  $(document).ready(function() {
    APP.go();
  });

  // "Private constant" vars.
  var body;

  return {
    // APP.go
    go: function() {
      var i, j = APP.init;

      for (i in j) {
        // Run everything in APP.init
        j.hasOwnProperty(i) && j[i]();
      }
    },
    // APP.init
    init: {
      // APP.init.assign_dom_vars
      assign_dom_vars: function() {
        body = $(document.body);
      },
      // APP.init.stop_dead_links
      stop_dead_links: function(ev) {
        body.on('click', 'a[href="#"]', function(ev) {
          // Stop that link!
          ev.preventDefault();
        });
      },
      // APP.init.measure_width
      measure_width: function() {
        var timer;
        var block = $('.example-block');

        if (!block.length) {
          return;
        }

        function do_calc() {
          clearTimeout(timer);

          block.each(function() {
            var el = $(this);
            var width = el.outerWidth() + 'px';
            el.find('.dynamic-px-width:first').html(width);
          });
        }

        $(window).load(function() {
          do_calc();
        });

        $(window).off('resize.do_calc').on('resize.do_calc', function() {
          clearTimeout(timer);
          timer = setTimeout(do_calc, 16);
        });
      }
    }
  };

// Parameters: jQuery, window, document.
})(jQuery, this, this.document);