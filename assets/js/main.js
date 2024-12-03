$(document).ready(function () {
  // ================================
  //toggle sub menu
  // ================================
  $(".menu-item-has-children").click(function () {
    if ($(window).width() < 992) {
      $(this).toggleClass("show");
      $(this).find(".sub-menu").slideToggle();
    }
  });

  // ================================
  // toggle azino drawer
  // ================================

  const $overlay = $(".overlay");
  const $closecartDrawer = $(".drawer .close");
  const $drawer = $(".drawer");
  const $toggleDrawerBtn = $(".toggle-drawer-btn");

  function $toggleOzinoOverlay(show) {
    show ? $overlay.toggleClass("show", show) : $overlay.toggleClass("show");
  }

  // Helper function to toggle azino drawer visibility based on data-drawer value
  function $toggleAzinoDrawer(drawerType, show) {
    console.log(drawerType)
    const $uniqDrawer = $(`.drawer[data-drawer="${drawerType}"]`);

    if (drawerType) {
      $drawer.not(`[data-drawer="${drawerType}"]`).removeClass("show");
    } else {
      $drawer.removeClass("show");
    }

    if ($uniqDrawer.length > 0) {
      show
        ? $uniqDrawer.toggleClass("show", show)
        : $uniqDrawer.toggleClass("show");
    }
  }

  function showOverlayAndAzinoDrawer(e) {
    e.preventDefault();
    const drawerType = $(this).data("drawer");

    if (drawerType) {
      $toggleAzinoDrawer(drawerType); // Show the specific drawer
      $drawer.hasClass("show")
        ? $toggleOzinoOverlay(true)
        : $toggleOzinoOverlay(false);
    }
  }

  // Function to close overlay and azino drawer when clicking outside the overlay
  function closeOverlayOnClickOutside(event) {
    if ($(event.target).is($overlay)) {
      $toggleOzinoOverlay(false);
      $toggleAzinoDrawer(false);
    }
  }


  if ($toggleDrawerBtn.length) {
    $toggleDrawerBtn.on("click", showOverlayAndAzinoDrawer);
  }

  //close btn
  function closeDrawer($closeBtn) {
    $closeBtn.on("click", function (e) {
      const drawerType = $(this).closest($drawer).data("drawer");
      e.preventDefault();
      $toggleOzinoOverlay(false);
      $toggleAzinoDrawer(false, drawerType);
    });
  }

  closeDrawer($closecartDrawer);

  // Close overlay and login form when clicking outside the overlay
  if ($overlay.length) {
    $(window).on("click", closeOverlayOnClickOutside);
  }
});
