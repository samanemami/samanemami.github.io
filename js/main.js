/*
	Future Imperfect by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)",
  });

  $(function () {
    var $window = $(window),
      $body = $("body"),
      $menu = $("#menu"),
      $shareMenu = $("#share-menu"),
      $sidebar = $("#sidebar"),
      $main = $("#main");

    // TODO: Fix this, or implement lazy load.
    // Disable animations/transitions until the page has loaded.
    //	$body.addClass('is-loading');

    //	$window.on('load', function() {
    //		window.setTimeout(function() {
    //			$body.removeClass('is-loading');
    //		}, 100);
    //	});

    // Fix: Placeholder polyfill.
    $("form").placeholder();

    // Prioritize "important" elements on medium.
    skel.on("+medium -medium", function () {
      $.prioritize(
        ".important\\28 medium\\29",
        skel.breakpoint("medium").active
      );
    });

    // IE<=9: Reverse order of main and sidebar.
    if (skel.vars.IEVersion <= 9) $main.insertAfter($sidebar);

    $menu.appendTo($body);
    $shareMenu.appendTo($body);

    $menu.panel({
      delay: 500,
      hideOnClick: true,
      hideOnEscape: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $body,
      visibleClass: "is-menu-visible",
    });

    $shareMenu.panel({
      delay: 500,
      hideOnClick: true,
      hideOnEscape: true,
      hideOnSwipe: true,
      resetScroll: true,
      resetForms: true,
      side: "right",
      target: $body,
      visibleClass: "is-share-visible",
    });

    // Menu.
    /*$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});*/

    // Search (header).
    var $search = $("#search"),
      $search_input = $search.find("input");

    $body.on("click", '[href="#search"]', function (event) {
      event.preventDefault();

      // Not visible?
      if (!$search.hasClass("visible")) {
        // Reset form.
        $search[0].reset();

        // Show.
        $search.addClass("visible");

        // Focus input.
        $search_input.focus();
      }
    });

    $search_input
      .on("keydown", function (event) {
        if (event.keyCode == 27) $search_input.blur();
      })
      .on("blur", function () {
        window.setTimeout(function () {
          $search.removeClass("visible");
        }, 100);
      });

    // Intro.
    var $intro = $("#intro");

    // Move to main on <=large, back to sidebar on >large.
    skel
      .on("+medium", function () {
        $intro.prependTo($main);
      })
      .on("-medium", function () {
        $intro.prependTo($sidebar);
      });
  });

  // Toggle menu open class on header
  $("#menu-toggle").on("click", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $("#header").toggleClass("menu-open");
    $("body").toggleClass("menu-open");
  });

  // use delegated handler (works even if links are loaded later)
  $(document).on("click", "#header .links a", function () {
    $("#header").removeClass("menu-open");
    $("body").removeClass("menu-open");
  });

  // close when clicking outside the panel
  $(document).on("click", function (e) {
    if ($("body").hasClass("menu-open")) {
      if ($(e.target).closest("#header .links, #menu-toggle").length === 0) {
        $("#header").removeClass("menu-open");
        $("body").removeClass("menu-open");
      }
    }
  });

  // close on ESC
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("#header").removeClass("menu-open");
      $("body").removeClass("menu-open");
    }
  });

  // assets/js/header-scroll.js
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    if (!header) return;

    const toggleHeader = () => {
      header.classList.toggle("scrolled", window.scrollY > 40);
    };

    toggleHeader(); // run once on load
    window.addEventListener("scroll", toggleHeader, { passive: true });
  });
})(jQuery);
